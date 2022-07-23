import { fetchGraphQL } from "../lib/api";

export const fetchListings = async (locale) => {
  try {
    const res = await fetchGraphQL(`
      query {
        listingCollection(locale: "${mapLocale(locale)}") {
          items {
            title
          }
        }
      }
  `);

  return res.listingCollection.items
  } catch (e) {
    console.error(e);
  }
};

const mapLocale = (locale) => {
  switch (locale) {
    case 'en':
      return 'en-US';
      break;
    case 'nl':
      return 'nl'
      break;
    default:
      return 'en-US';
  }
}