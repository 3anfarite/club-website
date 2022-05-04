import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';

import logo from '../assets/images/csc.png'


const PrimaryButton = styled.button`
  font-size: 1.5rem;
  background-color: ${(props) =>
  props.outline ? 'transperant' : 'var(--blue-1)'};
  padding: 0.7em 1.8em;
  margin-top: 1rem;
  margin-right: 2rem;
  border: 2px solid var(--gray-1);
  color: ${(props) => (props.outline ? 'var(--blue-1)' : 'black')};
  min-width: 100px;
  max-width: 200px;
  float: right;
  @media only screen and (max-width: 768px){
    display: none;
  }
`

const Logo = styled.img`
    width: 55px;
    height: 55px;
    margin-left: 40px;
    position:fixed ;

    @media only screen and (max-width: 768px){
    position: relative;
  }

`

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background-color: transparent;
  
  
  &.colorChange{
    background-color: var(--deep-dark);
  } 
  
  
  ul {
    max-width: 1200px;
    display: block;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--blue-1);
      }
    
    }
    a {
      display: inline-block;
      font-family: 'Poppins Regular';
      padding: 1rem 3rem;
      font-size: 2rem;
      color: var(--white);
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    
  
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        color:white;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);

  const [colorChange, setColorchange] = useState(false)
  
  const changeNavbarColor = () =>{
      if(window.scrollY >= 200){
        setColorchange(true);
      }
      else{
        setColorchange(false);
      }
   };
     
  window.addEventListener('scroll', changeNavbarColor);

  let iconStyles = { color: "white", fontSize: "1.5em" };


  return (
    <NavStyles className={colorChange ? 'colorChange' : '#38618C'} >
      
      <Logo src={logo} />
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu style={iconStyles}/>
      </div>
      <PrimaryButton>Sign in</PrimaryButton>
      
      
      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        
        
        <li>
          <NavLink
            to="/about"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            SPONSORS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            EVENEMENTS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            CONTACTE
          </NavLink>
        </li>
      </ul>
      
    </NavStyles>
  );
}