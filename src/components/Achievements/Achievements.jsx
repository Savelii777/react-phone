import React, { useContext } from 'react';
import './Achievements.css';
import {PageContext}from '../../contexts/PageContext';
import {Link} from "react-router-dom";
import {AppRoute} from "../../utils/constants";


function Achievements({onEdit}) {
    const {activeItem, setActiveItem } = useContext(PageContext);

    const handleClick = (index) => {
        console.log('setActiveItem:', setActiveItem);
        setActiveItem(index);
    };

    return (
        <div className="achievements">
            <div className="container">
                <div className="title text-block text-style-title"><p>Стоимость основных услуг</p></div>
                <div className="list-wrapper grid grid-3-spaced">
                    <div className="grid-item item-list" data-item-id="1">
                        <div className="list-title text-block text-style-strong"><span><p>Телефоны/Планшеты</p></span>
                        </div>
                        <div className="item" data-item-id="1">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Замена дисплея</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 799 руб.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="2">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Ремонт материнской платы</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 900 руб.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="3">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Замена нижнего системного разъема</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 800 руб.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="4">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Чистка после залития</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 1500 руб.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="5">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>замена кнопки HOME</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 399 руб.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="6">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Замена стекла (тачскрина)</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 499 руб.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="7">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Замена аккумулятора</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 599 руб.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="8">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Ребол/замена модема (iphone)</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 2499 руб.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="9">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Ребол/замена аудиокодека &nbsp;(iphone)</p>
                                    </div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 2499 руб.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="10">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Замена контроллера питания</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 1999 руб.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="11">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Восстановление шлейфа (face-id и кнопки Home
                                        Iphone тоже)</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 999 руб.</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item item-list" data-item-id="2">
                        <div className="list-title text-block text-style-strong"><span><p>Ноутбуки/Компьютеры</p></span>
                        </div>
                        <div className="item" data-item-id="1">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Чистка компьютера или ноутбука от пыли</p>
                                    </div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 799 руб.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="2">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Замена термопасты в системе охлаждения
                                        процессора</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>499 руб.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="3">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Установка ОС (Windows XP/7/8/8,1/10/Ubuntu, Mac
                                        OC)</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 499 руб.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="4">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Установка и настройка драйверов</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 99 руб.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="5">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Установка антивируса</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 199 руб.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="6">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Замена комплектующих&nbsp;</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 499 руб.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="7">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>BGA ремонт платы / пайка</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 1499 руб.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="8">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Настройка BIOS</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 499 руб.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="9">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Ребол чипа видеокарты</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 1999 руб.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="10">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Компонентный ремонт платы</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 1499 руб.</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item item-list" data-item-id="3">
                        <div className="list-title text-block text-style-strong"><span><p>Телевизоры</p></span></div>
                        <div className="item" data-item-id="1">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Замена подсветки телевизора 32"-40"</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 2000 Р</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="2">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Замена подсветки телевизора 42"-47"</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 3500 Р</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="3">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Апгрейд блока питания</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 899 Р</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="4">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Ремонт материнской платы</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 1499 Р</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="5">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Ремонт цветоотображения
                                        (гаммакоректора/текона)</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 1499 Р</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="6">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>замена T-CON</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 1499 Р</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="7">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Замена матрицы</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 6999 Р</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="8">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Восстановление после залития</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 1999 Р</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="9">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Восстановление шлейфов матрицы</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 2499 Р</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-item-id="10">
                            <div className="content no-img">
                                <div className="head">
                                    <div className="title text-block"><p>Замена Инвертора подсветки</p></div>
                                    <div className="delimiter"></div>
                                    <div className="price"><p>от 1499 Р</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="achievements__title">
                Мы запаяли более 15 000 000 компонентов приборов
            </h2>
            <p className="achievements__subtitle">
                Выберете, что нужно отремонтировать:
            </p>
            <ul className="achievements__list">
                <Link to={AppRoute.TV}>
                    <li className="achievements__list-item1">
                        <div
                            className={`achievements__list-shadow ${
                                activeItem === 0 ? 'active' : ''
                            }`}
                            onClick={() => handleClick(0)}
                        >
                            <p className="achievements__list-text">телевизор</p>
                        </div>
                    </li>
                </Link>
                <Link to={AppRoute.Laptop}>
                    <li className="achievements__list-item3">
                        <div
                            className={`achievements__list-shadow ${
                                activeItem === 1 ? 'active' : ''
                            }`}
                            onClick={() => handleClick(1)}
                        >
                            <p className="achievements__list-text">ноутбук</p>
                        </div>
                    </li>
                </Link>

                <Link to={AppRoute.Smartphone}>
                    <li className="achievements__list-item4">
                        <div
                            className={`achievements__list-shadow ${
                                activeItem === 2 ? 'active' : ''
                            }`}
                            onClick={() => handleClick(2)}
                        >
                            <p className="achievements__list-text">Телефон</p>
                        </div>
                    </li>
                </Link>

                <Link to={AppRoute.Taplet}>
                    <li className="achievements__list-item5">
                        <div
                            className={`achievements__list-shadow ${
                                activeItem === 3 ? 'active' : ''
                            }`}
                            onClick={() => handleClick(3)}
                        >
                            <p className="achievements__list-text">Планшет</p>
                        </div>
                    </li>
                </Link>

                <Link to={AppRoute.PC}>
                    <li className="achievements__list-item6">
                        <div
                            className={`achievements__list-shadow ${
                                activeItem === 4 ? 'active' : ''
                            }`}
                            onClick={() => handleClick(4)}
                        >
                            <p className="achievements__list-text">ПК</p>
                        </div>
                    </li>
                </Link>

                <Link to={AppRoute.Other}>
                    <li className="achievements__list-item7">
                        <div
                            className={`achievements__list-shadow ${
                                activeItem === 5 ? 'active' : ''
                            }`}
                            onClick={() => handleClick(5)}
                        >
                            <p className="achievements__list-text">Другое</p>
                        </div>
                    </li>
                </Link>

                {/*<Link to={AppRoute.Dishwasher}>*/}
                {/*    <li className="achievements__list-item8">*/}
                {/*        <div*/}
                {/*            className={`achievements__list-shadow ${*/}
                {/*                activeItem === 6 ? 'active' : ''*/}
                {/*            }`}*/}
                {/*            onClick={() => handleClick(6)}*/}
                {/*        >*/}
                {/*            <p className="achievements__list-text">посудомоечная машина</p>*/}
                {/*        </div>*/}
                {/*    </li>*/}
                {/*</Link>*/}

                {/*<Link to={AppRoute.PC}>*/}
                {/*    <li className="achievements__list-item2">*/}
                {/*        <div*/}
                {/*            className={`achievements__list-shadow ${*/}
                {/*                activeItem === 7 ? 'active' : ''*/}
                {/*            }`}*/}
                {/*            onClick={() => handleClick(7)}*/}
                {/*        >*/}
                {/*            <p className="achievements__list-text">монитор</p>*/}
                {/*        </div>*/}
                {/*    </li>*/}
                {/*</Link>*/}

            </ul>
            <form className="achievements__form">
                <p className="achievements__form-text">Оставьте заявку и получите первичную консультацию и
                    диагностику</p>
                <div className="achievements__form-container">
                    <input className="achievements__form-input" type="text" placeholder='+7 (___) ___-__-__'/>
                    <button onClick={onEdit} className="achievements__form-button">
                        оставить заявку
                    </button>
                </div>

            </form>
        </div>
    );
}

export default Achievements;
