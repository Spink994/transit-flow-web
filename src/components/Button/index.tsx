type ButtonType = {
  label: string;
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset';
  variant: 'primary' | 'secondary';
};

function Button({ label, onClick, type, variant }: ButtonType) {
  // Setting up the button's theme based on the variant
  const buttonTheme =
    variant === 'primary'
      ? {
          theme: 'bg-gradient-1 text-primary-2',
          backgroundHoverColor: 'bg-white',
          borderColor: 'border-2 border-primary-1',
        }
      : {
          theme: 'bg-primary-2 text-white',
          backgroundHoverColor: 'bg-[#1F2A69]',
          borderColor: 'border-2 border-primary-2',
        };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group relative overflow-hidden max-w-[194px] w-full h-[60px] text-[16px] font-6 font-Krub ${buttonTheme.theme} ${buttonTheme.borderColor}`}
    >
      <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-full z-20">
        {label}
      </span>

      {/* Transitioning background */}
      <div
        className={`absolute -right-[16%] top-[12%] rotate-[45deg] min-h-[105px] min-w-[68px] ${buttonTheme.backgroundHoverColor} rounded-[50%] transition-all duration-200 group-hover:-right-[9%] group-hover:-translate-y-[20%]  group-hover:rotate-[0deg] group-hover:min-h-[210px] group-hover:min-w-[136px]`}
      />
    </button>
  );
}

export default Button;
