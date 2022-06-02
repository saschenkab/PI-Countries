import airplane from "../../common/gifs/airplane.gif";
import styled from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const LoaderGif = styled.img`
  width: 100px;
  height: 100px;
`;

export const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderGif src={airplane} alt="airplane" />
    </LoaderContainer>
  );
};
