import * as React from "react";

import { IconSvgProps } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size || height}
    height={size || height}
    viewBox="0 0 375 375"
    preserveAspectRatio="xMidYMid meet"
    fill="#0077ff"
    {...props}
  >
    <g fillOpacity="1">
      <g transform="translate(29.115545, 251.748361)">
        <path d="M 67.109375 -125.203125 C 74.066406 -125.203125 80.941406 -124.410156 87.734375 -122.828125 C 94.535156 -121.242188 99.59375 -119.664062 102.90625 -118.09375 L 107.890625 -115.71875 L 94.140625 -88.203125 C 84.648438 -93.265625 75.640625 -95.796875 67.109375 -95.796875 C 62.367188 -95.796875 59.007812 -95.28125 57.03125 -94.25 C 55.050781 -93.226562 54.0625 -91.296875 54.0625 -88.453125 C 54.0625 -87.816406 54.140625 -87.179688 54.296875 -86.546875 C 54.453125 -85.921875 54.769531 -85.328125 55.25 -84.765625 C 55.726562 -84.210938 56.160156 -83.738281 56.546875 -83.34375 C 56.941406 -82.945312 57.613281 -82.507812 58.5625 -82.03125 C 59.519531 -81.5625 60.273438 -81.207031 60.828125 -80.96875 C 61.378906 -80.738281 62.285156 -80.382812 63.546875 -79.90625 C 64.816406 -79.4375 65.765625 -79.082031 66.390625 -78.84375 C 67.023438 -78.601562 68.09375 -78.242188 69.59375 -77.765625 C 71.09375 -77.296875 72.238281 -76.984375 73.03125 -76.828125 C 77.9375 -75.398438 82.207031 -73.816406 85.84375 -72.078125 C 89.476562 -70.347656 93.3125 -67.976562 97.34375 -64.96875 C 101.375 -61.96875 104.492188 -58.175781 106.703125 -53.59375 C 108.921875 -49.007812 110.03125 -43.789062 110.03125 -37.9375 C 110.03125 -10.269531 90.820312 3.5625 52.40625 3.5625 C 43.707031 3.5625 35.445312 2.21875 27.625 -0.46875 C 19.800781 -3.15625 14.148438 -5.84375 10.671875 -8.53125 L 5.453125 -12.8125 L 22.53125 -41.5 C 23.789062 -40.394531 25.445312 -39.085938 27.5 -37.578125 C 29.5625 -36.078125 33.28125 -34.019531 38.65625 -31.40625 C 44.03125 -28.800781 48.691406 -27.5 52.640625 -27.5 C 61.335938 -27.5 65.6875 -30.425781 65.6875 -36.28125 C 65.6875 -38.96875 64.578125 -41.0625 62.359375 -42.5625 C 60.148438 -44.0625 56.394531 -45.757812 51.09375 -47.65625 C 45.800781 -49.550781 41.65625 -51.289062 38.65625 -52.875 C 31.0625 -56.832031 25.050781 -61.300781 20.625 -66.28125 C 16.195312 -71.257812 13.984375 -77.859375 13.984375 -86.078125 C 13.984375 -98.410156 18.765625 -108.015625 28.328125 -114.890625 C 37.898438 -121.765625 50.828125 -125.203125 67.109375 -125.203125 Z M 67.109375 -125.203125 " />
      </g>
      <g transform="translate(123.466427, 251.748361)">
        <path d="M 8.78125 29.875 L 43.15625 13.046875 C 49.476562 23.472656 60.460938 28.6875 76.109375 28.6875 C 83.390625 28.6875 90.148438 26.351562 96.390625 21.6875 C 102.628906 17.03125 105.75 9.878906 105.75 0.234375 L 105.75 -8.78125 C 98.320312 -0.550781 85.046875 3.5625 65.921875 3.5625 C 48.367188 3.5625 33.898438 -2.640625 22.515625 -15.046875 C 11.140625 -27.460938 5.453125 -42.679688 5.453125 -60.703125 C 5.453125 -78.722656 11.140625 -93.976562 22.515625 -106.46875 C 33.898438 -118.957031 48.367188 -125.203125 65.921875 -125.203125 C 81.566406 -125.203125 94.609375 -120.378906 105.046875 -110.734375 L 105.75 -110.734375 L 105.75 -121.640625 L 147.734375 -121.640625 L 147.734375 3.3125 C 147.734375 23.070312 141.171875 38.328125 128.046875 49.078125 C 114.921875 59.828125 97.609375 65.203125 76.109375 65.203125 C 41.335938 65.203125 18.894531 53.425781 8.78125 29.875 Z M 58.203125 -81.328125 C 52.753906 -75.953125 50.03125 -69.078125 50.03125 -60.703125 C 50.03125 -52.328125 52.640625 -45.488281 57.859375 -40.1875 C 63.078125 -34.894531 69.953125 -32.25 78.484375 -32.25 C 86.703125 -32.25 93.457031 -34.9375 98.75 -40.3125 C 104.050781 -45.6875 106.703125 -52.484375 106.703125 -60.703125 C 106.703125 -69.078125 103.972656 -75.953125 98.515625 -81.328125 C 93.066406 -86.703125 86.390625 -89.390625 78.484375 -89.390625 C 70.421875 -89.390625 63.660156 -86.703125 58.203125 -81.328125 Z M 58.203125 -81.328125 " />
      </g>
      <g transform="translate(263.099356, 251.748361)">
        <path d="M 41.265625 -50.75 C 48.847656 -50.75 55.285156 -48.097656 60.578125 -42.796875 C 65.878906 -37.503906 68.53125 -31.0625 68.53125 -23.46875 C 68.53125 -16.039062 65.878906 -9.675781 60.578125 -4.375 C 55.285156 0.914062 48.847656 3.5625 41.265625 3.5625 C 33.828125 3.5625 27.460938 0.914062 22.171875 -4.375 C 16.878906 -9.675781 14.234375 -16.039062 14.234375 -23.46875 C 14.234375 -31.0625 16.878906 -37.503906 22.171875 -42.796875 C 27.460938 -48.097656 33.828125 -50.75 41.265625 -50.75 Z M 41.265625 -50.75 " />
      </g>
    </g>
  </svg>
);

export const LinkedInIcon = () => {
  return <FontAwesomeIcon icon={faLinkedin} />;
};

export const GithubIcon = () => {
  return <FontAwesomeIcon color="#e5e7eb" icon={faGithub} />;
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const NextUILogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 161 32"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="fill-black dark:fill-white"
        d="M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z"
      />
      <path
        className="fill-black dark:fill-white"
        d="M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z"
      />
      <path
        className="fill-white dark:fill-black"
        d="M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z"
      />
    </svg>
  );
};
