import './styles.css';

interface radioProps {
  name: string;
  value: string;
  image: string;
  symbol: string;
  id: string;
}

export const Radio = ({ name, value, image, symbol, id }: radioProps) => {
  return (
    <label htmlFor={id}>
      <div className="radioSingle">
        <input required type="radio" name={name} value={symbol} id={id} />
        <img src={image} alt="" />
        <span>{value}</span>
      </div>
    </label>
  );
};
