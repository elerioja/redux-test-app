/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */

export default (fetcher, config = {}) =>
  (searchQuery = "") =>
    fetcher(`${config.apiUrl}search?query=${searchQuery}`, {
      method: "GET",
      headers: { Authorization: config.apiKey },
    })
      .then((response) =>
        response.status < 400
          ? response.json(response)
          : Promise.reject(response.status)
      )
      .catch((error) => console.error(`FetchApi error :: ${error}`) || null);
