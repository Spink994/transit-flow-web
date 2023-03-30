import Quote from '../../../../../assets/icons/quote-gradient.svg';
import Rating from '../../../../../assets/icons/start.svg';

// Testimonial Card Component
type TestimonialCardType = {
  image: string;
  name: string;
  company: string;
  subText: string;
};

export default function TestimonialCard({
  image,
  name,
  company,
  subText,
}: TestimonialCardType) {
  return (
    <div className="flex flex-col gap-6 w-[600px] h-[425px] bg-secondary-1 hover:bg-primary-2 group transition-all duration-200 p-[72px]">
      {/* Profile, name, company and quote icon */}
      <div className="flex items-center gap-[9px]">
        <img className="w-[91px] h-[91px]" src={image} alt="customer-one" />
        <div className="flex flex-col mr-auto group-hover:text-white">
          <span className="font-Rubik font-5 text-[25px]">{name}</span>
          <span className="font-Krub font-5 text-[16px]">{company}</span>
        </div>
        <img src={Quote} alt="quote" />
      </div>

      {/* subtext */}
      <p className="italic leading-[24px] group-hover:text-white">{subText}</p>

      {/* ratings */}
      <div className="flex gap-1 mt-[8px]">
        <img src={Rating} alt="rating" />
        <img src={Rating} alt="rating" />
        <img src={Rating} alt="rating" />
        <img src={Rating} alt="rating" />
        <img src={Rating} alt="rating" />
      </div>
    </div>
  );
}
