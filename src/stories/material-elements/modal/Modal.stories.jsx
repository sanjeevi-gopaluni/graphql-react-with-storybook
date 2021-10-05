import React from "react";
import { MiModal } from "./Modal";
import { Button  } from "@material-ui/core";
export default {
  title: "Material/Modal",
  component:MiModal,
  argTypes: {  },
};
const Template = (args) => <MiModal {...args} >{args.children}</MiModal>;

export const openModal = Template.bind({});
openModal.args={
  open:true,
  children:"hello"
} 