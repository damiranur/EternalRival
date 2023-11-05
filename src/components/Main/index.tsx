import { Dispatch, MouseEvent, SetStateAction, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Wrapper from '../Wrapper';
import Loader from '../Loader';
import ReleasesList from '../ReleasesList';
import Pagination from '../Pagination';
import Dropdown from '../Dropdown';
import CloseButton from '../CloseButton';
import { Release } from '../../types';
import styles from './Main.module.scss';

interface MainProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  perPage: number;
  setPerPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
  releases: Release[];
  isLoading: boolean;
}

const Main = (props: MainProps) => {
  const {
    currentPage,
    setCurrentPage,
    totalPages,
    perPage,
    setPerPage,
    releases,
    isLoading,
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleLeftSectionClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    if (isOpen) setIsOpen(false);
  };

  return (
    <main className={styles.main}>
      <Wrapper>
        <div className={styles.container}>
          <section
            onClick={handleLeftSectionClick}
            className={styles.leftSection}
          >
            <Dropdown
              perPage={perPage}
              setPerPage={setPerPage}
              setCurrentPage={setCurrentPage}
            />
            {isLoading ? (
              <Loader />
            ) : (
              <div className={styles.wrapper}>
                <ReleasesList releases={releases} setIsOpen={setIsOpen} />
                <Pagination
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalPages={totalPages}
                  isLoading={isLoading}
                />
              </div>
            )}
          </section>
          {isOpen && (
            <section className={styles.rightSection}>
              <CloseButton setIsOpen={setIsOpen} />
              <Outlet />
            </section>
          )}
        </div>
      </Wrapper>
    </main>
  );
};

export default Main;
