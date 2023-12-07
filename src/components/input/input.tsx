import { ChangeEvent, FC } from "react";
import styles from "./input.module.scss";

interface Iinput {
  placeholder: string;
  type: "text" | "number" | "email" | "password";
  label: string;
  value: string | number;
  error: boolean;
  errorMessage: string;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<Iinput> = ({
  type,
  label,
  value,
  placeholder,
  error,
  disabled,
  errorMessage,
  onChange,
}) => {
  return (
    <div className={styles.input_wrapper}>
      <div className={`${styles.input_wrapper__box} mt-2` }>
        <label>{label}</label>
        <input
          type={type}
          id={label}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          className="w-full rounded-sm border-2 p-2 mt-1"
          
        />
      </div>
      {error && <p className="error"> { errorMessage } </p>}
    </div>
  );
};

export default Input;
