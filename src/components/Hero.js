import React from 'react';
import styled from 'styled-components';
import bg from '../assets/images/bgsvg.svg';

import Button from './Button';

import PText from './PText';

import { SocialIcon } from 'react-social-icons';
import SectionTitle from './SectionTitle';



export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <div className="hero__heading">
          <SectionTitle
            subheading="Computer Science Club"
            heading="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
          />
            <PText outline={true} >
            Neque porro quisquam est qui dolorem ipsum quia dolor sit ametNeque porro quisquam est qui dolorem ipsum quia dolor sit amet
         </PText>
         <Button btnText="A PROPOS" btnLink="/" />
          </div>
          

          <div className="hero__social">
            <div className="hero__social__text">
              <ul>
                <li>
                  <a><SocialIcon style={{ height: 40, width: 40 }} bgColor="white" url="https://facebook.com/" /></a>
                </li>
                <li>
                  <a><SocialIcon style={{ height: 40, width: 40 }} bgColor="white" url="https://twitter.com/" /></a>
                </li>
                <li>
                  <a><SocialIcon style={{ height: 40, width: 40 }} bgColor="white" url="https://instagram.com/" /></a>
                </li>
                <li>
                  <a><SocialIcon style={{ height: 40, width: 40 }} bgColor="white" url="https://linkedin.com/" /></a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
      
    </HeroStyles>
  );
}

const HeroStyles = styled.div`
  .hero { 
         
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 130vh;
      
      background-image: url(${bg});
      background-position: center;
      background-size: cover;
      background-repeat:no-repeat;
      
   }
  .hero__heading {
     margin-left: 4rem;
     margin-right: 4rem;
     padding-bottom: 15%;
     p{
        margin-top: 20px;
        text-align: center;
     }
     div{
      display: flex;
         flex-direction: column;
         align-items: center;
         padding: 0 20px;
         justify-content: center;
     }
  }
  
  .hero__info {
    margin-top: -18rem;
  }

  .hero__social {
   display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 180px;
    width: 50px;
  }

  

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a{
          display: inline-block;
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 40px;
      bottom: 35%;
      width: 20px;
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    
  }
`;