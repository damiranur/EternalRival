import './styled.css';

type Props = {
  value: number;
  click: (value: number) => void;
};

function PageNumber({ value, click }: Props) {
  return (
    <button onClick={() => click(value)} className="number_container">
      {value}
    </button>
  );
}

export default PageNumber;
