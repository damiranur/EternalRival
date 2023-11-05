import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import EmptyState from './components/EmptyState';
import { Release } from './types';
import { LOCAL_STORAGE_SEARCH_TERM } from './constants';
import { fetchReleases } from './services/apiService';
import styles from './App.module.scss';

const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [perPage, setPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>(
    localStorage.getItem(LOCAL_STORAGE_SEARCH_TERM) || ''
  );
  const [releases, setReleases] = useState<Release[]>([]);

  const getReleases = async () => {
    setIsLoading(true);
    try {
      const { results, pagination } = await fetchReleases(
        searchTerm,
        currentPage,
        perPage
      );
      setReleases(results || []);
      setCurrentPage(pagination.page);
      setTotalPages(pagination.pages);
      setPerPage(pagination.per_page);
      setSearchParams({ page: String(pagination.page) });
    } catch (error) {
      setReleases([]);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getReleases();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, currentPage, perPage]);

  return (
    <div className={styles.container}>
      <Header setSearchTerm={setSearchTerm} searchParams={searchParams} />
      {!isLoading && !releases.length ? (
        <EmptyState />
      ) : (
        <Main
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          perPage={perPage}
          setPerPage={setPerPage}
          releases={releases}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default App;
