import { fetchGraphQL } from "../lib/api";

export const fetchListings = async (locale) => {
  try {
    return await fetchGraphQL(`
      query {
        listingCollection(locale: "${locale}") {
          items {
            title
          }
        }
      }
  `);
  } catch (e) {
    console.error(e);
  }
};
