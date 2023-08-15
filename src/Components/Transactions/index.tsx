import './styles.css';

interface props {
  children: React.ReactNode;
}

export const Transactions = ({ children }: props) => {
  return (
    <div className="transactions">
      <div className="bar">
        <span>Histórico de Transações</span>
      </div>
      <div className="tableHeader">
        <div className="tableHeaderCell">Nome</div>
        <div className="tableHeaderCell">Data</div>
        <div className="tableHeaderCell">Categoria</div>
        <div className="tableHeaderCell">Valor</div>
        <div className="tableHeaderTypeCell">Tipo</div>
      </div>
      {children}
    </div>
  );
};
