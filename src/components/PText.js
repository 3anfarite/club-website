import React from 'react';
import styled from 'styled-components';

const PStyle = styled.p`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;
  color: ${(props) => (props.outline ? 'white' : 'var(--black)')};

  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function PText({ children, outline= false }) {
  return (
    <PStyle outline={outline} className="para">
      <p>{children}</p>
    </PStyle>
  );
}