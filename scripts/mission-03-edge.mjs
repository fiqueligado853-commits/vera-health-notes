import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
const origin = "https://verahealthnotes.com";
const agents = ["Googlebot","bingbot","OAI-SearchBot","GPTBot","ChatGPT-User","PerplexityBot","Perplexity-User"];
async function check(url, agent, follow = "follow") {
  try {
    const res = await fetch(url,{redirect:follow,signal:AbortSignal.timeout(15000),headers:{"user-agent":agent ?? "VHN-Public-QA/1.0"}});
    const body = Buffer.from(await res.arrayBuffer());
    console.log(JSON.stringify({probe:agent ?? "neutral",url,final:res.url,http:res.status,
      type:res.headers.get("content-type"), robots:res.headers.get("x-robots-tag"),
      location:res.headers.get("location"),ray:res.headers.get("cf-ray"),
      challenge:res.headers.get("cf-mitigated"),bytes:body.length,
      sha256:createHash("sha256").update(body).digest("hex")}));
    return { body, text: body.toString("utf8"), status:res.status };
  } catch (error) { console.log(JSON.stringify({url,agent,error:error.message})); return {}; }
}

await check("http://verahealthnotes.com/robots.txt",null,"manual");
const robots = await check(origin+"/robots.txt");
if (robots.status===200) {
  const source=readFileSync("public/robots.txt");
  console.log("ROBOTS_BODY "+JSON.stringify(robots.text));
  console.log("ROBOTS_MATCH "+JSON.stringify({exact:robots.body.equals(source),normalizeLineEndings:robots.text.replaceAll("\r\n","\n")===source.toString().replaceAll("\r\n","\n")}));
}
const index = await check(origin+"/astro-sitemap-index.xml");
for (const match of (index.text??"").matchAll(/<loc>(https:\/\/verahealthnotes\.com\/[^<]+)<\/loc>/g)) {
  const s = await check(match[1]);
  const locs=[...(s.text??"").matchAll(/<loc>([^<]+)<\/loc>/g)].map(x=>x[1]);
  console.log("SITEMAP_COUNT "+JSON.stringify({url:match[1],total:locs.length,articles:locs.filter(x=>x.includes("/articles/")&&!x.endsWith("/articles/")).length}));
}
for (const slug of ["what-to-look-for-when-buying-lower-sodium-foods","clinically-tested-supplement-claim"]) {
  const sample = await check(origin+"/articles/"+slug+"/");
  if(sample.status===200)console.log("SNIPPET_META "+JSON.stringify({slug,directives:[...(sample.text??"").matchAll(/<meta\b[^>]*name="(?:robots|googlebot|bingbot)"[^>]*>/gi)].map(v=>v[0]),dataNosnippet:/\bdata-nosnippet\b/i.test(sample.text??"")}));
}
for (const agent of agents) await check(origin+"/robots.txt",agent);
