import React from "react";
import { MiTextField } from "./TextField";

export default {
  title: "Material/TextField",
  component:MiTextField,
  argTypes: {  },
};
const Template = (args) => <MiTextField {...args} />;

export const OutlinedTextField = Template.bind({});
export const FilledTextField = Template.bind({});
OutlinedTextField.args={
  label:"Outlined",
   variant:"outlined"
}
FilledTextField.args={
  label:"Filled",
  variant:"filled"
}