import React from "react";
import PropTypes from "prop-types";

export const SettingsOverscan = ({ className, height = "24", width = "24", style = {}, fill = "#F47738", onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_939)">
        <path
          d="M12.01 5.5L10 8H14L12.01 5.5ZM18 10V14L20.5 12.01L18 10ZM6 10L3.5 12.01L6 14V10ZM14 16H10L12.01 18.5L14 16ZM21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19.01H3V4.99H21V19.01V19.01Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_939">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};



SettingsOverscan.propTypes = {
  /** custom width of the svg icon */
  width: PropTypes.string,
  /** custom height of the svg icon */
  height: PropTypes.string,
  /** custom colour of the svg icon */
  fill: PropTypes.string,
  /** custom class of the svg icon */
  className: PropTypes.string,
  /** custom style of the svg icon */
  style: PropTypes.object,
  /** Click Event handler when icon is clicked */
  onClick: PropTypes.func,
};
