import { Inputs } from "../Inputs";
import { Radio } from "../Radio";
import { rowProps } from "../TableRow";
import "./styles.css"
import React from 'react';

interface modalProps{
    OnClick : () => void;
    modalToggle : boolean;
    onChamaModal: (obj:rowProps) =>void;
}

const inputObj = [
    {
        name : 'Nome',
        type : 'text',
        placeholder: 'Digite o nome da sua transação'
    },
    {
        name : 'Data',
        type : 'text',
        placeholder: 'Digite a data da sua transação'
    },
    {
        name : 'Categoria',
        type : 'text',
        placeholder: 'Digite a categoria da sua transação'
    },
    {
        name : 'Valor',
        type : 'text',
        placeholder: 'Digite o valor da sua transação'
    },
]

const radioObj =[
    {
        name : 'tipo',
        value: 'Entrada',
        image: 'src/assets/trending-up.svg',
        symbol: '+',
        id:'entrada'
    },
    {
        name : 'tipo',
        value: 'Saída',
        image: 'src/assets/trending-down.svg',
        symbol: '-',
        id: 'saida'
    },
]

export const Modal = ({OnClick, modalToggle, onChamaModal}:modalProps) =>{ 
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const obj : rowProps = {
            nome : (e.currentTarget.elements.namedItem('nome') as HTMLInputElement).value,
            data: (e.currentTarget.elements.namedItem('data') as HTMLInputElement).value,
            categoria: (e.currentTarget.elements.namedItem('categoria') as HTMLInputElement).value,
            valor: Number((e.currentTarget.elements.namedItem('valor') as HTMLInputElement).value),
            tipo: (e.currentTarget.elements.namedItem('tipo') as HTMLInputElement).value
        }
      onChamaModal(obj);
    }

    return (
        <div className={`modalBG ${modalToggle && 'openModal'}`}>
            <div className="modal">
                <header className="headerModal"> Nova Transação </header>
                <form className="main" onSubmit={handleSubmit}>
                    {
                    inputObj.map((obj)=> (
                        <Inputs name={obj.name} 
                                type={obj.type} 
                                placeholder={obj.placeholder}/>
                    ))
                    } 
                    <div className="radioButtons">
                    {radioObj.map((obj)=> (
                        <Radio name={obj.name} 
                        value={obj.value} 
                        image={obj.image} 
                        symbol={obj.symbol} 
                        id={obj.id}/>
                    ))
                    } 
                    </div>
                    <footer className="footerModal">    
                            <button className="footerButton" type="button" id="cancel" onClick={OnClick}>
                                <img src="src/assets/x.svg" alt="" />
                                Cancelar
                            </button>
                            <button className="footerButton" type="submit" id="add" onClick={OnClick}>
                                <img src="src/assets/check.svg" alt="" />
                                Adicionar
                            </button>
                    </footer>
                </form>
            </div>
        </div>
    )
}