import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { ChildrenProps, Release } from '../types';
import {
  DEFAULT_CURRENT_PAGE,
  DEFAULT_PER_PAGE,
  DEFAULT_TOTAL_PAGES,
  LOCAL_STORAGE_IS_OPEN,
  LOCAL_STORAGE_SEARCH_TERM,
} from '../constants';

interface AppContextValues {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  perPage: number;
  setPerPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
  setTotalPages: Dispatch<SetStateAction<number>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  releases: Release[];
  setReleases: Dispatch<SetStateAction<Release[]>>;
}

const AppContext = createContext<AppContextValues | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = (): AppContextValues => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  return context;
};

const AppProvider = ({ children }: ChildrenProps) => {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem(LOCAL_STORAGE_SEARCH_TERM) || ''
  );
  const storedIsOpen = localStorage.getItem(LOCAL_STORAGE_IS_OPEN);
  const [isOpen, setIsOpen] = useState(
    storedIsOpen ? JSON.parse(storedIsOpen) : false
  );
  const [perPage, setPerPage] = useState(DEFAULT_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(DEFAULT_CURRENT_PAGE);
  const [totalPages, setTotalPages] = useState(DEFAULT_TOTAL_PAGES);
  const [isLoading, setIsLoading] = useState(true);
  const [releases, setReleases] = useState<Release[]>([]);

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        currentPage,
        setCurrentPage,
        perPage,
        setPerPage,
        totalPages,
        setTotalPages,
        isOpen,
        setIsOpen,
        isLoading,
        setIsLoading,
        releases,
        setReleases,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
