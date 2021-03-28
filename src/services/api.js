/*
 * Api call
 * Required: uri, method
 * Optional: query, params
 */
const api = async (uri, method, query = null, params = null) => {
  const queryString = query ? `?${query}` : "";
  try {
    return await fetch(
      `https://us-central1-spotz-prod.cloudfunctions.net/function-sell-my-car/${uri}${queryString}`,
      {
        method,
        body: params,
      }
    );
  } catch (error) {
    return error;
  }
};
/*
 * GET method
 * Required: none
 * Optional: query
 */
export const get = async (query) => {
  return await api("announcements", "GET", query);
};

export const post = async (params) => {
  return await api("contacts", "POST", null, params);
};
