import { Dispatch, MouseEvent, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { Release } from '../../types';
import ReleaseCard from '../ReleaseCard';
import styles from './ReleasesList.module.scss';

interface ReleasesListProps {
  releases: Release[];
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ReleasesList = (props: ReleasesListProps) => {
  const { releases, setIsOpen } = props;
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setIsOpen(true);
  };

  return (
    <div className={styles.container}>
      {releases?.map((release: Release) => (
        <Link
          key={release.id}
          to={`/release/${release.id}`}
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
