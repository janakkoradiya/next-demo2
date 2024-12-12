"use client";
import React from "react";
import styled from "styled-components";

// Button component accepting dynamic props including onClick
const Button = ({ text, onClick, backgroundColor = "#6A42C2", hoverColor = "white" }) => {
  return (
    <StyledButton 
      onClick={onClick}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      className="styled-button" // Add a class for styling persistence
    >
      <span>{text || "Button"}</span>
    </StyledButton>
  );
};

// Move styles to a global styled component to persist across refreshes
const StyledButton = styled.button.attrs(() => ({
  className: 'styled-button' // Match the class name
}))`
  && {
    outline: none !important;
    cursor: pointer !important;
    border: none !important;
    padding: 0.9rem 1.7rem !important;
    margin: 0 !important;
    font-family: inherit !important;
    position: relative !important;
    display: inline-block !important;
    font-weight: 500 !important;
    font-size: 16px !important;
    border-radius: 500px !important;
    overflow: hidden !important;
    background: ${props => props.backgroundColor} !important;
    color: ghostwhite !important;
    transition: all 0.4s ease !important;

    span {
      position: relative !important;
      z-index: 1 !important;
      transition: color 0.4s !important;
    }

    &:hover span {
      color: ${props => props.hoverColor} !important;
    }

    &::before {
      content: "" !important;
      position: absolute !important;
      top: 0 !important;
      left: -20px !important;
      width: 120% !important;
      height: 100% !important;
      background: #000 !important;
      z-index: 0 !important;
      transform: translateX(-100%) skew(30deg) !important;
      transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1) !important;
    }

    &:hover::before {
      transform: translateX(0) skew(30deg) !important;
    }
  }
`;

export default Button;
