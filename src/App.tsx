import { useState } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { RaroFinancas } from './Components/RaroFinancas';
import { Card } from './Components/Card';
import { ButtonTransaction } from './Components/ButtonTransaction';
import { Transactions } from './Components/Transactions';
import { TableRow, rowProps } from './Components/TableRow';
import { Modal } from './Components/Modal';

function App() {
  const [modalToogle, setModalToogle] = useState(false);

  const [transactionList, setTransactionList] = useState<rowProps[]>([]);
  const [entry, setEntry] = useState(0);
  const [exit, setExit] = useState(0);

  const cards = [
    {
      tipo: 'Entrada',
      valor: entry,
      icone: 'trendUp'
    },
    {
      tipo: 'Saída',
      valor: exit,
      icone: 'trendDown'
    },
    {
      tipo: 'Saldo',
      valor: entry - exit,
      icone: '$'
    }
  ];

  const handleActive = (e: rowProps) => {
    const laele = [...transactionList];
    laele.unshift({
      nome: e.nome,
      data: e.data,
      valor: Number(e.valor),
      categoria: e.categoria,
      tipo: e.tipo
    });
    setTransactionList(laele);

    let entryAux = entry;
    let exitAux = exit;

    if (e.tipo === '+') {
      entryAux += laele[0].valor;
    } else {
      exitAux += laele[0].valor;
    }
    setEntry(entryAux);
    setExit(exitAux);
  };
  return (
    <>
      <RaroFinancas>
        <Header />
        <div className="dash">
          {cards.map((obj, index) => (
            <Card
              key={index}
              tipo={obj.tipo}
              valor={obj.valor}
              icone={obj.icone}
            />
          ))}
          <ButtonTransaction OnClick={() => setModalToogle(!modalToogle)} />
        </div>
        <div className="content">
          <Transactions>
            {transactionList.length ? (
              transactionList.map((obj, index) => (
                <TableRow key={index} {...obj} />
              ))
            ) : (
              <span className="noInfo">
                {' '}
                Não existem transações no histórico
              </span>
            )}
          </Transactions>
        </div>
        <Footer />
      </RaroFinancas>
      <Modal
        onChamaModal={handleActive}
        modalToggle={modalToogle}
        OnClick={() => setModalToogle(!modalToogle)}
      />
    </>
  );
}

export default App;
