import { useState } from 'react';

// Navigation Buttons Component
type NavigationType = {
  image: string[];
  extraStyles?: string;
  direction?: 'right' | 'left';
};
export default function NavigationButton({
  image,
  extraStyles,
  direction,
}: NavigationType) {
  const [hoverState, setHoverState] = useState<boolean>(false);

  return (
    <button
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      className={`w-[44px] h-[44px] flex items-center justify-center ${extraStyles} rounded-[50%] ${
        hoverState ? 'bg-primary-2 rotate-180' : 'bg-gradient-1'
      } ${hoverState && direction === 'right' && 'rotate-[-1deg]'}`}
    >
      <img src={hoverState ? image[1] : image[0]} alt="nav-button" />
    </button>
  );
}
