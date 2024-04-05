import './Header.css';
import { Link } from "react-router-dom";
import { AppRoute } from "../../utils/constants";

function Header({onEdit}) {
    // Выбираем кнопку и элемент с классом popupDiagnostic


    return (
        <header className="header">
            <Link to={AppRoute.Main}>
                <div className="header__logo"></div>
            </Link>
            <nav>
                <ul className="header__nav">
                    <li className="header__nav-item">
                        <Link to={AppRoute.About} className="header__nav-text">О компании</Link>
                    </li>
                    {/*<li className="header__nav-item">*/}
                    {/*    <Link to={AppRoute.Works} className="header__nav-text">Наши работы</Link>*/}
                    {/*</li>*/}
                    {/*<li className="header__nav-item">*/}
                    {/*    <Link to={AppRoute.Organisation} className="header__nav-text">Организациям</Link>*/}
                    {/*</li>*/}
                    <li className="header__nav-item">
                        <Link to={AppRoute.Contacts}
                              className="header__nav-text">Контакты</Link>
                    </li>
                </ul>
            </nav>
            <div className="header__contacts">
                <p className="contacts__time">Пн-Вс с 10:00 до 21:00
                </p>
                <button onClick={onEdit} className="contacts__button">
                    <div className="contacts__image"></div>
                    +7 (901) 132-08-75
                </button>
                <ul className="contacts__list">
                    <li className="contacts__list-image_telegram">
                        <a className="contacts__list-link" href="https://t.me/repairmurino" target="_blank" rel="noopener noreferrer">
                        </a>
                    </li>
                    <li className="contacts__list-image_whatsapp">
                        <a className="contacts__list-link" href="https://api.whatsapp.com/send/?phone=79117816254&text&type=phone_number&app_absent=0"  target="_blank" rel="noopener noreferrer">
                        </a>
                    </li>
                    <li className="contacts__list-image_vk">
                        <a className="contacts__list-link" href="https://vk.com/pochinimvsemurino" target="_blank" rel="noopener noreferrer">
                        </a>
                    </li>
                    {/*<li className="contacts__list-image_youtube">*/}
                    {/*    <a className="contacts__list-link"  href="https://www.youtube.com/example" target="_blank" rel="noopener noreferrer">*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                </ul>
            </div>
        </header>
    );
}

export default Header;
