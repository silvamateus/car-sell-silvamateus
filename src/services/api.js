/*
 * Api call
 * Required: uri, method, params
 */
const api = async (uri, method, params) =>
  await fetch(
    `https://us-central1-spotz-prod.cloudfunctions.net/function-sell-my-car/${uri}`,
    {
      method,
      params,
    }
  );
/*
 * GET method
 * Required: none
 * Optional: key, value
 */
export const get = async (body = {}) => {
  return await api("announcements", "GET", body);
};
