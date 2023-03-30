import TitleHeader from '../../../../components/TitleHeader';

import DeliveryTime from '../../../../assets/icons/delivery.svg';
import TravelCost from '../../../../assets/icons/optimized-travel-cost.svg';
import Checkbox from '../../../../assets/icons/gradient-box.svg';
import LogisticsImage from '../../../../assets/images/logistics.png';

function Logistics() {
  return (
    <>
      <section className="relative bg-logistics-bg min-h-[504px] bg-cover bg-no-repeat">
        <div className="flex max-w-[1200px] gap-[52px] mx-auto px-8">
          {/* Gradient foreground */}
          <div className="absolute left-0 right-0 bottom-0 top-0 bg-gradient-2" />
        </div>
      </section>

      {/* Overlapping Logistics Details */}
      <div className="flex flex-col max-w-[1134px] mx-auto p-[90px] bg-white -translate-y-[90px]">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col gap-[12px]">
            <TitleHeader
              titleLabel="Why Us"
              headerLabel={
                <div className="flex flex-col whitespace-nowrap">
                  <span>We provide full range global </span>
                  <span>logistics solution</span>
                </div>
              }
              extraStyles="bg-secondary-1"
            />
            {/* Logistics subtext */}
            <div className="max-w-[464px] flex flex-col gap-6">
              <p>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition.
              </p>
              <p>
                Organically grow the holistic world view of disruptive
                innovation via workplace diversity and empowerment.
              </p>
            </div>

            <div className="flex items-center gap-[15px] mt-[12px]">
              <img src={DeliveryTime} alt="delivery-time" />{' '}
              <span className="text-[25px] font-Rubik">Delivery on Time</span>
            </div>
            <div className="flex items-center gap-[15px] mt-[13px]">
              <img src={TravelCost} alt="travel-cost" />{' '}
              <span className="text-[25px] font-Rubik">
                Optimized Travel Cost
              </span>
            </div>
          </div>
          <div>
            <img src={LogisticsImage} alt="logistics-image" />
          </div>
        </div>

        <div className="flex items-center justify-between min-w-full h-[143px] mt-[86px] border-t border-b font-League">
          <div className="max-w-[510px] h-full flex items-center px-[5%] gap-4">
            <span className="font-Rubik text-[50px] font-6">1294</span>
            <img src={Checkbox} alt="checkbox" />
            <span>Delivered Packages</span>
          </div>

          <div className="h-full min-w-[2px] bg-secondary-1" />

          <div className="max-w-[510px] flex items-center px-[5%] gap-4">
            <span className="font-Rubik text-[50px] font-6">3594</span>
            <img src={Checkbox} alt="checkbox" />
            <span>Satisfied Clients</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logistics;
