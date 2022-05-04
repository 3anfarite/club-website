import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: #38618C;
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--blue-1);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">CSClub</h1>
          <PText>
          Proin accumsan tempus libero non faucibus. Nullam at sem non augue pellentesque porta nec ut nunc. Mauris mi ante, egestas dapibus urna eu, molestie tristique tellus. Maecenas in risus mauris. Sed vitae vestibulum eros. Fusce vel tristique tortor. 
          </PText>
        </div>
        {/* <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div> */}
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+12456789',
                path: 'tel:+88012312',
              },
              {
                title: 'CLUBCSC@gmail.com',
                path: 'mailto:CLUBCSC@gmail.com',
              },
              {
                title: 'CASABLANCA, Morocco',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
              {
               title: 'LinkedIn',
               path: 'http://linkedin.com',
             },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2022 - CSCLUB | Designed with ❤️
            {/* <a target="_blank" rel="noreferrer" href="">
              
            </a>{''} */}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}