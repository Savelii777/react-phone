import './Contacts.css';
import React from "react";

function Contacts({onEdit}) {

    return (
        <div className="contacts">
            <div className="contacts__container">
                <iframe className="contacts__map"
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa098bc3d5469334310532542774528a76509b8f16ec59589cb2dd449b5fcc54c&amp;source=constructor"
                        width="479" height="260" frameBorder="0"></iframe>
                <form className="contacts__form" action="">
                    <p className="contacts__form-text">Оставьте свой номер и получите консультацию мастера:</p>
                    <div className="contacts__form-container">
                        <input className="contacts__form-input" type="text" placeholder='+7 (___) ___-__-__'/>
                        <button onClick={onEdit} className="contacts__form-button">
                            Оставить заявку
                        </button>
                    </div>
                </form>
                <h2 className="contacts__title">
                    Наши контакты:
                </h2>
                <div className="contacts__text">
                    <p>Будем рады видеть Вас в нашем офисе:</p>
                    <div className="contacts__text-row">
                        <p className="contacts__text-item">
                            <span>
                                ул.Петровский Бульвар 3к1<br/>
                            </span>
                            +7(981)759-57-47 <br/>
                        </p>
                        <p className="contacts__text-item">
                            <span>
                                ул.Графская 11<br/>
                            </span>
                            +7(999)034-32-97<br/>
                        </p>
                    </div>


                    <div className="contacts__text-row">
                        <p className="contacts__text-item">
                            <span>
                            ул.Звездная 14<br/>
                            </span>
                            +7 (812)317-33-12<br/>
                        </p>
                        <p className="contacts__text-item">
                            <span>
                                ул.Тихоокеанская 18к2<br/>
                            </span>
                            +7(911)781-62-54<br/>
                        </p>
                    </div>

                    <p>
                        пн-пт: 10:00-21:00 <br/>
                        сб,вс: 10:00-20:00
                    </p>
                </div>
                <ul className="contacts__list-bottom">
                    <li className="contacts__list_telegram">
                        <a className="contacts__list-link" href="https://t.me/repairmurino" target="_blank" rel="noopener noreferrer">
                        </a>
                    </li>
                    <li className="contacts__list_whatsapp">
                        <a className="contacts__list-link" href="https://api.whatsapp.com/send/?phone=79117816254&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                        </a>
                    </li>
                    <li className="contacts__list_vk">
                        <a className="contacts__list-link" href="https://vk.com/pochinimvsemurino" target="_blank" rel="noopener noreferrer">
                        </a>
                    </li>
                    {/*<li className="contacts__list_youtube">*/}
                    {/*    <a className="contacts__list-link" href="https://www.youtube.com/example" target="_blank" rel="noopener noreferrer">*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                </ul>

            </div>
        </div>
    );
}

export default Contacts;
