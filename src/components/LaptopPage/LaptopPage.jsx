import First from "../First/First";
import Contacts from "../Contacts/Contacts";
import Problems from "../Problems/Problems";
import Skolkovo from "../Skolkovo/Skolkovo";
import Believe from "../Believe/Believe";
import Companies from "../Companies/Companies";

function LaptopPage({onEditOrder, onEdit}) {
    const problemsList = [
        {title: "Не включается или не реагирует на кнопку питания"},
        {title: "Мерцающий экран или нет изображения"},
        {title: "Проблемы с батареей"},
        {title: "Перегрев и автоматическое выключение"},
        {title: "Тормозит или долго загружается"},
        {title: "Не работает клавиатура или тачпад"},
        {title: "Проблемы с звуком"},
        {title: "Блокировки или зависания операционной системы"},
        {title: "Неисправности портов USB, HDMI"},
        {title: "Проблемы с Wi-Fi или Bluetooth"},
        {title: "Неисправности зарядного устройства"},
        {title: "Проблемы с микрофоном или веб-камерой"},
        {title: "Неисправности дисковода"},
        {title: "Греется корпус"},
        {title: "Проблемы с монитором (выгорание, пятна, полосы)"},
        {title: "Аварийное выключение без предупреждения"},
        {title: "Дефектные разъемы для наушников или микрофона"},
        {title: "Проблемы с переходом ноутбука в спящий режим"},
        {title: "Искажения на экране"},
        {title: "Неисправности матрицы или подсветки экрана"}
    ];
    return (
        <div className="LaptopPage">

                  <First
                      backgroundImageClass={'backgroundImage3'}
                      title={'Сеть сервисных центров в Санкт-Петербурге и в Мурино'}
                      subtitle1={'Бесплатный выезд мастера/курьер'}
                      subtitle2={'Железная гарантия на все услуги'}
                      onEditOrder={onEditOrder}

                  />
            <Problems onEdit={onEdit} list={problemsList} backgroundImageClass={'problems-background2'}/>
<Skolkovo/>
            <Believe/>
<Companies/>

                      <Contacts onEdit={onEdit}/>

        </div>
    );
}

export default LaptopPage;
