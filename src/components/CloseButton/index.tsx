import { Dispatch, SetStateAction } from 'react';
import CloseIcon from '../../assets/close-icon.svg';
import styles from './CloseButton.module.scss';

interface CloseButtonProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const CloseButton = (props: CloseButtonProps) => {
  const { setIsOpen } = props;

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <button type="button" onClick={handleClick} className={styles.button}>
        <img src={CloseIcon} alt="close icon" className={styles.image} />
      </button>
    </div>
  );
};

export default CloseButton;
