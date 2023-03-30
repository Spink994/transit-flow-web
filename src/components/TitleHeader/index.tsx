import { ReactNode } from 'react';

type TitleHeaderType = {
  titleLabel: ReactNode;
  headerLabel?: ReactNode;
  extraStyles?: string;
  headerStyles?: string;
};

function TitleHeader({
  titleLabel,
  headerLabel,
  extraStyles,
  headerStyles,
}: TitleHeaderType) {
  return (
    <div className="flex flex-col gap-[15px]">
      <h6
        className={`w-max px-[9px] border-l-[4px] border-primary-1 font-Rubik text-[14px] ${extraStyles}`}
      >
        {titleLabel}
      </h6>
      <h1
        className={`font-Rubik text-[35px] text-primary-2 font-6 leading-[41px] ${headerStyles}`}
      >
        {headerLabel}
      </h1>
    </div>
  );
}

export default TitleHeader;
