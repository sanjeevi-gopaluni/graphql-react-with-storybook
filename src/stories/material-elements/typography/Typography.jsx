import { Typography  } from "@material-ui/core";
import React from "react";
import PropTypes from 'prop-types';

export const MiTypography = (props) => {
  return (
    <Typography
      {...props}
    >
      {props.children}
    </Typography>

  );
};
MiTypography.propTypes = {
  "align":PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
  "children":PropTypes.node,
  "classes":PropTypes.object,
  "component":PropTypes.elementType,
  "gutterBottom":PropTypes.bool,
  "noWrap":PropTypes.bool,
  "paragraph":PropTypes.bool,
  "sx":PropTypes.object,
  "variant":PropTypes.oneOf(['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2', 'string']),
  "variantMapping":PropTypes.object,
  "href":PropTypes.string,
  "size":PropTypes.oneOf(['small', 'medium', 'large', 'string']),
  "startIcon":PropTypes.node,
  "sx":PropTypes.object,
};
MiTypography.defaultProps = {
  children: "Sample Text",
  size:'small',
};
