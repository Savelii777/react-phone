import First from "../First/First";
import Contacts from "../Contacts/Contacts";
import Problems from "../Problems/Problems";
import Skolkovo from "../Skolkovo/Skolkovo";
import Believe from "../Believe/Believe";
import Companies from "../Companies/Companies";

function SmartphonePage({onEdit, onEditOrder}) {
    const problemsList = [
        {title: "Треснутый или разбитый экран"},
{title: "Проблемы с зарядкой"},
{title: "Выход из строя аккумулятора"},
{title: "Проблемы с кнопками управления"},
{title: "Неисправности камеры"},
{title: "Звуковые проблемы"},
{title: "Перегрев устройства"},
{title: "Проблемы с Wi-Fi и Bluetooth"},
{title: "Не работает сенсорный экран"},
{title: "Проблемы с GPS"},
{title: "Неисправности разъемов (наушники, зарядка)"},
{title: "Проблемы с микрофоном или динамиком"},
{title: "Зависание и перезагрузки"},
{title: "Проблемы с сетью мобильной связи"},
{title: "Неисправности ПО"},
{title: "Утечка информации или взлом безопасности"},
{title: "Проблемы с дисплеем (цвета, пятна, полосы)"},
{title: "Невозможность включения устройства"},
{title: "Низкая производительность"},
{title: "Неисправности датчиков (освещенности, приближения)"}
    ];
    return (
        <div className="SmartphonePage">

                  <First
                      backgroundImageClass={'backgroundImage5'}
                      title={'Сеть сервисных центров в Санкт-Петербурге и в Мурино'}
                      subtitle1={'Бесплатный выезд мастера/курьер'}
                      subtitle2={'Железная гарантия на все услуги'}
                      onEditOrder={onEditOrder}
                  />
            <Problems onEdit={onEdit} list={problemsList} backgroundImageClass={'problems-background4'}/>
<Skolkovo/>
            <Believe/>
<Companies/>

                      <Contacts onEdit={onEdit}/>

        </div>
    );
}

export default SmartphonePage;
