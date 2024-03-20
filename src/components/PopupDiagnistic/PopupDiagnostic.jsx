import React, { useState } from 'react';
import axios from 'axios';
import './PopupDiagnostic.css';

function PopupDiagnostic({isOpen, onClose}) {
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
        <div className={`${isOpen ? `popupDiagnostic popupDiagnostic_active` : "popupDiagnostic"}`}>
            <div className="popupDiagnostic__back" onClick={onClose} />
            <div className="popupDiagnostic__container">
                <div className="popupDiagnostic__close" onClick={onClose} />
                <p className="popupDiagnostic__text">
                    Получите инструкции, как реанимировать Ваш прибор самостоятельно:
                </p>
                <div className="popupDiagnostic__button">
                    <div className="popupDiagnostic__image" />
                    +7 (901) 132-08-75
                </div>
                <p className="popupDiagnostic__title">
                    Или оставьте Ваши контакты, и мы перезвоним в течение 10 минут
                </p>
                <form onSubmit={handleSubmit} className="popupDiagnostic__form">
                    <input className="popupDiagnostic__form-input" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7 (___) ___-__-__" type="text" />
                    <input className="popupDiagnostic__form-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="ИМЯ" type="text" />
                    <button type="submit" className="popupDiagnostic__form-button">
                        получить консультацию
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PopupDiagnostic;
