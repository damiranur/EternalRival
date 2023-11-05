import { Link } from 'react-router-dom';
import LogoImage from '../../assets/logo.svg';
import styles from './Logo.module.scss';

interface LogoProps {
  searchParams: URLSearchParams;
}

const Logo = (props: LogoProps) => {
  const { searchParams } = props;

  return (
    <Link to={`/?${searchParams}`} className={styles.link}>
      <img src={LogoImage} alt="logo" className={styles.image} />
      <h1 className={styles.title}>Find Music</h1>
    </Link>
  );
};

export default Logo;
