import "./styles.css"

interface rowProps {
    nome : string;
    data : string;
    categoria : string;
    valor : number;
    tipo : string;
}

export const TableRow = ({nome, data, categoria, valor, tipo} : rowProps) =>{
    return (
        <div className="tableRow">
            <div className="tableRowCell">{nome}</div>
            <div className="tableRowCell">{data}</div>
            <div className="tableRowCell">{categoria}</div>
            <div className="tableRowCell">{valor.toFixed(2).split('.').join(',')}</div>
            <div className={'tableRowType' + tipo} >{tipo}</div>
        </div>
    )
}