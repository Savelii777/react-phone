import React, { useState } from 'react';
import axios from 'axios';
import './PopupDiagnisticOrder.css';

function PopupDiagnisticOrder({isOpen, onClose}) {
    const [isActive, setIsActive] = useState(true);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/send', { userPhone: phone, userName: name });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
        onClose();
    };




    return (
        <div className={`${isOpen ? `popupDiagnisticOrder popupDiagnisticOrder_active` : "popupDiagnisticOrder"}`}>
            <div className="popupDiagnisticOrder__back" onClick={onClose} />
            <div className="popupDiagnisticOrder__container">
                <div className="popupDiagnisticOrder__close" onClick={onClose} />
                <p className="popupDiagnisticOrder__text">
                    Установим точную причину неисправности, озвучим стоимость ремонта и комплектующих:
                </p>
                <div className="popupDiagnisticOrder__button">
                    <div className="popupDiagnisticOrder__image" />
                    +7 (901) 132-08-75
                </div>
                <p className="popupDiagnisticOrder__title">
                    Или оставьте Ваши контакты, и мы перезвоним в течение 10 минут
                </p>
                <form onSubmit={handleSubmit} className="popupDiagnisticOrder__form">
                    <input className="popupDiagnisticOrder__form-input" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7 (___) ___-__-__" type="text" />
                    <input className="popupDiagnisticOrder__form-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="ИМЯ" type="text" />
                    <button type="submit" className="popupDiagnisticOrder__form-button">
                        получить консультацию
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PopupDiagnisticOrder;
