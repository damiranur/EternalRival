import React, { ReactNode } from 'react';

export interface SearchButtonProps {
  text: string;
}

export interface CharacterData {
  name: string;
  species: string;
  status: string;
  location: {
    name: string;
  };
  episode: string[];
  image: string;
  gender: string;
}

export interface ChracterCardProps {
  data: CharacterData | null;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}

export interface ImageComponentProps {
  src: string;
  alt: string;
}

export interface DataState {
  charactersData: CharacterData[] | null;
  setCharactersData: React.Dispatch<
    React.SetStateAction<CharacterData[] | null>
  >;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
}
