interface InputProps{
    placeholder?: string;
    value?: string;
    type?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
    placeholder,
    value,
    type,
    disabled,
    onChange
}:InputProps) => {
    return (
        <input 
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        className="w-full p-4 text-lg bg-white dark:bg-black border-2 border-neutral-200 dark:border-neutral-900 rounded-md outline-none text-slate-700 dark:text-white focus:border-sky-500 focus:border-2 transition disabled:opacity-70 disabled:cursor-not-allowed"
         />
    );
}

export default Input;