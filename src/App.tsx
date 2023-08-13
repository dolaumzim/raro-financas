import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { RaroFinancas } from './Components/RaroFinancas'
import { Card } from './Components/Card'
import { ButtonTransaction } from './Components/ButtonTransaction'
import { Transactions } from './Components/Transactions'
import { TableRow } from './Components/TableRow'

function App() {
const [modalToogle, setModalToogle] = useState(false);
console.log(modalToogle);
  return (
  <>
  <RaroFinancas> 
    <Header/>
      <div className='dash'>
        <Card tipo = "Entrada" valor={1000.40} icone='trendUp'/>
        <Card tipo = "Saída" valor={1000.40} icone='trendDown'/>
        <Card tipo = "Saldo" valor={0} icone='$'/>
        <ButtonTransaction OnClick={() => setModalToogle(!modalToogle)}/>
      </div>
      <div className="content">
        <Transactions>
          <TableRow nome='Truco' data='01/08/2023' categoria='Apostas' valor={38.40} tipo='+'/>
          <TableRow nome='Blackjack' data='01/08/2023' categoria='Apostas' valor={33.65} tipo='+'/>
          <TableRow nome='Blaze' data='01/08/2023' categoria='Apostas' valor={55.51} tipo='-'/>
        </Transactions>
      </div>
    <Footer/>
  </RaroFinancas>
  </>
  )
}

export default App
