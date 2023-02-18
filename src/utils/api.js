export default function getData(
  url,
  baseUrl = "https://6b1rqw-3001.preview.csb.app"
) {
  return fetch(baseUrl + url).then((res) => {
    if (!res.ok) {
      throw Error("There was a problem fetching data.");
    }

    return res.json();
  });
}
