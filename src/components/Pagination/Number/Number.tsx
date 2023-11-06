import './styled.css';

type Props = {
  value: number;
  click: (value: number) => void;
  countPages: number;
};

function PageNumber({ value, click, countPages }: Props) {
  const disabled = value <= 1 || value >= countPages;
  return (
    <button
      disabled={disabled}
      onClick={() => click(value)}
      className="number_container"
    >
      <p>{value}</p>
    </button>
  );
}

export default PageNumber;
