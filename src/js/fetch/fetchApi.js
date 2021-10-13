/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */

export default (fetcher, config = {}) =>
  fetcher(`${config.apiUrl}`, {
    method: "GET",
    headers: { Authorization: config.apiKey },
  }).then((response) =>
    response.status < 400
      ? response.json(response)
      : response.err(response.status)
  );
