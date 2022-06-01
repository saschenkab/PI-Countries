import styled from "styled-components";
import landing from "../../common/images/landing-img3.jpg";

export const LandingBackground = styled.div`
  background-image: url(${landing});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const Button = styled.div`
  border: none;
  color: black;
  padding: 8px 15px;
  border-radius: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  width: 15%;
  font-size: 16px;
  font-weight: 700;
  margin: 350px auto;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(1px);
  box-shadow: 2px 2px 5px #1e000e, -2px -2px 5px #1e000e;
  font-family: "QuickSand", sans-serif;
  cursor: pointer;
`;

export const Span = styled.span`
  display: block;
  margin-left: 0.3em;
  transition: all 0.3s ease-in-out;
`;

export const Airplane = styled.img`
  width: 50px;
  height: 50px;
  padding: 0px 10px;
  display: block;
  transform-origin: center center;
  transition: all 0.3s ease-in-out;
`;
