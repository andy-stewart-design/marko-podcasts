export async function getPopularShows() {
  const response = await fetch(
    "https://rss.applemarketingtools.com/api/v2/us/podcasts/top/10/podcasts.json"
  );
  const json = await response.json();
  return json.feed.results;
}
