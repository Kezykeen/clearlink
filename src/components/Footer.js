import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as GooglePlay } from "../assets/googlePlay.svg";
import { ReactComponent as AppStorePlay } from "../assets/appStore.svg";
import { ReactComponent as LinkedIn } from "../assets/linkedIn.svg";
import { ReactComponent as Facebook } from "../assets/Social iconfacebook.svg";
import { ReactComponent as Github } from "../assets/Social icongithub.svg";
import { ReactComponent as Instagram } from "../assets/Social iconinstagram.svg";
import { ReactComponent as Twitter } from "../assets/Social icontwitter.svg";
import { ReactComponent as Youtube } from "../assets/Social iconyoutube.svg";
import { footerLinks } from "../utils/data";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <Container>
      <TopSection>
        <LogoTextWrapper>
          <Logo />
          <LogoText>
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </LogoText>
        </LogoTextWrapper>
        <LinksWrapper>
          {footerLinks.map(({ header, links }, idx) => (
            <FooterLinks header={header} links={links} key={idx} />
          ))}
          <AppSectWrapper>
            <AppSectHeading>Get the app</AppSectHeading>
            <AppStorePlay />
            <GooglePlay />
          </AppSectWrapper>
        </LinksWrapper>
      </TopSection>
      <BottomSection>
        <FooterText>© 2023 ClearLink. All rights reserved.</FooterText>
        <SocialsWrapper>
          <LinkedIn />
          <Twitter />
          <Facebook />
          <Instagram />
          <Github />
          <Youtube />
        </SocialsWrapper>
      </BottomSection>
    </Container>
  );
};

export default Footer;

const Container = styled.section`
  max-width: 1408px;
  padding: 0 90px;
  margin: 90px auto 0;
`;

const TopSection = styled.div`
  width: 100%;
  display: flex;
  padding: 96px 0px 48px 0px;
  gap: 100px;
`;

const LogoTextWrapper = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  & > svg {
    width: 152px;
    height: 29px;
  }
`;

const LogoText = styled.p`
  color: var(--Gray-600, #475467);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
`;

const LinksWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-grow: 1;
`;

const AppSectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  & > svg {
    width: 135px;
    height: 40px;
    cursor: pointer;
  }
`;

const AppSectHeading = styled.p`
  color: var(--Blue-dark-700, #004eeb);

  /* Text md/Semibold */
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
`;

const BottomSection = styled.div`
  display: flex;
  padding: 48px 0px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const FooterText = styled.p`
  color: var(--Gray-500, #667085);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  & > svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
      transform: scale(1.06);
    }
  }
`;
