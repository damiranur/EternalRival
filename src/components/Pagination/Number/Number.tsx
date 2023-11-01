import './styled.css';

type Props = {
  value: number;
};
function Number({ value }: Props) {
  return (
    <div className="number_container">
      <p>{value}</p>
    </div>
  );
}

export default Number;
