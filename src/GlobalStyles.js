import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Sono-ExtraLight";
    src: url("../../assets/fonts/Sono-ExtraLight.ttf") format("truetype");
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: "Sono-Light";
    src: url("../../assets/fonts/Sono-Light.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Sono-Regular";
    src: url("../../assets/fonts/Sono-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Sono-Medium";
    src: url("../../assets/fonts/Sono-Medium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Sono-SemiBold";
    src: url("../../assets/fonts/Sono-SemiBold.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Sono-Bold";
    src: url("../../assets/fonts/Sono-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Sono-ExtraBold";
    src: url("../../assets/fonts/Sono-ExtraBold.ttf") format("truetype");
    font-weight: 800;
    font-style: normal;
  }

  html {
    font-size: 10px;
  }
`;
