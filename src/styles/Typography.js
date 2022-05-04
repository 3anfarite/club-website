import { createGlobalStyle } from 'styled-components';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';
import PoppinsLight from '../assets/fonts/Poppins-Light.ttf';
import PoppinsMedium from '../assets/fonts/Poppins-Medium.ttf';
import PoppinsRegular from '../assets/fonts/Poppins-Regular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Poppins Regular';
    src: url(${PoppinsRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins medium';
    src: url(${PoppinsMedium});
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins Light';
    src: url(${PoppinsLight});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat SemiBold';
    src: url(${MontserratSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Bold';
    src: url(${MontserratBold});
    font-style: normal;
  }
  html{
    font-family: 'Poppins Regular';
    color: var(--black);
  }
  *{
    font-family: 'Poppins Regular';
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Montserrat SemiBold'
  }
`;

export default Typography;
