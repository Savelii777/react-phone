import First from "../First/First";
import Contacts from "../Contacts/Contacts";
import Problems from "../Problems/Problems";
import Skolkovo from "../Skolkovo/Skolkovo";
import Believe from "../Believe/Believe";
import Companies from "../Companies/Companies";

function PCPage({onEditOrder, onEdit}) {
    const problemsList = [
        {title: "Проблемы с загрузкой операционной системы"},
        {title: "Перегрев"},
        {title: "Блоки питания"},
        {title: "Проблемы с жестким диском"},
        {title: "Проблемы с памятью RAM"},
        {title: "Не запускается компьютер"},
        {title: "Вирусы и зловредное ПО"},
        {title: "Проблемы с видеокартой"},
        {title: "Проблемы с материнской платой"},
        {title: "Проблемы с USB-портами"},
        {title: "Процессор и система охлаждения"},
        {title: "Проблемы с звуковой картой"},
        {title: "Корпус и вентиляция"},
        {title: "Неисправности сетевой карты"},
        {title: "Проблемы с BIOS"},
        {title: "Батарейка BIOS"},
        {title: "Неисправности видеовыходов"},
        {title: "Коррозия контактов"},
        {title: "Проблемы с CD/DVD-приводом"},
        {title: "Программные сбои и ошибки"}
    ];
    return (
        <div className="pcPage">

                  <First
                      backgroundImageClass={'backgroundImage7'}
                      title={'Сеть сервисных центров в Санкт-Петербурге и в Мурино'}
                      subtitle1={'Бесплатный выезд мастера/курьер'}
                      subtitle2={'Железная гарантия на все услуги'}
                      onEditOrder={onEditOrder}
                  />
            <Problems onEdit={onEdit} list={problemsList} backgroundImageClass={'problems-background5'}/>
<Skolkovo/>
            <Believe/>
<Companies/>

                      <Contacts onEdit={onEdit}/>

        </div>
    );
}

export default PCPage;
