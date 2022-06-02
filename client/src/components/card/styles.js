import styled from "styled-components";

export const CardContainer = styled.div`
  width: 190px;
  height: 230px;
  border-radius: 20px;
  background: #bb9457;
  position: relative;
  box-shadow: 0px 0px 1px 1.5px rgba(67, 40, 24, 0.6);
  transition: 0, 5s ease-out;
  overflow: visible;
  margin: 0 15px 30px 15px;

  &:hover {
    border-color: #432818;
    box-shadow: -3px -3px 5px 1px rgba(67, 40, 24, 0.8);

 &:hover button {
   transform: translate(-50%, 50%);
 opacity: 1;

`;

export const Flag = styled.img`
  width: 100%;
  height: 120px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0px 0px 2px 1.2px rgba(67, 40, 24, 0.6);
`;

export const CardBody = styled.div`
  bottom: 0;
  left: 0;
  padding: 7px;
  display: flex;
  flex-flow: column;
  align-content: center;
  justify-content: space-between;
  margin-top: 3px;

  transition: all 0.2s ease-out;

  &:hover {
    margin-bottom: 15px;
  }
`;

export const CardTitle = styled.h2`
  max-width: fit-content;
  max-height: 3.6em;
  word-wrap: break-word;
  line-height: 1em;
  color: #432818;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin: 5px auto 0px auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
`;

export const CardContinent = styled.p`
  background: #ffe6a7;
  width: 100px;
  display: inline-block;
  margin: 0 auto;
  justify-content: center;
  padding: 5px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  color: #6f1d1b;
  text-align: center;
  box-shadow: 0px 0px 2px 1.2px rgba(67, 40, 24, 0.6);
`;

export const CardButton = styled.button`
  transform: translate(-50%, 125%);
  width: 60%;
  border-radius: 1rem;
  border: none;
  background-color: #432818;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;
  cursor: pointer;
`;
