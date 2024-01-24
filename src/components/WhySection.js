import React from "react";
import styled from "styled-components";
import { advantagesData } from "../utils/data";
import gridImage from "../assets/pictureGrid.png";
import { ReactComponent as ArrowIcon } from "../assets/Hand-drawn arrow.svg";

const WhySection = () => {
  return (
    <Container>
      <TopSection>
        <SubHeading>The ClearLink Advantage</SubHeading>
        <Title>Why choose ClearLink?</Title>
        <Subtitle>
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </Subtitle>
      </TopSection>
      <BottomSection>
        <LeftBottom>
          {advantagesData.map(({ icon: Icon, subTitle, title }, idx) => (
            <AdvantageWrapper key={idx}>
              <AdvantageIcon>
                <Icon />
              </AdvantageIcon>
              <AdvantageTextWrapper>
                <AdvantageTitle>{title}</AdvantageTitle>
                <AdvantageDescription>{subTitle}</AdvantageDescription>
              </AdvantageTextWrapper>
            </AdvantageWrapper>
          ))}
        </LeftBottom>
        <RightBottomImg src={gridImage} />
        <ArrowIcon />
      </BottomSection>
    </Container>
  );
};

export default WhySection;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 90%;
  max-width: 1408px;
  margin: 195px auto 0;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SubHeading = styled.p`
  color: var(--Blue-700, #175cd3);

  /* Text lg/Semibold */
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 155.556% */
`;

const Title = styled.p`
  color: var(--Gray-800, #1d2939);

  /* Display lg/Semibold */
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px; /* 125% */
  letter-spacing: -0.96px;
`;

const Subtitle = styled.p`
  color: var(--Gray-500, #667085);

  /* Display xs/Regular */
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  margin-top: 14px;
  width: 60%;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  & > svg {
    position: absolute;
    right: 200px;
    top: -225px;
  }
`;

const LeftBottom = styled.div`
  display: flex;
  gap: 60px 40px;
  flex-wrap: wrap;
`;

const AdvantageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 300px;
  height: 200px;
`;

const AdvantageIcon = styled.div`
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  border: 1px solid var(--Gray-200, #eaecf0);
  background: var(--Gray-50, #f9fafb);

  & > svg {
    width: 24px;
    height: 24px;
  }
`;

const AdvantageTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AdvantageTitle = styled.p`
  color: var(--Gray-900, #101828);

  /* Display xs/Semibold */
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 133.333% */
`;

const AdvantageDescription = styled.p`
  color: var(--Gray-600, #475467);

  /* Text lg/Regular */
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
`;

const RightBottomImg = styled.img`
  width: 544px;
  height: 527px;
  flex-shrink: 0;
`;
