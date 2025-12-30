import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
  type?: "text" | "email" | "textarea";
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  className?: string;
};

const TextInput = ({
  type = "text",
  placeholder,
  register,
  error,
  className,
}: Props) => {
  const inputClass = `baseStyles w-[100%] bg-gradient-to-r from-primary-100 to-primary-300 ${
    className || ""
  }`;

  return (
    <div className="mb-6">
      {type === "textarea" ? (
        <textarea
          placeholder={placeholder}
          className={inputClass}
          rows={4}
          {...register}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={inputClass}
          {...register}
        />
      )}

      {error && <p className="mt-2 text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default TextInput;
