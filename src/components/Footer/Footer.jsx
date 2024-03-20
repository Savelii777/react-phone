import './Footer.css';


function Footer() {

    return (
        <footer className="footer">
        <div className="footer__logo"></div>
            <p className="footer__text" style={{position: "relative"}}>
                Пользуясь веб-сайтом, Вы соглашаетесь с условиями политики конфиденциальности персональных данных <br/>
                <span style={{color: "#e0e0e0", position: "absolute", bottom: "0"}}>
                    ИНН - 780112887422 Вересов Вадим Валерьевич
                </span>
            </p>
        </footer>
    );
}

export default Footer;
