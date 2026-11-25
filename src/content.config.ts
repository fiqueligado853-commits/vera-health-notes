import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articles = defineCollection({
  loader: glob({
    base: "./src/content/articles",
    pattern: "**/*.md"
  }),
  schema: z.object({
    id: z.string(),
    title: z.string().min(15),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    description: z.string().optional(),
    category: z.enum([
      "everyday-wellness",
      "nutrition-ingredients",
      "healthy-aging",
      "product-research"
    ]),
    status: z.enum(["draft", "review", "approved"]),
    language: z.literal("en-US"),
    affiliate_links: z.boolean().default(false),
    clinical_review: z.enum([
      "pending", "approved", "not-required"
    ]).default("pending"),
    editorial_review: z.enum([
      "pending", "approved"
    ]).default("pending"),
    source_review: z.enum([
      "pending", "approved"
    ]).default("pending")
  })
});

export const collections = { articles };
