import React from "react";
import { MiButton } from "./Button";

export default {
  title: "Material/Buttons",
  component:MiButton,
  argTypes: { refresh: { action: "refresh" } },
};
const Template = (args) => <MiButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};