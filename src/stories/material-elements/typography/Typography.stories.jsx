import React from "react";
import { MiTypography } from "./Typography";

export default {
  title: "Material/Typography",
  component:MiTypography,
  argTypes: {  },
};
const Template = (args) => <MiTypography {...args} >{args.children}</MiTypography>;

export const h1 = Template.bind({});
export const h2 = Template.bind({});
h1.args={
  label:"H1",
  children:"H1 Heading",
  variant:"h1"
}
h2.args={
  label:"H2",
  children:"H2 Heading",
  variant:"h2",
  size:"small"
}