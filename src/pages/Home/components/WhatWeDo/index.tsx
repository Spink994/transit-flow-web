import TitleHeader from '../../../../components/TitleHeader';

import SeaTransport from '../../../../assets/icons/sea-transport.svg';
import WareHouse from '../../../../assets/icons/warehouse.svg';
import Flight from '../../../../assets/icons/air-fligth.svg';
import Shipping from '../../../../assets/icons/shipping.svg';

function WhatWeDo() {
  return (
    <section className="w-full py-[121px]">
      <div className="flex max-w-[1200px] gap-[52px] mx-auto px-8">
        {/* Section Header */}
        <div>
          <TitleHeader
            titleLabel="What We Do"
            headerLabel={
              <div className="flex flex-col whitespace-nowrap">
                <span>Safe & Reliable </span>
                <span>Cargo Solutions</span>
              </div>
            }
            extraStyles="bg-secondary-1"
          />
        </div>

        {/* List of services */}
        <div className="flex flex-wrap gap-y-[70px] justify-between">
          {/* Sea transport */}
          <ServicesComponent
            icon={SeaTransport}
            header="Sea Transport Services"
            subtext="Following the quality of our service thus having gained trust of
                our many clients."
          />

          {/* Warehousing */}
          <ServicesComponent
            icon={WareHouse}
            header="Warehousing Services"
            subtext="Following the quality of our service thus having gained trust of our many clients."
          />

          {/* Air flight */}
          <ServicesComponent
            icon={Flight}
            header="Air Fright Services"
            subtext="Following the quality of our service thus having gained trust of our many clients."
          />

          {/* Local shipping */}
          <ServicesComponent
            icon={Shipping}
            header="Local Shipping Services"
            subtext="Following the quality of our service thus having gained trust of our many clients."
          />
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;

// Services component
type ServicesType = {
  header: string;
  subtext: string;
  icon: string;
};

function ServicesComponent({ header, subtext, icon }: ServicesType) {
  return (
    <div className="flex items-start max-w-[391px] gap-[32px] justify-between">
      <img src={icon} alt="sea-transport" className="max-w-[50px]" />
      <div className="max-w-[310px] border-l pl-[25px]">
        <h4 className="font-Rubik font-4 text-[25px] -translate-y-[8px]">
          {header}
        </h4>
        <p>{subtext}</p>
      </div>
    </div>
  );
}
