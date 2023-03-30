import { Link } from 'react-router-dom';

import Logo from '../../assets/icons/logo.svg';
import Clock from '../../assets/icons/clock.svg';
import Email from '../../assets/icons/email.svg';
import Call from '../../assets/icons/call.svg';
import ArrowDown from '../../assets/icons/arrow-down.svg';
import Instagram from '../../assets/icons/instagram.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Linkedin from '../../assets/icons/linkedin.svg';

import routesConst from '../../routes/routes.const';
import scrollAnimaition from './scrollAnimaition';

type LinkType = {
  route: string;
  label: string;
  extraStyles?: string;
  borderRight?: boolean;
};

function NavBar() {
  const commonStyles =
    'h-full max-w-[1200px] flex justify-between items-center mx-auto px-8';

  const { hide } = scrollAnimaition();

  return (
    <div
      className={`${
        hide ? '-translate-y-[160px]' : 'translate-y-0'
      } transition-all duration-200`}
    >
      <div className="h-[80px] bg-primary-2 font-Krub font-5 lg:h-[160px]">
        {/* Header Information Container */}
        <div className={` gap-8 ${commonStyles}`}>
          {/* The header logo */}
          <img src={Logo} alt="logo" />

          {/* The contact information */}
          <div className="hidden justify-between gap-8 lg:flex">
            {/* Operation hours */}
            <div className="flex items-center gap-[17px] text-secondary-1  text-[14px]">
              <img src={Clock} alt="clock" />
              <div className="flex flex-col">
                <span>Mon - Sat 9.00 - 18.00 </span>
                <span>Sunday Closed</span>
              </div>
            </div>

            {/* Contact Email */}
            <div className="flex items-center gap-[17px] text-secondary-1  text-[14px]">
              <img src={Email} alt="email" />
              <div className="flex flex-col">
                <span>Email </span>
                <span>contact@logistics.com</span>
              </div>
            </div>

            {/* Telephone details */}
            <div className="flex items-center gap-[17px] text-secondary-1 text-[14px]">
              <img src={Call} alt="call" />
              <div className="flex flex-col">
                <span>Call Us </span>
                <span>(00) 112 365 489</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Container */}
      <div className="h-[78px] bg-[#09124240] backdrop-blur-[5px]">
        <div className={`${commonStyles}`}>
          {/* Navigation Panel */}
          <div className="flex items-center font-6 text-secondary-1 font-Krub text-[16px]">
            <Links
              extraStyles="gap-[30px]"
              label="Home"
              route={routesConst.home}
            />

            <Links
              extraStyles="pl-[30px] gap-[30px]"
              label="About"
              route={routesConst.about}
            />

            <Link className="flex items-center" to={'#'}>
              <div className="relative flex gap-[5px] px-[30px]">
                Pages <img src={ArrowDown} alt="arrow-down" />
              </div>
              {/* Vertical line */}
              <div className="h-[19px] w-[1px] bg-secondary-1" />
            </Link>
            <Links
              extraStyles="pl-[30px] gap-[30px]"
              label="Project"
              route={routesConst.project}
            />

            <Links
              extraStyles="pl-[30px] gap-[30px]"
              label="Contact"
              route={routesConst.contact}
              borderRight
            />
          </div>

          {/* Social links and request quote */}
          <div className="flex gap-6 h-full items-center">
            <img src={Instagram} alt="intagram" />
            <img src={Facebook} alt="facebook" />
            <img src={Twitter} alt="twitter" />
            <img src={Linkedin} alt="linkedin" />

            <Link
              className="h-full w-[216px] flex items-center justify-center font-Krub font-6 text-primary-2 bg-secondary-1 ml-[26px]"
              to="#quotes"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

// The link component
function Links({ route, label, extraStyles, borderRight }: LinkType) {
  const activePage = window.location.pathname; // Getting the active page from the current url pathname

  return (
    <Link className={`flex items-center ${extraStyles}`} to={route}>
      <div className="relative w-max">
        {label}

        {/* If the active page is the current page the horizontal indicator appears beneath it */}
        {activePage === route && (
          /* Horizontal line */
          <div className="absolute h-[3px] w-[43px] bottom-[-27px] left-[50%] -translate-x-[50%] bg-secondary-1" />
        )}
      </div>

      {/* Vertical line */}
      {!borderRight && <div className="h-[19px] w-[1px] bg-secondary-1" />}
    </Link>
  );
}
