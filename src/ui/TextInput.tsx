import { CloseRounded, Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

interface TextInputProps {
  label?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  error?: string;
  handelChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  textArea?: boolean;
  rows?: number;
  columns?: number;
  chipableInput?: boolean;
  chipableArray?: string[];
  removeChip?: (name: string, index: number) => void;
  height?: string;
  small?: boolean;
  popup?: boolean;
  password?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  name,
  value,
  error,
  handelChange,
  textArea,
  rows,
  columns,
  chipableInput,
  chipableArray = [],
  removeChip,
  height,
  small,
  popup,
  password,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`flex flex-col gap-1.5 ${small ? 'text-xs' : 'text-sm'}`}>
      {label && (
        <label
          className={`px-1 ${error ? 'text-red-500' : popup ? 'text-gray-400' : 'text-primary'}`}
        >
          {label}
        </label>
      )}
      <div
        className={`rounded-md border ${
          error
            ? 'border-red-500'
            : popup
              ? 'border-gray-400 text-gray-400'
              : 'border-gray-300 text-gray-700'
        } flex items-center gap-3 p-4 ${
          small ? 'py-2 px-3' : 'py-4 px-5'
        } bg-transparent transition-all focus-within:border-secondary`}
        style={chipableInput && height ? { minHeight: height } : undefined}
      >
        {chipableInput ? (
          <div className="flex flex-wrap gap-1.5">
            {chipableArray.map((chip, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 bg-primary/10 text-primary rounded-md px-2 py-1 text-xs cursor-pointer"
              >
                <span>{chip}</span>
                <CloseRounded
                  sx={{ fontSize: '14px' }}
                  onClick={() => removeChip && name && removeChip(name, index)}
                />
              </div>
            ))}
            <input
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={(e) => handelChange(e)}
              className="flex-1 bg-transparent outline-none border-none"
            />
          </div>
        ) : (
          <>
            {textArea ? (
              <textarea
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={(e) => handelChange(e)}
                className="flex-1 bg-transparent outline-none border-none"
                rows={rows}
                cols={columns}
              />
            ) : (
              <input
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={(e) => handelChange(e)}
                className="flex-1 bg-transparent outline-none border-none"
                type={password && !showPassword ? 'password' : 'text'}
              />
            )}
            {password &&
              (showPassword ? (
                <Visibility
                  onClick={() => setShowPassword(false)}
                  className="cursor-pointer"
                />
              ) : (
                <VisibilityOff
                  onClick={() => setShowPassword(true)}
                  className="cursor-pointer"
                />
              ))}
          </>
        )}
      </div>
      {error && (
        <p className={`text-red-500 px-1 ${small ? 'text-xs' : 'text-sm'}`}>
          {error}
        </p>
      )}
    </div>
  );
};

export default TextInput;
