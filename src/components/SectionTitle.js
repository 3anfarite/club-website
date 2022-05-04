import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  
  
  p {
    font-family: 'Poppins Regular';
    font-size: 1.8rem;
    color: var(--deep-dark);
  }
  h2 {
    font-family: 'Montserrat Bold';
    font-size: 4rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
    color: ${(props) => (props.outline ? 'var(--black)' : 'white')};
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
  outline = false,
}) {
  return (
    <SectionTitleStyle outline={outline}  className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}