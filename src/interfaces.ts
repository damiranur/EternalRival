import { ChangeEvent } from 'react';

export interface HeaderProps {
  inputValue: string;
}

export interface SearchInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchButtonProps {
  text: string;
}
