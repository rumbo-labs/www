import React, { useState } from "react";

function Discord() {
  const [hover, setHover] = useState<boolean>(false);
  return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="18"
      fill="none"
      viewBox="0 0 23 18"
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
    >
      <g clipPath="url(#clip0_257_35)">
        <path
          fill={!hover ? "#161614" : "#49B1EB"}
          d="M19.47 1.603A18.827 18.827 0 0014.79.136a.07.07 0 00-.075.036c-.214.393-.409.796-.583 1.21a17.334 17.334 0 00-5.26 0 12.294 12.294 0 00-.59-1.21.075.075 0 00-.075-.036C6.59.417 5.016.91 3.524 1.603a.067.067 0 00-.03.026C.51 6.13-.306 10.52.096 14.855a.081.081 0 00.03.055 19.002 19.002 0 005.743 2.933.075.075 0 00.08-.027c.444-.61.837-1.255 1.176-1.93a.075.075 0 00-.015-.086.073.073 0 00-.025-.016c-.62-.24-1.22-.53-1.794-.865a.074.074 0 01-.037-.06.075.075 0 01.03-.064c.12-.09.24-.186.356-.281a.071.071 0 01.074-.01c3.764 1.735 7.84 1.735 11.559 0a.07.07 0 01.075.009c.115.095.236.191.357.282a.075.075 0 01-.006.124c-.573.339-1.169.624-1.795.863a.072.072 0 00-.043.042.075.075 0 00.004.061c.345.676.74 1.32 1.174 1.93a.074.074 0 00.08.028 18.941 18.941 0 005.753-2.934.075.075 0 00.03-.053C23.38 9.844 22.098 5.49 19.5 1.63a.058.058 0 00-.03-.027zM7.686 12.215c-1.133 0-2.067-1.05-2.067-2.342 0-1.29.915-2.341 2.067-2.341 1.16 0 2.085 1.06 2.067 2.341 0 1.292-.916 2.343-2.067 2.343v-.001zm7.642 0c-1.133 0-2.067-1.05-2.067-2.342 0-1.29.916-2.341 2.067-2.341 1.16 0 2.085 1.06 2.068 2.341 0 1.292-.907 2.343-2.068 2.343v-.001z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_257_35">
          <path fill="#fff" d="M0 0H23V18H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}


export default Discord;