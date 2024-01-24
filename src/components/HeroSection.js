import React from "react";
import styled from "styled-components";
import { ReactComponent as AiIcon } from "../assets/Frame 10.svg";
import avatarGroup from "../assets/AvatarGroup.png";
import heroIcons from "../assets/heroIcons.png";
import heroImages from "../assets/heroImages.png";
import { ReactComponent as StarIcon } from "../assets/Star icon.svg";

const HeroSection = () => {
  return (
    <Container>
      <LeftSection>
        <Title>
          Uniting the world,
          <br /> one video call at a time
        </Title>
        <Subtitle>
          Experience the future of communication with ClearLink – where
          crystal-clear video conferencing meets unparalleled simplicity.
        </Subtitle>
        <BtnWrapper>
          <FreeTrailBtn>Start your free trail</FreeTrailBtn>
          <AiAssistanceBtn>
            <AiIcon /> Discover AI assistant
          </AiAssistanceBtn>
        </BtnWrapper>
        <AvatarSection>
          <AvatarGroup src={avatarGroup} />
          <AvatarContent>
            <Rating>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              5.0
            </Rating>
            <RatingText>from 3,000+ reviews</RatingText>
          </AvatarContent>
        </AvatarSection>
      </LeftSection>
      <RightSection>
        <HeroImages src={heroImages} />
        <HeroIcons src={heroIcons} />
      </RightSection>
    </Container>
  );
};

export default HeroSection;

const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 44px;
  max-width: 1408px;
  margin: 160px auto 192px;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 720px;
`;

const Title = styled.p`
  color: var(--Gray-800, #1d2939);

  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: 72px; /* 112.5% */
  letter-spacing: -1.28px;
`;

const Subtitle = styled.p`
  color: var(--Gray-500, #667085);

  /* Display xs/Regular */

  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  margin-top: 24px;
  width: 85%;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 48px 0;
`;

const FreeTrailBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 221px;
  height: 60px;
  border-radius: 100px;
  border: none;
  background: var(--Blue-700, #175cd3);

  /* Shadow/xs */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  color: var(--Base-White, #fff);

  /* Text md/Semibold */

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const AiAssistanceBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--Blue-700, #175cd3);

  /* Text lg/Semibold */

  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 155.556% */
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    opacity: 0.8;
  }

  & > svg {
    width: 20px;
    height: 20px;
  }
`;

const AvatarSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const AvatarGroup = styled.img`
  width: 152px;
  height: 40px;
`;

const AvatarContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--Gray-700, #344054);

  /* Text md/Semibold */
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */

  & > svg {
    width: 20px;
    height: 20px;
  }
`;

const RatingText = styled.div`
  color: var(--Gray-600, #475467);

  /* Text md/Medium */

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
`;

const RightSection = styled.div`
  display: flex;
  padding: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border-radius: 16px;
  border: 1px solid var(--Blue-200, #b2ddff);
  background: var(--Blue-50, #eff8ff);

  /* Shadow/3xl */
  box-shadow: 0px 32px 64px -12px rgba(16, 24, 40, 0.14);
  width: 584px;
  height: 488px;
`;

const HeroImages = styled.img`
  width: 100%;
`;

const HeroIcons = styled.img``;
