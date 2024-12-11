"use client";
import React from "react";
import styled from "styled-components";

// Button component accepting dynamic props including onClick
const Button = ({ text, onClick }) => {
  return (
    <StyledWrapper backgroundcolor="#6A42C2" hovercolor="white">
      <button onClick={onClick}>
        <span>{text || "Button"}</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    outline: none;
    cursor: pointer;
    border: none;
    padding: 0.9rem 1.7rem;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    position: relative;
    display: inline-block;
    font-weight: 500;
    font-size: 16px;
    border-radius: 500px;
    overflow: hidden;
    background: ${(props) => props.backgroundcolor || "#6A42C2"}; /* Fallback */
    color: ghostwhite;
  }

  button span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
  }

  button:hover span {
    color: ${(props) => props.hovercolor || "white"}; /* Fallback */
  }

  button::before {
    content: "";
    position: absolute;
    top: 0;
    left: -2%;
    width: 120%;
    height: 100%;
    background: #000;
    z-index: 0;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  button:hover::before {
    transform: translate3d(100%, 0, 0);
  }
`;

export default Button;
