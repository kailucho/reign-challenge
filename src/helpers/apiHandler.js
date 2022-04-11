const { REACT_APP_API_URL } = process.env;
const DEFAULT_METHOD = "GET";

async function FetchData(endpointName, method = DEFAULT_METHOD, params) {
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

export { FetchData };
