import { Button, ButtonProps } from "@material-ui/core";
import React from "react";
import PropTypes from 'prop-types';

export const MiButton = (props) => {
  return (
    <Button
      {...props}
    >
      {props.label}
    </Button>
  );
};
MiButton.propTypes = {
  "children": PropTypes.node,
  "classes": PropTypes.object,
  "color": PropTypes.oneOf(['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']),
  "component": PropTypes.elementType,
  "disabled": PropTypes.bool,
  "disableElevation": PropTypes.bool,
  "disableFocusRipple": PropTypes.bool,
  "disableRipple": PropTypes.bool,
  "endIcon": PropTypes.node,
  "fullWidth": PropTypes.bool,
  "href": PropTypes.string,
  "size": PropTypes.oneOf(['small' , 'medium' , 'large']),
  "startIcon": PropTypes.node,
  "sx": PropTypes.object,
  "variant": PropTypes.oneOf(['contained','outlined' , 'text' , 'string'])
};
MiButton.defaultProps = {
   
  disabled: false,
  color:'primary',
};
