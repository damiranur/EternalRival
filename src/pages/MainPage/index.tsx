import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/Header';
import Main from '../../components/Main';
import EmptyState from '../../components/EmptyState';
import { fetchReleases } from '../../services/apiService';
import { useAppContext } from '../../context';
import styles from './MainPage.module.scss';

const MainPage = () => {
  const [, setSearchParams] = useSearchParams();
  const {
    searchTerm,
    perPage,
    currentPage,
    setCurrentPage,
    setPerPage,
    setTotalPages,
    isLoading,
    setIsLoading,
    releases,
    setReleases,
  } = useAppContext();

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

      setSearchParams({
        q: searchTerm,
        page: String(pagination.page),
        per_page: String(pagination.per_page),
      });
    } catch (error) {
      setReleases([]);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getReleases();
  }, [searchTerm, currentPage, perPage]);

  return (
    <div className={styles.container}>
      <Header />
      {!(isLoading || releases.length) ? <EmptyState /> : <Main />}
    </div>
  );
};

export default MainPage;
