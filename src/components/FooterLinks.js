import React from "react";
import styled from "styled-components";

const FooterLinks = ({ header, links }) => {
  return (
    <Container>
      <Header>{header}</Header>
      {links.map((x, idx) => (
        <Link key={idx}>{x}</Link>
      ))}
    </Container>
  );
};

export default FooterLinks;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const Header = styled.p`
  color: var(--Gray-500, #667085);
  /* Text md/Semibold */
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  margin-bottom: 10px;
`;

const Link = styled.p`
  color: var(--Gray-600, #475467);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  opacity: 1;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    opacity: 0.6;
  }
`;
