import { memo } from 'react';


const WindHeading = props => (

  <svg
    transform={"rotate (" + props.angle + ")"}
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12} cy={12.154} r={12} fill="#1E213A" />
    <circle cx={12} cy={12.154} r={12} fill="#000" fillOpacity={0.2} />
    <path
      d="m12 5.404 4.5 13.5-4.5-2.455-4.5 2.455 4.5-13.5Z"
      fill="#BCBBC6"
      stroke="#BCBBC6"
      strokeLinejoin="round"
    />
  </svg>

);

export default memo(WindHeading);
