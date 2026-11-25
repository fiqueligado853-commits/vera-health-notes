export function isPublishable(article) {
  const d = article.data;

  return (
    d.status === "approved" &&
    d.editorial_review === "approved" &&
    d.source_review === "approved" &&
    ["approved", "not-required"].includes(d.clinical_review)
  );
}
