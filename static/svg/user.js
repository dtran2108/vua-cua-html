import React from "react";

export const User = (props) => {
  return (
    <svg
      id="Capa_1"
      enable-background="new 0 0 512 512"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="256"
        x2="256"
        y1="512"
        y2="0"
      >
        <stop offset="0" stop-color="#5558ff" />
        <stop offset="1" stop-color="#00c0ff" />
      </linearGradient>
      <linearGradient
        id="SVGID_2_"
        gradientUnits="userSpaceOnUse"
        x1="256"
        x2="256"
        y1="452"
        y2="91"
      >
        <stop offset="0" stop-color="#addcff" />
        <stop offset=".5028" stop-color="#eaf6ff" />
        <stop offset="1" stop-color="#eaf6ff" />
      </linearGradient>
      <g>
        <g>
          <g>
            <circle cx="256" cy="256" fill="url(#SVGID_1_)" r="256" />
          </g>
        </g>
        <g>
          <g>
            <path
              d="m331 166c0-41.355-33.645-75-75-75s-75 33.645-75 75 33.645 75 75 75 75-33.645 75-75zm-75 75c-74.439 0-135 60.561-135 135v14.058c0 4.264 1.814 8.326 4.99 11.171 36.538 32.74 82.71 50.771 130.01 50.771 47.301 0 93.473-18.031 130.01-50.771 3.176-2.845 4.99-6.908 4.99-11.171v-14.058c0-74.439-60.561-135-135-135z"
              fill="url(#SVGID_2_)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};