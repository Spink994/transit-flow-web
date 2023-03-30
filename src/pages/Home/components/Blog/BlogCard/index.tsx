import Calendar from '../../../../../assets/icons/calendar.svg';

type BlogCardType = {
  blogImage: string;
  dateDay: string;
  dateMonth: string;
  newsHeader: string;
  newSubText: string;
  newsBullets: string[];
};

function BlogCard({
  blogImage,
  dateDay,
  dateMonth,
  newsBullets,
  newSubText,
  newsHeader,
}: BlogCardType) {
  return (
    <div className="flex border-t border-b py-[35px]">
      {/* Image and calendar */}
      <div className="flex gap-[37px] items-start border-r pr-[20px] w-max">
        <button className="group relative overflow-hidden">
          <img
            className="max-h-[308px] max-w-[453px]"
            src={blogImage}
            alt="blog-image"
          />

          <div className="absolute w-[373px] h-[223px] top-[150%] left-1/2 -translate-x-[50%] -translate-y-1/2 flex items-center justify-center bg-[#1C1F35E8] text-white font-Krub font-6 text-[16px] group-hover:top-1/2 transition-all duration-300">
            Read More
          </div>
        </button>
        <div className="flex flex-col items-center">
          <img src={Calendar} alt="calendar" />
          <span className="font-Rubik font-6 text-[40px] text-primary-2">
            {dateDay}
          </span>
          <span className="text-secondary-3 -translate-y-2">{dateMonth}</span>
        </div>
      </div>

      {/* New Details*/}
      <div className="flex flex-col gap-4 pl-[29px]">
        {/* News Header */}
        <h1 className="font-Rubik text-[25px] leading-[30px]">{newsHeader}</h1>

        {/* News sub-text */}
        <p>{newSubText}</p>

        {/* Bulletings */}
        <ul className="list-disc pl-[29px] flex flex-col gap-1">
          {newsBullets.map((bullet, index: number) => (
            <li key={index} className="pl-1 font-Krub font-5">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BlogCard;
