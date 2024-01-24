import styled from "styled-components";
import Header from "./components/header";
import { ReactComponent as BgPattern } from "./assets/Background pattern.svg";
import HeroSection from "./components/HeroSection";
import CompanySection from "./components/CompanySection";
import WhySection from "./components/WhySection";
import TestimonialSection from "./components/TestimonialSection";
import FaqSection from "./components/FaqSection";
import PerksSection from "./components/PerksSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Container>
      <BgPatternImg />
      <Header />
      <HeroSection />
      <CompanySection />
      <WhySection />
      <TestimonialSection />
      <FaqSection />
      <PerksSection />
      <Footer />
    </Container>
  );
};

export default App;

const Container = styled.div`
  isolation: isolate;
`;

const BgPatternImg = styled(BgPattern)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90vw;
  z-index: -1;
`;
