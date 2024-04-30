import { Typography } from "@mui/material";
import React from "react";
import stringReplace from "react-string-replace";

const HighlightText = ({ text, keyword, highlightStyle, sx }: any) => {
  const processedText = stringReplace(text, keyword, (match, i) => (
    <Typography key={i} component="span" sx={sx} style={highlightStyle}>
      {match}
    </Typography>
  ));

  return (
    <Typography sx={sx} component="span">
      {processedText}
    </Typography>
  );
};

const HighlightedTextTitle = ({ text, keyword, highlightColor, sx }: any) => {
  const highlightStyle = { color: highlightColor };
  return (
    <HighlightText
      text={text}
      keyword={keyword}
      highlightStyle={highlightStyle}
      sx={sx}
    />
  );
};
export default HighlightedTextTitle;
