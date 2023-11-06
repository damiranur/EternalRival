import { ChangeEvent } from 'react';

type Props = {
  limit: number;
  switcher: (e: ChangeEvent<HTMLSelectElement>) => void;
};

function LimitSwitcher({ limit, switcher }: Props) {
  return (
    <>
      <select onChange={switcher} value={limit}>
        <option value={5}>5</option>
        <option value={10}>10</option>
      </select>
    </>
  );
}

export default LimitSwitcher;
