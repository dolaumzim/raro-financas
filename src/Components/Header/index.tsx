import "./styles.css"

export const Header = () =>{
    return (
        <header className="header">
            <div className="logo">
                <img src="src/assets/credit-card.svg" alt="icone cartão de crédito" />
                Raro Finanças 
            </div>
            <div className="user">
                <div className="details">
                    <span>Samantha Freitas</span>
                    <p>sam.freitas@example.com</p>
                </div>
                <div className="ellipse1">
                    <img src="src/assets/Ellipse 1.svg" alt="" />
                </div>
            </div>
        </header>
    )
} 