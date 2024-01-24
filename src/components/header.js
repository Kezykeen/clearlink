import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as ChevronDown } from "../assets/chevron-down.svg";

const Header = () => {
  return (
    <Container>
      <ContentWrapper>
        <Logo />
        <NavWrapper>
          <NavContent>
            <NavLink>Products</NavLink>
            <ChevronDown />
          </NavContent>
          <NavContent>
            <NavLink>Solutions</NavLink>
            <ChevronDown />
          </NavContent>
          <NavContent>
            <NavLink>Resources</NavLink>
            <ChevronDown />
          </NavContent>
          <NavContent>
            <NavLink>Pricing</NavLink>
          </NavContent>
        </NavWrapper>
        <NavBtnWrapper>
          <TalkSalesBtn>Talk to sales</TalkSalesBtn>
          <SignUpBtn>Sign up for free</SignUpBtn>
        </NavBtnWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 84px;
  max-width: 1472px;
  margin: 40px auto 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  border-radius: 100px;
  border: 1px solid #d0d5dd;
  background: #f2f4f7;

  & > svg {
    width: 152px;
    height: 29px;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const NavBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const NavLink = styled.p`
  color: #667085;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
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

const SignUpBtn = styled.button`
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
