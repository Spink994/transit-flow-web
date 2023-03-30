type ExpertCardType = {
  expertImage: string;
  socials: string[];
  name: string;
  profession: string;
};

function ExpertCard({
  expertImage,
  socials,
  name,
  profession,
}: ExpertCardType) {
  return (
    <div className="relative max-w-[364px] w-full">
      {/* Image */}
      <img className="w-full h-[426px] object-cover" src={expertImage} alt="expert" />

      {/* Socials */}
      <div className="absolute right-0 bottom-[15%] flex items-center gap-6 bg-gradient-1 px-[16px] py-[20px]">
        {socials.map((social) => (
          <img key={social} src={social} alt={social} />
        ))}
      </div>

      {/* Name and profession */}
      <div className="h-[112px] w-full flex flex-col justify-end pb-[20px] bg-primary-2 text-white px-[34px]">
        <span className="font-Rubik font-5 text-[20px]">{name}</span>
        <span className="font-Krub text-[16px] font-5">{profession}</span>
      </div>
    </div>
  );
}

export default ExpertCard;
