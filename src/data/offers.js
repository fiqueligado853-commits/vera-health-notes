// This catalog is build-time data. No offer is eligible for placement until verified.
export const offers = {
  vitalflush: {
    name: "VitalFlush",
    status: "hold",
    relatedArticleIds: [],
    destination: null,
    vslVersions: ["lead-02", "lead-03"],
    lead03: {
      embedUrl: null,
      checks: [
        { id: "player-and-rights", approved: false },
        { id: "claims-and-commercial-terms", approved: false },
        { id: "checkout-and-attribution", approved: false },
        { id: "privacy-and-playback", approved: false },
      ],
      packages: [
        { label: "1 bottle", checkoutUrl: null, terms: null },
        { label: "2 bottles", checkoutUrl: null, terms: null },
        { label: "3 bottles", checkoutUrl: null, terms: null },
      ],
    },
    validationSources: [],
    approvedCommercialTerms: null,
    pending: ["seller and label", "checkout terms", "media rights", "affiliate attribution"]
  },
  lunara: {
    name: "Lunara",
    status: "hold",
    relatedArticleIds: [],
    destination: null,
    vslVersions: [],
    validationSources: [],
    approvedCommercialTerms: null,
    pending: ["offer verification", "checkout terms", "affiliate attribution"]
  }
};
