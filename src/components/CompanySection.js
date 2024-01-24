import React from "react";
import styled from "styled-components";
import { ReactComponent as Shopify } from "../assets/Shopify.svg";
import { ReactComponent as Coinbase } from "../assets/Coinbase svg.svg";
import { ReactComponent as Dropbox } from "../assets/Dropbox svg.svg";
import { ReactComponent as Intercom } from "../assets/Intercom svg.svg";
import { ReactComponent as Marvel } from "../assets/Marvel svg.svg";
import { ReactComponent as Automatic } from "../assets/Automattic svg.svg";

const CompanySection = () => {
  return (
    <Container>
      <Text>
        Join 1,500+ companies already video conferencing the ClearLink way
      </Text>
      <CompaniesWrapper>
        <Shopify />
        <Coinbase />
        <Dropbox />
        <Intercom />
        <Marvel />
        <Automatic />
      </CompaniesWrapper>
    </Container>
  );
};

export default CompanySection;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 90%;
  max-width: 1371px;
  margin: auto;
`;

const Text = styled.div`
  color: var(--Gray-600, #475467);
  text-align: center;

  /* Text xl/Medium */
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 150% */
`;

const CompaniesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
