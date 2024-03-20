import First from "../First/First";
import Achievements from "../Achievements/Achievements";
import Working from "../Working/Working";
import Believe from "../Believe/Believe";
import Contacts from "../Contacts/Contacts";
import Companies from "../Companies/Companies";


function MainPage({onEdit, onEditOrder}) {

    return (
        <div className="MainPage">

            <First
                backgroundImageClass={'backgroundImage4'}
                title={'Сеть сервисных центров в Санкт-Петербурге и в Мурино'}
                subtitle1={'Бесплатный выезд мастера/курьер'}
                subtitle2={'Железная гарантия на все услуги'}
                onEditOrder={onEditOrder}
            />

            <Achievements
                onEdit={onEdit}
            />
            <Working/>
            <Companies/>
            <Contacts
                onEdit={onEdit}
            />

        </div>
    );
}

export default MainPage;
