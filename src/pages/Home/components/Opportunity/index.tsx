import TitleHeader from '../../../../components/TitleHeader';

import MovingProduct from '../../../../assets/icons/moving-products.svg';
import OppotunityBackground from '../../../../assets/icons/opportunity-bg.svg';
import SafePackage from '../../../../assets/icons/safe-package.svg';
import ShipEverywhere from '../../../../assets/icons/ship-everywhere.svg';
import GlobalTracking from '../../../../assets/icons/global-tracking.svg';
import Support from '../../../../assets/icons/support.svg';
import TimeDelivery from '../../../../assets/icons/time-delivery.svg';
import Pricing from '../../../../assets/icons/transparent-pricing.svg';
import PlaneImage from '../../../../assets/images/why-choose.jpg';

function Opportunity() {
  return (
    <section className="relative">
      <img src={OppotunityBackground} alt="opportunity" />
      <div className="absolute inset-0  max-w-[1672px] w-full px-8 py-[100px]">
        <div className="flex w-full gap-[53px]">
          {/* Plane image */}
          <div className="relative max-w-[929px] h-[610px]">
            <img src={PlaneImage} alt="plane" />
            <img
              className="absolute bottom-0 left-[50%] -translate-x-[50%]"
              src={MovingProduct}
              alt="product"
            />
          </div>

          {/* Why choose us */}
          <div>
            {/* Header and subtext */}
            <div className="max-w-[438px]">
              <TitleHeader
                titleLabel="Why Choose"
                headerLabel="We create opportunity to reach potential"
                extraStyles="bg-secondary-1"
              />

              <p className="mt-[18px]">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition.
              </p>
            </div>

            {/* List of offers */}
            <div className="grid grid-cols-2 gap-y-[20px] gap-x-[64px] mt-[60px]">
              <div className="flex items-center gap-3">
                <img src={SafePackage} alt="safe-package" />
                <span className="font-Rubik text-[20px]">Safe Package</span>
              </div>

              <div className="flex items-center gap-3">
                <img src={ShipEverywhere} alt="ship-everywhere" />
                <span className="font-Rubik text-[20px]">Ship Everyware</span>
              </div>

              <div className="flex items-center gap-3">
                <img src={GlobalTracking} alt="global-tracking" />
                <span className="font-Rubik text-[20px]">Global Tracking</span>
              </div>

              <div className="flex items-center gap-3">
                <img src={Support} alt="support" />
                <span className="font-Rubik text-[20px]">24/7 Support</span>
              </div>

              <div className="flex items-center gap-3">
                <img src={TimeDelivery} alt="time-delivery" />
                <span className="font-Rubik text-[20px]">In Time Delivery</span>
              </div>

              <div className="flex items-center gap-3">
                <img src={Pricing} alt="transparent-pricing" />
                <span className="font-Rubik text-[20px]">
                  Transparant Pricing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Opportunity;
