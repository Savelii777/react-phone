import "./ContactsPage.css"
import React from "react";

function ContactsPage({onEdit}) {

    return (
        <div className="contactsPage">

            <h2 className="contactsPage__title">
                Наши контакты:
            </h2>
            <iframe className="contactsPage__map"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa098bc3d5469334310532542774528a76509b8f16ec59589cb2dd449b5fcc54c&amp;source=constructor"
                width="1000" height="540" frameBorder="0"></iframe>
            <div className="contactsPage__text" style={{position: "relative"}}>
                <p><span>Будем рады видеть Вас в нашем офисе: </span></p>
                <div className="contacts__row">
                    <div className="contacts__col">
                        <p>
                    <span>
                        м. Девяткино (Мурино, Бугры)
                    </span>
                        </p>
                        <p style={{marginTop:'20px'}}>
                            ул.Петровский Бульвар 3к1 (вход с торца здания) "Починим Всё" <br/>
                            +7(981)759-57-47<br/>
                            пн-пт: 10:00-21:00; сб,вс: 10:00-20:00
                        </p>
                        <p style={{marginTop: '20px'}}>
                            ул.Графская 11 (вход с торца здания) "Murino.online" <br/>
                            +7(999)034-32-97<br/>
                            пн-пт: 10:00-21:00; сб,вс: 10:00-20:00
                        </p>
                    </div>

                    <div className="contacts__col">
                        <p>
                    <span>
                        м.Звездная
                    </span>
                        </p>
                        <p style={{marginTop: '20px'}}>
                            ул.Звездная 14 (вход со стороны улицы Звездная)
                            СЦ "Звездный" <br/>
                            +7 (812)317-33-12<br/>
                            временно работаем по предварительному звонку
                        </p>
                    </div>
                    <div className="contacts__col">
                        <p>
                    <span>
                        г.Парголово
                    </span>
                        </p>
                        <p style={{marginTop: '20px'}}>
                            ул.Тихоокеанская 18к2 (вход со двора, возле 1 парадной)<br/>
                            +7(911)781-62-54<br/>
                            СКОРО ОТКРЫТИЕ
                        </p>
                    </div>
                </div>


                <span style={{color: "#f5f5f5", position: "absolute", fontSize:"10px", bottom: "0px", right:"0px"}}>
                    ИНН - 780112887422 <br/>
                    Вересов Вадим Валерьевич
                </span>
            </div>
            <ul className="contactsPage__list-bottom">
                <li className="contactsPage__list_telegram">
                    <a className="contactsPage__list-link" href="https://t.me/repairmurino" target="_blank"
                       rel="noopener noreferrer">
                    </a>
                </li>
                <li className="contactsPage__list_whatsapp">
                    <a className="contactsPage__list-link" href="https://api.whatsapp.com/send/?phone=79117816254&text&type=phone_number&app_absent=0" target="_blank"
                       rel="noopener noreferrer">
                    </a>
                </li>
                <li className="contactsPage__list_vk">
                    <a className="contactsPage__list-link" href="https://vk.com/pochinimvsemurino" target="_blank"
                       rel="noopener noreferrer">
                    </a>
                </li>
                {/*<li className="contactsPage__list_youtube">*/}
                {/*    <a className="contactsPage__list-link" href="https://www.youtube.com/example" target="_blank"*/}
                {/*       rel="noopener noreferrer">*/}
                {/*    </a>*/}
                {/*</li>*/}
            </ul>
            <form className="contactsPage__form" action="">
                <p className="contactsPage__form-text">Оставьте свой номер и получите консультацию мастера:</p>
                <div className="contactsPage__form-container">
                    <input className="contactsPage__form-input" type="text" placeholder='+7 (___) ___-__-__'/>
                    <button onClick={onEdit} className="contactsPage__form-button">
                        Оставить заявку
                    </button>
                </div>
            </form>

        </div>

    );
}

export default ContactsPage;
