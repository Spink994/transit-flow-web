import TitleHeader from '../../../../components/TitleHeader';

import PreviousButton from '../../../../assets/icons/arrow-left.svg';
import NextButton from '../../../../assets/icons/arrow-right.svg';

import CustomerOne from '../../../../assets/images/customer-one.png';
import CustomerTwo from '../../../../assets/images/customer-two.png';
import TestimonialCard from './TestimonialCard';
import NavigationButton from './NavigationButton';

function Testimonials() {
  return (
    <section>
      <div className="max-w-[1200px] flex flex-col gap-[40px] mx-auto px-8 -translate-y-[100px]">
        <div className="flex justify-between items-end">
          {/* Title Header */}
          <TitleHeader
            titleLabel="Testimonial"
            headerLabel="What Our Customer Say"
            extraStyles="bg-secondary-1"
          />

          {/* Previous and Next Buttons */}
          <div className="flex items-center gap-[10px]">
            <NavigationButton image={[PreviousButton, NextButton]} />
            <NavigationButton
              image={[PreviousButton, NextButton]}
              extraStyles="rotate-180"
              direction="right"
            />
          </div>
        </div>

        {/* Testimonials Cards */}
        <div className="flex gap-1 mt-40px">
          {/* Left Card */}
          <TestimonialCard
            image={CustomerOne}
            name=" Kathleen Smith"
            company="Fuel Company"
            subText="Leverage agile frameworks to provide a robust synopsis for
            strategy foster collaborative thinking to further the overall
            value proposition. Organically grow the holistic world view of
            disruptive innovation via workplace diversity and empowerment."
          />
          {/* Right Card */}
          <TestimonialCard
            image={CustomerTwo}
            name=" Kathleen Smith"
            company="Fuel Company"
            subText="Leverage agile frameworks to provide a robust synopsis for
            strategy foster collaborative thinking to further the overall
            value proposition. Organically grow the holistic world view of
            disruptive innovation via workplace diversity and empowerment."
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
