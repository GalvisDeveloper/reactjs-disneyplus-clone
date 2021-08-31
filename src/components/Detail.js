import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImgTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  min-width: 200px;
  width: 35vw;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
`;

const PlayButton = styled.button`
  align-items: center;
  background: rgb(249, 249, 249);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  font-size: 15px;
  height: 56px;
  letter-spacing: 1.8px;
  margin-right: 22px;
  padding: 0 24px;
  text-transform: uppercase;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddButton = styled.button`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  display: flex;
  height: 44px;
  justify-content: center;
  margin-right: 24px;
  width: 44px;

  span {
    font-size: 30px;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0, 0.8);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  margin-top: 26px;
  min-height: 20px;
`;

const Description = styled.div`
  color: rgb(249, 249, 249);
  font-size: 20px;
  line-height: 1.4;
  margin-top: 16px;
`;

const Detail = () => {
  return (
    <Container>
      <Background>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"
          alt="Background"
        />
      </Background>
      <ImgTitle>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"
          alt="Img Title"
        />
      </ImgTitle>

      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="Play Button" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="images/play-icon-white.png" alt="Trailer Button" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="images/group-icon.png" alt="Group Button" />
        </GroupWatchButton>
      </Controls>

      <SubTitle>2018 • 7m • Family, Fantasy, Kids, Animation</SubTitle>
      <Description>
        A Chinese mom who’s sad when her grown son leaves home gets another
        chance at motherhood when one of her dumplings springs to life. But she
        finds that nothing stays cute and small forever.
      </Description>
    </Container>
  );
};

export default Detail;
