import "./styles.css"

interface cardProps{
    tipo: string;
    valor : number;
    icone: string; 
}

export const Card = ({tipo,valor,icone} : cardProps) =>{
    const sValor = valor.toLocaleString("pt-BR",{ style: "currency", currency: "BRL" }).split(',');
    let iconId = 'money';

    if (icone === 'trendUp'){
        icone = 'src/assets/trending-up.svg'
        iconId = 'trendUp';
    }else if(icone === 'trendDown'){
        icone = 'src/assets/trending-down.svg'
        iconId = 'trendDown';
    }

    return (
        <div className="card">
            <div className="value">
                <p>{tipo}</p>
                <div className="icone" id={iconId}>
                {
                    icone !== "$" ? (<img src={icone} alt="" />) : (<span>{icone}</span>)
                }
                </div>
            </div>
            <div className="valueResult">{(sValor[0])},<span>{sValor[1]}</span></div>
        </div>
    )
}