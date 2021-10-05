import { Modal,Button  } from "@material-ui/core";
import React from "react";
import PropTypes from 'prop-types';

export const MiModal = (props) => {
   
  return <Modal  {...props}> <div>{props.children}</div></Modal>;
};
MiModal.propTypes = {
"children":PropTypes.element,
"open":PropTypes.bool,
"BackdropComponent":PropTypes.elementType,
"BackdropProps":PropTypes.object,
"classes":PropTypes.object,
"closeAfterTransition":PropTypes.bool,
"component":PropTypes.elementType, 
"componentsProps":PropTypes.object,
"disableAutoFocus":PropTypes.bool,
"disableEnforceFocus":PropTypes.bool,
"disableEscapeKeyDown":PropTypes.bool,
"disablePortal":PropTypes.bool,
"disableRestoreFocus":PropTypes.bool,
"disableScrollLock":PropTypes.bool,
"hideBackdrop":PropTypes.bool,
"keepMounted":PropTypes.bool,
"onBackdropClick":PropTypes.func,
"onClose":PropTypes.func,
"sx":PropTypes.object,
};
MiModal.defaultProps = {
  // children: <div><Button color="secondary" variant="contained" onClick={(e) => { console.log(e) }}>Refresh</Button></div>,
  open:true,
};
