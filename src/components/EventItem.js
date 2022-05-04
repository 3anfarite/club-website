import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EventImg from '../assets/images/greenctg.jpg';

const EventItemStyles = styled.div`
  .EventItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--blue-1);
    img {
      height: 100%;
    }
  }
  .EventItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .EventItem__title {
    font-size: 2.2rem;
    color: var(--blue-2)
  }
  .EventItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .EventItem__img {
      height: 350px;
    }
  }
`;

export default function EventItem({
  img = EventImg,
  title = 'Event Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <EventItemStyles>
      <Link to="/Events" className="EventItem__img">
        <img src={img} alt="Event img" />
      </Link>
      <div className="EventItem__info">
        <Link to="#">
          <h3 className="EventItem__title">{title}</h3>
        </Link>
        <p className="EventItem__desc">{desc}</p>
      </div>
    </EventItemStyles>
  );
}