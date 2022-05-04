import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



export default function Button({
  btnText = 'test',
  btnLink = 'test',
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}

const ButtonStyle = styled.div`
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  .button {
      font-size: 1.8rem;
      background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--blue-1)'};
      padding: 0.7em 2em;
      border: 2px solid var(--gray-1);
      display: inline-block;
      color: ${(props) => (props.outline ? 'var(--blue-1)' : 'black')};
      min-width: 100px;
    max-width: 200px;
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.5rem;
    }
  }
`;