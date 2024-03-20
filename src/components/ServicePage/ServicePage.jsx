import First from "../First/First";
import Contacts from "../Contacts/Contacts";
import Problems from "../Problems/Problems";
import Skolkovo from "../Skolkovo/Skolkovo";
import Believe from "../Believe/Believe";
import Companies from "../Companies/Companies";

function ServicePage({onEditOrder, onEdit}) {
    const problemsList = [
        {title: "Нет изображения, только звук. от 1000"},
        {title: "Не включается. от 1500"},
        {title: "Не включается. от 2500"},
        {title: "Мерцающий экран. от 1000"},
        {title: "Потеря цвета от 500"},
        {title: "Появление полос на экране от 5000"},
        {title: "Проблемы с Wi-Fi или Bluetooth от 1500"},
        {title: "Звук, но нет изображения от 1000"},
        {title: "Выключается сам по себе от 500"},
        {title: "Звуковые искажения или шумы от 1000"},
        {title: "Не реагирует на пульт ДУ от 500"},
        {title: "Замедленная реакция на нажатия кнопок от 3000"},
        {title: "Проблемы с HDMI-подключением от 2500"},
        {title: "Вибрация или шум из динамиков от 1000"},
        {title: "Зашумленное изображение от 2000"},
        {title: "Не работает интернет-браузер или приложения Smart TV от 2000"},
        {title: "Неисправность USB-портов от 1500"},
        {title: "Мерцающий подсветка экрана от 4000"},
        {title: "Торможение или зависание интерфейса от 1500"},
        {title: "Неисправности панели управления от 500"}
    ];
    return (
        <div className="ServicePage">

                  <First
                      backgroundImageClass={'backgroundImage2'}
                      title={'Сеть сервисных центров в Санкт-Петербурге и в Мурино'}
                      subtitle1={'Бесплатный выезд мастера/курьер'}
                      subtitle2={'Железная гарантия на все услуги'}
                      onEditOrder={onEditOrder}

                  />
            <Problems onEdit={onEdit} list={problemsList} backgroundImageClass={'problems-background1'}/>
<Skolkovo/>
            <Believe/>
<Companies/>

                      <Contacts onEdit={onEdit}/>

        </div>
    );
}

export default ServicePage;
