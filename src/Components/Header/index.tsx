import './styles.css';

export const Header = () => {
  return (
    <header className="headerMain">
      <div className="logo">
        <img src="src/assets/credit-card.svg" alt="icone cartão de crédito" />
        Raro Finanças
      </div>
      <div className="user">
        <div className="details">
          <span>Armando Assini</span>
          <p>arm.assini@gmail.com</p>
        </div>
        <img className="photo" src="src/assets/Guaxinim.png" alt="" />
      </div>
    </header>
  );
};
