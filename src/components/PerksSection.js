import React from "react";
import styled from "styled-components";
import { ReactComponent as CheckCircle } from "../assets/check-circle.svg";
import mockUp from "../assets/screen_mockup.png";

const PerksSection = () => {
  return (
    <Container>
      <LeftSection>
        <Heading>Ready to clear the path to perfect communication?</Heading>
        <PerksWrapper>
          <PerkItem>
            <CheckCircle />
            <PerkText>30 days free trial</PerkText>
          </PerkItem>
          <PerkItem>
            <CheckCircle />
            <PerkText>Cancel at any time</PerkText>
          </PerkItem>
          <PerkItem>
            <CheckCircle />
            <PerkText>Access to all features</PerkText>
          </PerkItem>
          <PerkItem>
            <CheckCircle />
            <PerkText>Peronalized onboarding</PerkText>
          </PerkItem>
        </PerksWrapper>
        <BtnWrapper>
          <TalkSalesBtn>Talk to sales</TalkSalesBtn>
          <StartTrial>Start your free trial</StartTrial>
        </BtnWrapper>
      </LeftSection>
      <RightSectionImg src={mockUp} />
    </Container>
  );
};

export default PerksSection;

const Container = styled.section`
  display: flex;
  gap: 125px;
  padding: 0 90px;
  max-width: 1408px;
  margin: 192px auto 0;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  max-width: 579px;
  flex-shrink: 0;
`;

const Heading = styled.h2`
  margin: 0;
  color: var(--Gray-900, #101828);
  /* Display lg/Semibold */
  font-size: 44px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px; /* 125% */
  letter-spacing: -0.96px;
`;

const PerksWrapper = styled.div`
  display: flex;
  padding-left: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const PerkItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;

  & > svg {
    width: 28px;
    height: 28px;
  }
`;

const PerkText = styled.p`
  color: var(--Gray-600, #475467);

  /* Display xs/Regular */
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 15px;
`;

const TalkSalesBtn = styled.button`
  display: flex;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  height: 52px;
  border-radius: 100px;
  border: 1px solid var(--Gray-400, #98a2b3);
  background: #fff;

  /* Shadow/xs */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  color: var(--Gray-900, #101828);

  /* Text md/Semibold */

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const StartTrial = styled.button`
  display: flex;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  height: 52px;
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
    opacity: 0.8;
  }
`;

const RightSectionImg = styled.img`
  height: 520px;
  width: 50%;
  right: 0;
  position: absolute;
`;
