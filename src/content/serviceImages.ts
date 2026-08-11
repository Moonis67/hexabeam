const serviceImageExtensions: Record<string, string> = {
  "corporate-transportation": "avif",
};

export const serviceImageFor = (slug: string) =>
  `/assets/service-images/${slug}.${serviceImageExtensions[slug] ?? "jpg"}?v=20260811-folder`;
