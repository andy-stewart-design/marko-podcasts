import "@testing-library/jest-dom";
import { render } from "@marko/testing-library";
import contentComponent from "../index.marko"; // Adjust path as needed

describe("Content Component", () => {
  const contentMock = {
    images: {
      xl: "path/to/xl.jpg",
      lg: "path/to/lg.jpg",
      md: "path/to/md.jpg",
      sm: "path/to/sm.jpg",
    },
    title: "Test Title",
    artist: "Test Artist",
    genres: ["Genre1", "Genre2"],
    appleURL: "https://apple.podcasts.com",
    rssURL: "https://rss.feed.com",
  };

  it("renders the correct image source", async () => {
    const { getByRole } = await render(contentComponent, {
      content: contentMock,
    });
    expect(getByRole("img")).toHaveAttribute("src", contentMock.images.xl);
  });

  it("includes the content title in the alt text", async () => {
    const { getByRole } = await render(contentComponent, {
      content: contentMock,
    });
    expect(getByRole("img")).toHaveAttribute(
      "alt",
      expect.stringContaining(contentMock.title)
    );
  });

  it("displays the artist and title correctly", async () => {
    const { getByText } = await render(contentComponent, {
      content: contentMock,
    });
    expect(getByText(contentMock.artist)).toBeInTheDocument();
    expect(getByText(contentMock.title)).toBeInTheDocument();
  });

  it("lists all genres", async () => {
    const { getAllByRole } = await render(contentComponent, {
      content: contentMock,
    });
    const listItems = getAllByRole("listitem");
    expect(listItems).toHaveLength(contentMock.genres.length);
    contentMock.genres.forEach((genre, index) => {
      expect(listItems[index]).toHaveTextContent(genre);
    });
  });

  it("renders external links correctly", async () => {
    const { getByText } = await render(contentComponent, {
      content: contentMock,
    });
    expect(getByText("Apple Podcasts")).toHaveAttribute(
      "href",
      contentMock.appleURL
    );
    expect(getByText("RSS Feed")).toHaveAttribute("href", contentMock.rssURL);
  });
});
