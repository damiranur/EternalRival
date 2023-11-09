import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import Wrapper from '../Wrapper';
import Loader from '../Loader';
import ReleasesList from '../ReleasesList';
import Pagination from '../Pagination';
import Dropdown from '../Dropdown';
import CloseButton from '../CloseButton';
import { Routes } from '../../router/routes';
import { useAppContext } from '../../context';
import { LOCAL_STORAGE_IS_OPEN } from '../../constants';
import { setIsOpen } from '../../context/actions';
import styles from './Main.module.scss';

const Main = () => {
  const { state, dispatch } = useAppContext();
  const { isOpen, isLoading } = state;
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { search } = location;

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_IS_OPEN, JSON.stringify(isOpen));
    if (!id) {
      setIsOpen(dispatch, false);
    }
  }, [isOpen, id]);

  const handleLeftSectionClick = () => {
    if (isOpen) {
      setIsOpen(dispatch, false);
      navigate(`${Routes.index}${search}`);
    }
  };

  const rightSectionClasses = classNames(styles.rightSection, {
    [styles.hidden]: !isOpen,
  });

  return (
    <main className={styles.main}>
      <Wrapper>
        <div className={styles.container}>
          <section
            onClick={handleLeftSectionClick}
            className={styles.leftSection}
          >
            <Dropdown />
            {isLoading ? (
              <Loader />
            ) : (
              <div className={styles.wrapper}>
                <ReleasesList />
                <Pagination />
              </div>
            )}
          </section>
          <section className={rightSectionClasses}>
            <CloseButton />
            <Outlet />
          </section>
        </div>
      </Wrapper>
    </main>
  );
};

export default Main;
