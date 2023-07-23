import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface ImageUploadProps {
  onChange: (base64: string) => void;
  label: string;
  value?: string;
  disabled?: boolean;
}

const ImageUpload = ({
  onChange,
  label,
  value,
  disabled,
}: ImageUploadProps) => {
  const [base64, setBase64] = useState(value);
  const handleChange = useCallback((base64: string) => {
    onChange(base64);
  }, [onChange])

  const handleDrop = useCallback((files: any) => {
    const file = files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      setBase64(e.target.result);
      handleChange(e.target.result);
    }

    reader.readAsDataURL(file);
  }, [handleChange])

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: handleDrop,
    disabled,
    accept: {
      'image/jpeg': [],
      'image/png': [],
    }
  })
  
  return (
    <div {...getRootProps({
      className: 'w-full p-4 text-slate-700 dark:text-white cursor-pointer text-center border-2 border-doted rounded-md border-neutral-700'
    })}>
      <input {...getInputProps()} />
      {
        base64 ? (
          <div className="center">
            <a href={`data:image/png;base64,${base64}`} download>
              <Image
                height='100'
                width='100'
                src={base64}
                alt="Uploaded image"
               />
            </a>
          </div>
        ) : (
          <p className="text-slate-700 dark:text-white">{label}</p>
        )
      }
    </div>
  );
};

export default ImageUpload;
