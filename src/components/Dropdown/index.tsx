import { Dispatch, MouseEvent, SetStateAction, useState } from 'react';
import styles from './Dropdown.module.scss';
import classNames from 'classnames';

interface DropdownProps {
  perPage: number;
  setPerPage: Dispatch<SetStateAction<number>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Dropdown = (props: DropdownProps) => {
  const { perPage, setPerPage, setCurrentPage } = props;
  const dropdownValues: number[] = [4, 6, 8, 10, 12];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('Select value');
  const [selectedItem, setSelectedItem] = useState<number>(perPage);
  const toggleOpen = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleItemClick = (value: number) => {
    setSelected(String(value));
    setSelectedItem(value);
    setPerPage(value);
    setCurrentPage(1);
  };

  const dropdownHeadClassNames = classNames(styles.dropdownHead, {
    [styles.opened]: isOpen,
    [styles.active]: selected !== 'Select value',
  });

  const selectedItemClassNames = (value: number) =>
    classNames(styles.item, {
      [styles.selected]: value === selectedItem,
    });

  return (
    <div className={styles.container} onClick={toggleOpen}>
      <div className={dropdownHeadClassNames}>{selected}</div>
      {isOpen && (
        <div className={styles.dropdown}>
          {dropdownValues.map((value, index) => {
            return (
              <div
                key={index}
                onClick={() => handleItemClick(value)}
                className={selectedItemClassNames(value)}
              >
                {value}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
