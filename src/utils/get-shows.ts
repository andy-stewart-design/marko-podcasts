interface Podcast {
  wrapperType: "track";
  kind: "podcast";
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  collectionHdPrice: number;
  releaseDate: string;
  collectionExplicitness: "notExplicit";
  trackExplicitness: "explicit";
  trackCount: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: "Explicit";
  artworkUrl600: string;
  genreIds: number[];
  genres: string[];
}

export async function getShows(query: string) {
  if (query === "") {
    return getPopularShows();
  } else {
    return getShowsByKeyword(query);
  }
}

export async function getPopularShows() {
  const response = await fetch(
    "https://rss.applemarketingtools.com/api/v2/us/podcasts/top/12/podcasts.json"
  );
  const json = await response.json();
  const appleIDs = json.feed.results.map((show) => show.id);

  const showReseults = appleIDs.map((id) => {
    return fetch(`https://itunes.apple.com/lookup?id=${id}`).then((res) =>
      res.json()
    );
  });

  const showData = (await Promise.all(showReseults)).map(
    (show) => show.results
  );

  return showData.flat().map((show) => formatPodcastData(show));
}

export async function getShowsByKeyword(query = "technology") {
  const params = new URLSearchParams();
  params.set("term", query);
  params.set("media", "podcast");
  params.set("limit", "12");
  const response = await fetch(
    `https://itunes.apple.com/search?${params.toString()}`
  );
  const json = await response.json();
  return json.results.map((show) => formatPodcastData(show));
}

function formatPodcastData(data: Podcast) {
  return {
    id: data.trackId,
    title: data.trackName,
    artist: data.artistName,
    images: {
      xl: data.artworkUrl600,
      lg: data.artworkUrl100,
      md: data.artworkUrl60,
      sm: data.artworkUrl30,
    },
    appleURL: data.trackViewUrl,
    rssURL: data.feedUrl,
    genres: data.genres.slice(0, 3),
  };
}
