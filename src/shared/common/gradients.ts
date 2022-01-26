import { css } from 'styled-components';

// const backgroundRadial = css`
//   background: rgb(52, 52, 52);
//   background: -moz-radial-gradient(
//     circle,
//     rgba(52, 52, 52, 1) 0%,
//     rgba(26, 26, 26, 1) 100%
//   );
//   background: -webkit-radial-gradient(
//     circle,
//     rgba(52, 52, 52, 1) 0%,
//     rgba(26, 26, 26, 1) 100%
//   );
//   background: radial-gradient(
//     circle,
//     rgba(52, 52, 52, 1) 0%,
//     rgba(26, 26, 26, 1) 100%
//   );
//   filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#343434",endColorstr="#1a1a1a",GradientType=1);
// `;

const backgroundRadial = css`
  background: rgb(35, 51, 74);
  background: -moz-radial-gradient(
    circle,
    rgba(35, 51, 74, 1) 0%,
    rgba(18, 21, 27, 1) 100%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(35, 51, 74, 1) 0%,
    rgba(18, 21, 27, 1) 100%
  );
  background: radial-gradient(
    circle,
    rgba(35, 51, 74, 1) 0%,
    rgba(18, 21, 27, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#23334a",endColorstr="#12151b",GradientType=1);
`;

const cherryBackgroundLinear = css`
  background: rgb(221, 83, 83);
  background: -moz-linear-gradient(
    180deg,
    rgba(221, 83, 83, 1) 0%,
    rgba(237, 58, 58, 1) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(221, 83, 83, 1) 0%,
    rgba(237, 58, 58, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(221, 83, 83, 1) 0%,
    rgba(237, 58, 58, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#dd5353",endColorstr="#ed3a3a",GradientType=1);
`;

export { backgroundRadial, cherryBackgroundLinear };
