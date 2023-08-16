import './styles.css';

export interface rowProps {
  nome: string;
  data: string;
  categoria: string;
  valor: number;
  tipo: string;
}

export const TableRow = ({ nome, data, categoria, valor, tipo }: rowProps) => {
  return (
    <div className="tableRow">
      <div className="tableRowCell">{nome}</div>
      <div className="tableRowCell">{data.split('-').reverse().join('/')}</div>
      <div className="tableRowCell">{categoria}</div>
      <div className="tableRowCell">
        {valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </div>
      <div className={'tableRowType' + tipo}>{tipo}</div>
    </div>
  );
};
