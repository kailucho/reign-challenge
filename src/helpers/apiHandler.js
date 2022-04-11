import { tabOptions } from "../types/types";
import { filterCompleteNews } from "../utils/filterCompleteNews";
import { getFavorites } from "../utils/localStorage";

const { REACT_APP_API_URL } = process.env;

async function FetchData(endpointName, params) {
  try {
    const response = await fetch(
      `${REACT_APP_API_URL}${endpointName}?` + new URLSearchParams(params)
    );
    const data = response.json();
    if (data) return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
async function fetchNews(endpointName, params, filter) {
  const favorites = getFavorites();
  if (filter === tabOptions[0].text) {
    const data = await FetchData(endpointName, params);
    const dataFiltered = filterCompleteNews(data.hits);
    const orderedData = dataFiltered.sort((a, b) => {
      return (
        new Date(a.created_at).valueOf() - new Date(a.created_at).valueOf()
      );
    });
    const dataUpdated = orderedData.map((item) => {
      const index = favorites.findIndex(
        (fav) => fav.objectID === item.objectID
      );
      return {
        ...item,
        isFavorite: index > -1,
      };
    });
    return dataUpdated;
  } else {
    return favorites;
  }
}

export { FetchData, fetchNews };
