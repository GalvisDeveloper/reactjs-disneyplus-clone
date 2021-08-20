import React from "react";

import styled from "styled-components";

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px; // 0 top-bottom 36px left-right side
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;

  :hover {
    background-color: #ffffff;
  }
`;

const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="Home Icon" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="Search Icon" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="Watchlist Icon" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="Original Icon" />
          <span>ORIGINAL</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="Movie Icon" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="Series Icon" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="https://lh3.googleusercontent.com/fife/AAWUweU2KtrtpCEf2Q70dREf7wXBLYkKiLy8TVNxes8tUsf2Se5faclTSDc1vjYNZfhv3rWq3UK09rZrmTlfxVvrYBlGfp4Edt7zNuo71zuGH7gsxRApE-wJvI-Pjp5omovkkt_16zlP-8zMZha205WwGF1X1aqVO7uIhS8idAAngJdPayknvurFX59KqNfeM184odT-5ZaNaSUVn3XTAzUicdhIRua952Gtalqx8Sbw1S4L3BvEk7FkyWwDGHI6bUlt6OAhjmFGdGucyN1c4MFSbGjrWQdUYJ4f1jss1FQKwDy78PVX1JSgnmyFlXouSPy98CYgDomebpPxYw8Z4mmen5apqZxMIszymzFlxsZSwLo0C8TsEMew8n4KSHUBbOShsFCx1e5_dbWTGmMWWZhYu-oihj64bVpqaqzh9eHJIT0l9T7qDYzMaaFwDFqbKJ8izDtMoqzUzbUNfjyfoA1HD_icCIHqMUnyWwhyrq3zr7Hp_PIUE2Vpd7XbDyln3MQ9YvOkMiLbff6gjWDvCQDzeJ9KtatFk1dkNjY56a8nt5kCs1XDRjyujlJLQslO8hpByX92Htk88zvr2J918QR-8o4Mr9v1CrptCqu7fQT1NT7opvzvvIMa_yFQpn9ffpwQIJVyJbGEdcVVCx-6-QShpoIJBQk5QfP6P5Me6_K9U4tedC5xHtDTMlMDEOuCpI9Jwlvlfz5GWsgsULcwAAC_27N4BFqs_C8Wa5sws2Ie6aKfPuo=s32-c" />
    </Nav>
  );
};

export default Header;
