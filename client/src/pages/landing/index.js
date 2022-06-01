import React from "react";
import { Link } from "react-router-dom";
import airplane from "../../common/images/airplane-icon.png";
import { LandingBackground, Button, Airplane, Span } from "./styles";

const Landing = () => {
  return (
    <LandingBackground>
      <Link to="/home">
        <Button>
          <Airplane src={airplane} alt="icon" />
          <Span>Starting Engines!</Span>
        </Button>
      </Link>
    </LandingBackground>
  );
};

export default Landing;
