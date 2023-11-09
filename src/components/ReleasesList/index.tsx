import { Link, useLocation } from 'react-router-dom';
import { Release } from '../../types';
import ReleaseCard from '../ReleaseCard';
import { Routes } from '../../router/routes';
import { useAppContext } from '../../context';
import styles from './ReleasesList.module.scss';
import { setIsOpen } from '../../context/actions';

const ReleasesList = () => {
  const { state, dispatch } = useAppContext();
  const { releases } = state;
  const location = useLocation();
  const { search } = location;

  const handleClick = () => {
    setIsOpen(dispatch, true);
  };

  return (
    <div className={styles.container}>
      {releases?.map((release: Release) => (
        <Link
          key={release.id}
          to={{
            pathname: `${Routes.release}/${release.id}`,
            search,
          }}
          onClick={handleClick}
          className={styles.link}
        >
          <ReleaseCard release={release} />
        </Link>
      ))}
    </div>
  );
};

export default ReleasesList;
