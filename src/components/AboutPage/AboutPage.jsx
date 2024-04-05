import FirstAbout from "../FirstAbout/FirstAbout";
import Achievements from "../Achievements/Achievements";
import Contacts from "../Contacts/Contacts";
import Believe from "../Believe/Believe";

function AboutPage({onEdit}) {

    return (
        <div className="aboutPage">

            <FirstAbout
                backgroundImageClass={'backgroundImage6'}
                title={'Сеть сервисных центров в Санкт-Петербурге и в Мурино'}
                subtitle1={'Сделаем по оптимальной цене'}
                subtitle2={'Железная гарантия на все услуги'}
            />

            <Achievements onEdit={onEdit}/>
            <Contacts onEdit={onEdit}/>

        </div>
    );
}

export default AboutPage;
