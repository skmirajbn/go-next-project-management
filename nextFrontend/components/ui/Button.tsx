import { Tap } from "../common/Tap";

type ButtonPropType = {
  children: React.ReactNode;
  type?: "button" | "submit";
};

const Button: React.FC<ButtonPropType> = ({ children, type = "submit" }) => {
  return (
    <Tap>
      <button type={type} className="group relative flex items-stretch justify-center p-0.5 text-center font-medium bg-primary text-white w-full rounded-md">
        <span className="flex items-center gap-2 transition-all duration-150 justify-center rounded-md px-4 py-2 text-sm">{children}</span>
      </button>
    </Tap>
  );
};

export default Button;
