import React from "react";
import styled from "styled-components";
import { accordionData } from "../utils/data";
import CustomizedAccordions from "./Accordion";

const FaqSection = () => {
  return (
    <Container>
      <LeftSection>
        <SubHeading>Support</SubHeading>
        <Title>FAQs</Title>
        <Subtitle>
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please{" "}
          <span>chat to our friendly team</span>.
        </Subtitle>
      </LeftSection>
      <RightSection>
        {accordionData.map(({ content, title }, idx) => (
          <CustomizedAccordions
            key={idx}
            idx={idx + 1}
            content={content}
            title={title}
          />
        ))}
      </RightSection>
    </Container>
  );
};

export default FaqSection;

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 1408px;
  margin: 195px auto 0;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 547px;
`;

const SubHeading = styled.p`
  color: var(--Blue-700, #175cd3);

  /* Text lg/Semibold */
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 155.556% */
`;

const Title = styled.h2`
  color: var(--Gray-800, #1d2939);

  /* Display lg/Semibold */
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px; /* 125% */
  letter-spacing: -0.96px;
  margin: 8px 0 0;
`;

const Subtitle = styled.p`
  color: var(--Gray-500, #667085);

  /* Display xs/Regular */
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  margin-top: 20px;

  & > span {
    text-decoration-line: underline;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
      opacity: 0.6;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 765px;

  & .MuiAccordionDetails-root {
    padding: 0px 32px 12px;
    border-top: none;
  }

  & .MuiTypography-root {
    color: #475467;
    font-family: Inter, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }
`;
