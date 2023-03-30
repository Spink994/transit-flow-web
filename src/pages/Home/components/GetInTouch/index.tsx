import TitleHeader from '../../../../components/TitleHeader';
import Button from '../../../../components/Button';

import Studio from '../../../../assets/images/studio-green.jpg';
import Norto from '../../../../assets/images/norto.jpg';
import Points from '../../../../assets/images/points-one.jpg';
import Sandbox from '../../../../assets/images/sand-box.jpg';

import Clock from '../../../../assets/icons/clock.svg';
import Email from '../../../../assets/icons/email.svg';
import Call from '../../../../assets/icons/call.svg';

function GetInTouch() {
  return (
    <section className="bg-primary-2 py-[140px]">
      <div className="max-w-[1200px] w-full flex flex-col gap-y-[70px] mx-auto px-8">
        {/* Contact */}
        <div className="flex justify-between">
          {/* Left side of contact */}
          <div>
            <div className="max-w-[354px]">
              <TitleHeader
                titleLabel="Contact"
                headerLabel="Get in touch with us"
                extraStyles="text-white"
                headerStyles="text-white"
              />
              <p className="text-white mt-1">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value.
              </p>

              <div>
                {/* The contact information */}
                <div className="justify-between gap-8 flex flex-col mt-[32px]">
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

                  {/* Operation hours */}
                  <div className="flex items-center gap-[17px] text-secondary-1  text-[14px]">
                    <img src={Clock} alt="clock" />
                    <div className="flex flex-col">
                      <span>Mon - Sat 9.00 - 18.00 </span>
                      <span>Sunday Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Form */}
          <div className="pt-[44px]">
            <form className="flex flex-col h-full  gap-y-7">
              <div className="flex gap-[28px]">
                <input
                  className="bg-transparent text-secondary-1 h-[60px] w-[320px] outline-none max-w-full border border-secondary-3 px-[30px] placeholder:text-white"
                  type="text"
                  placeholder="Your name*"
                />
                <input
                  className="bg-transparent text-secondary-1 h-[60px] w-[320px] outline-none max-w-full border border-secondary-3 px-[30px] placeholder:text-white"
                  type="text"
                  placeholder="Email*"
                />
              </div>
              <div className="flex gap-[28px]">
                <input
                  className="bg-transparent text-secondary-1 h-[60px] w-[320px] outline-none max-w-full border border-secondary-3 px-[30px] placeholder:text-white"
                  type="text"
                  placeholder="Phone Number*"
                />
                <input
                  className="bg-transparent text-secondary-1 h-[60px] w-[320px] outline-none max-w-full border border-secondary-3 px-[30px] placeholder:text-white"
                  type="text"
                  placeholder="City*"
                />
              </div>

              <div>
                <textarea className="w-full min-h-[154px] text-white p-8 outline-none resize-none bg-transparent border border-secondary-3"></textarea>
              </div>

              <Button label="Submit Message" variant="primary" type="button" />
            </form>
          </div>
        </div>

        {/* Footer pictures */}
        <div className="flex">
          <img
            className="max-w-[301px] max-h-[234px]"
            src={Studio}
            alt="studio"
          />
          <img
            className="max-w-[301px] max-h-[234px]"
            src={Norto}
            alt="norto"
          />
          <img
            className="max-w-[301px] max-h-[234px]"
            src={Points}
            alt="points-one"
          />
          <img
            className="max-w-[301px] max-h-[234px]"
            src={Sandbox}
            alt="sand-box"
          />
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
