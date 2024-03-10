import { addRenderBodies } from "../../utils/storybook";
import Card from "./index.marko";

const Template = (args) => ({
  input: addRenderBodies(args),
});

export default {
  title: "Example/Podcast Card",
  component: Card,
  argTypes: {
    title: {
      control: { type: "text" },
    },
  },
};

export const Primary = Template.bind({});
Primary.args = {
  content: {
    id: 360084272,
    title: "The Joe Rogan Experience",
    artist: "Joe Rogan",
    images: {
      xl: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/a6/36/c6/a636c689-ad3a-a71c-3486-a5f51ae7a9f5/mza_13284170885507902541.jpg/600x600bb.jpg",
      lg: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/a6/36/c6/a636c689-ad3a-a71c-3486-a5f51ae7a9f5/mza_13284170885507902541.jpg/100x100bb.jpg",
      md: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/a6/36/c6/a636c689-ad3a-a71c-3486-a5f51ae7a9f5/mza_13284170885507902541.jpg/60x60bb.jpg",
      sm: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/a6/36/c6/a636c689-ad3a-a71c-3486-a5f51ae7a9f5/mza_13284170885507902541.jpg/30x30bb.jpg",
    },
    appleURL:
      "https://podcasts.apple.com/us/podcast/the-joe-rogan-experience/id360084272?uo=4",
    rssURL: "https://feeds.megaphone.fm/GLT1412515089",
    genres: ["Comedy", "Podcasts"],
  },
};
