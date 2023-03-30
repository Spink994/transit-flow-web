import { Link } from 'react-router-dom';
import routesConst from '../../routes/routes.const';

import FooterImage from '../../assets/images/cargos-overview.jpg';
import Logo from '../../assets/icons/logo.svg';
import Email from '../../assets/icons/email.svg';
import Call from '../../assets/icons/call.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Linkedin from '../../assets/icons/linkedin.svg';

function Footer() {
  return (
    <section className="relative">
      <img src={FooterImage} alt="over-view" />
      <div className="max-w-[1200px] min-h-[500px] w-full mx-auto">
        <div className="absolute left-0 h-[118px] max-w-[1920px] w-full bg-[#FFFFFF14] z-[0]" />
        {/* Footer Headers */}
        <div className="isolate flex items-start justify-between">
          <div className="min-w-[400px] pl-8 flex flex-col bg-primary-2">
            <div className="h-[118px] flex items-center">
              <img className="max-w-[210px]" src={Logo} alt="logo" />
            </div>
            <p className="mt-[30px] max-w-[319px] text-[#E8E8E8]">
              Leverage agile frameworks to provide a robust synopsis for
              strategy collaborative thinking to further the overall value
              proposition.
            </p>

            {/* Contact Email */}
            <div className="flex items-center gap-[17px] text-secondary-1 mt-[32px] mb-[30px]  text-[14px]">
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

          {/* Pages */}
          <div className=" min-w-[170px]  flex flex-col">
            <span className="font-Rubik h-[118px] items-center flex mb-[30px] font-5 text-[25px] text-white">
              Pages
            </span>

            <ul className="list-none flex gap-6 flex-col">
              <li className="font-Krub font-5 text-[16px] text-white">
                <Link to={routesConst.about}>About Us</Link>
              </li>
              <li className="font-Krub font-5 text-[16px] text-white">
                <Link to="/our-team">Our Team</Link>
              </li>
              <li className="font-Krub font-5 text-[16px] text-white">
                <Link to={routesConst.project}>Project</Link>
              </li>
              <li className="font-Krub font-5 text-[16px] text-white">
                <Link to="/pricings">Pricing</Link>
              </li>
              <li className="font-Krub font-5 text-[16px] text-white">
                <Link to={routesConst.contact}>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Utility */}
          <div className="flex flex-col">
            <span className="font-Rubik h-[118px] items-center flex mb-[30px] font-5 text-[25px] text-white">
              Utility
            </span>

            <ul className="list-none flex gap-6 flex-col">
              <li className="font-Krub font-5 text-[16px] text-white">
                <Link to="/style-guide">Style Guide</Link>
              </li>
              <li className="font-Krub font-5 text-[16px] text-white">
                <Link to="/changelog">Changelog</Link>
              </li>
              <li className="font-Krub font-5 text-[16px] text-white">
                <Link to="/licenses">Licenses</Link>
              </li>
              <li className="font-Krub font-5 text-[16px] text-white">
                <Link to="/protected">Protected</Link>
              </li>
              <li className="font-Krub font-5 text-[16px] text-white">
                <Link to={routesConst.notFound}>Not Found</Link>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="min-w-[200px] pl-[54px] pr-8 flex flex-col">
            <span className="font-Rubik h-[118px] items-center flex mb-[30px] font-5 text-[25px] text-white">
              Subscribe
            </span>

            <form>
              <div className="flex gap-[28px]">
                <input
                  className="bg-transparent text-secondary-1 h-[60px] w-[320px] outline-none max-w-full border border-secondary-3 px-[30px] placeholder:text-white"
                  type="text"
                  placeholder="Email here*"
                />
              </div>

              <div className="flex items-center gap-[28px] mt-[20px]">
                <button
                  type="button"
                  className="w-[148px] h-[60px]  flex items-center justify-center bg-gradient-1 font-Krub text-[16px] font-6 text-[#23212A]"
                >
                  Send Now
                </button>

                <img src={Facebook} alt="facebook" />
                <img src={Twitter} alt="twitter" />
                <img src={Linkedin} alt="linkedin" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-[#4E5683]">
        <div className="max-w-[1200px] mx-auto px-8 h-[73px] flex items-center justify-between text-white">
          <span>
            Copyright © TransitFlow | Designed by VictorFlow - Powered by
            Webflow.
          </span>
          <div className="text-[#8388A7] font-Krub font-4 flex gap-8 items-center">
            <span>Style Guide</span>
            <span>Licenses</span>
            <span>Changelog</span>
            <span>Password</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
