export function callApi(ORG_ID, API_KEY) {
  const url = `https://platform.bodygram.com/api/orgs/${ORG_ID}/scan-tokens`;

  const headers = {
    "Content-Type": "application/json",
    Authorization: API_KEY,
  };

  const body = JSON.stringify({
    customScanId: "33",
    lifetime: 2630000,
    scope: [
      "api.platform.bodygram.com/scans:create",
      "api.platform.bodygram.com/scans:read",
    ],
  });

  return fetch(url, {
    method: "POST",
    headers: headers,
    body: body,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw new Error("There was a problem with your fetch operation:", error);
    });
}
