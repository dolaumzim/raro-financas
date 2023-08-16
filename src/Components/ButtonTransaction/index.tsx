import './styles.css';

interface buttonProps {
  OnClick: () => void;
}

export const ButtonTransaction = ({ OnClick }: buttonProps) => {
  return (
    <button className="addTransaction" onClick={OnClick}>
      <div className="icone">
        <img src="src/assets/Plus.svg" alt="Icone de Adição" />
      </div>
      <div className='media'>TRANSAÇÃO</div>
    </button>
  );
};
