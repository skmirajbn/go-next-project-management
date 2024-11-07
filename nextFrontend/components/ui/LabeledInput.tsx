import { cn } from "@/utils/cn";
import { useFormContext } from "react-hook-form";

/* eslint-disable @typescript-eslint/no-explicit-any */
type LabeledInputProps = {
  label: string;
  placeholder: string;
  name: string;
  rules?: any;
  type?: string;
};

const LabeledInput: React.FC<LabeledInputProps> = ({ label, placeholder, name, type = "text", rules }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name]?.message as string;
  return (
    <div className="mb-4">
      <div className="mb-2 block">
        <label className="text-sm text-gray-900 dark:text-white font-semibold" data-testid="flowbite-label" htmlFor="name">
          {label}
        </label>
      </div>
      <div className="flex form-control">
        <div className="relative w-full">
          <input {...register(name, rules)} className={cn("block w-full border border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg", { "!border-red-500  !": error })} type={type} placeholder={placeholder} name={name} />
          {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default LabeledInput;
