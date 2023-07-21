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
        className="w-full p-4 text-lg bg-black border-2 border-neutral-800 rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition disabled:opacity-70 disabled:cursor-not-allowed"
         />
    );
}

export default Input;