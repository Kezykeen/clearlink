import React from "react";
import styled from "styled-components";
import sarahAvater from "../assets/Avatarsarah.png";
import upgradeImg from "../assets/upgrade.png";
import { ReactComponent as Shopify } from "../assets/Shopify.svg";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";
import { ReactComponent as StarIcon } from "../assets/Star icon.svg";

const TestimonialSection = () => {
  return (
    <Container>
      <LeftSection>
        <Shopify />
        <StarWrapper>{new Array(5).fill(<StarIcon />)}</StarWrapper>
        <MainText>
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, and top-notch security make it essential for our team.
        </MainText>
        <BottomWrapper>
          <ProfileWrapper>
            <Avatar src={sarahAvater} />
            <ProfileTextWrapper>
              <ProfileName>Sarah Thompson</ProfileName>
              <ProfileRole>Project Manager, Shopify</ProfileRole>
            </ProfileTextWrapper>
          </ProfileWrapper>
          <ArrowsWrapper>
            <Arrow>
              <ArrowLeft />
            </Arrow>
            <Arrow>
              <ArrowRight />
            </Arrow>
          </ArrowsWrapper>
        </BottomWrapper>
      </LeftSection>
      <RightSectionImg src={upgradeImg} />
    </Container>
  );
};

export default TestimonialSection;

const Container = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 0px 32px;
  width: 90%;
  max-width: 1408px;
  margin: 192px auto 0;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  max-width: 627px;
  flex: 1 0 0;

  & > svg {
    width: 112.787px;
    height: 32px;
  }
`;

const StarWrapper = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    width: 20px;
    height: 20px;
  }
`;

const MainText = styled.p`
  color: var(--Gray-900, #101828);
  font-size: 44px;
  font-style: normal;
  font-weight: 500;
  line-height: 60px; /* 136.364% */
  letter-spacing: -0.88px;
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const Avatar = styled.img``;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
`;

const ProfileTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileName = styled.div`
  color: var(--Gray-900, #101828);

  /* Text xl/Semibold */
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 150% */
`;

const ProfileRole = styled.div`
  color: var(--Gray-600, #475467);

  /* Text lg/Regular */
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
`;

const ArrowsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
`;

const Arrow = styled.div`
  display: flex;
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 28px;
  border: 1px solid var(--Blue-100, #d1e9ff);
  background: rgba(255, 255, 255, 0.9);

  /* Background blur/sm */
  backdrop-filter: blur(4px);
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    opacity: 0.6;
  }

  & > svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;

const RightSectionImg = styled.img`
  width: 50%;
  max-width: 640px;
  height: 80%;
`;
