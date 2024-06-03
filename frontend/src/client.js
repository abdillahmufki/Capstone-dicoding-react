import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "2baj5orm",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-05-30",
});
