import { addRenderBodies } from "../../utils/storybook";
import Button from "./index.marko";

const Template = (args) => ({
  input: addRenderBodies(args),
});

export default {
  title: "Example/CTAButton",
  component: Button,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

export const Primary = Template.bind({});
Primary.args = {
  size: "medium",
  renderBody: "Hello world",
};
