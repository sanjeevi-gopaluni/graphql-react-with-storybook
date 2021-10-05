import { TextField  } from "@material-ui/core";
import React from "react";
import PropTypes from 'prop-types';

export const MiTextField = (props) => {
  return (
    <TextField
      {...props}
   / >
  );
};
MiTextField.propTypes = {
  "autoComplete":PropTypes.string,
  "autoFocus":PropTypes.bool,
  "classes":PropTypes.object,
  "color":PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning' ]),
  "defaultValue":PropTypes.any,
  "disabled":PropTypes.bool,
  "error":PropTypes.bool,
  "FormHelperTextProps":PropTypes.object,
  "fullWidth":PropTypes.bool,
  "helperText":PropTypes.node,
  "id":PropTypes.string,
  "InputLabelProps":PropTypes.object,
  "inputProps":PropTypes.object,
  "InputProps":PropTypes.object,
  "label":PropTypes.node,
  "margin":PropTypes.oneOf(['dense', 'none', 'normal']),
  "maxRows":PropTypes.oneOf(['number','string']),
  "minRows":PropTypes.oneOf(['number','string']),
  "multiline":PropTypes.bool,
  "name":PropTypes.string,
  "onChange":PropTypes.func,
  "placeholder":PropTypes.string,
  "required":PropTypes.bool,
  "rows":PropTypes.oneOf(['number','string']),
  "select":PropTypes.bool,
  "SelectProps":PropTypes.object,
  "size":PropTypes.oneOf(['medium', 'small', 'string']),
  "sx":PropTypes.object,
  "type":PropTypes.string,
  "value":PropTypes.any,
  "variant":PropTypes.oneOf(['filled', 'outlined','standard']),
};
MiTextField.defaultProps = {
  disabled: false,
  color:'primary',
};
