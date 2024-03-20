import './App.css';
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar"
import First from "../First/First";
import { PageContextProvider } from '../../contexts/PageContext';
import {useEffect, useState} from "react";
import Footer from "../Footer/Footer";
import {Routes, Route} from "react-router-dom";
import {AppRoute} from "../../utils/constants";
import MainPage from "../MainPage/MainPage";
import ServicePage from "../ServicePage/ServicePage";
import LaptopPage from "../LaptopPage/LaptopPage";
import SmartphonePage from "../SmartphonePage/SmartphonePage";
import TabletPage from "../TabletPage/TabletPage";
import OtherPage from "../OtherPage/OtherPage";
import AboutPage from "../AboutPage/AboutPage";
import ContactsPage from "../ContactsPage/ContactsPage";
import PCPage from "../PCPage/PCPage";
import PopupDiagnostic from "../PopupDiagnistic/PopupDiagnostic";
import PopupDiagnisticOrder from "../PopupDiagnisticOrder/PopupDiagnisticOrder";

function App() {
    const [activeItem, setActiveItem] = useState(null);
    const [isPopupOpened, doPopupOpened] = useState(false);
    const [isPopupOrderOpened, doPopupOrderOpened] = useState(false);

    useEffect(() => {
        const handleEscapeClose = (evt) => {
            if (evt.key === 'Escape') {
                closeAllPopups();
            }
        };

        const handlePopupsClose = (evt) => {
            if (evt.target.classList.contains('popupDiagnostic_active') || evt.target.classList.contains('popupDiagnosticOrder_active')) {
                closeAllPopups();
            }
        };

        const addEventListeners = () => {
            document.addEventListener('mousedown', handlePopupsClose);
            document.addEventListener('keydown', handleEscapeClose);
        };

        const removeEventListeners = () => {
            document.removeEventListener('mousedown', handlePopupsClose);
            document.removeEventListener('keydown', handleEscapeClose);
        };

        addEventListeners();
        return removeEventListeners;
    }, [closeAllPopups]);

    function closeAllPopups() {
        doPopupOpened(false);
    }

    function handleButtonClick(event) {
        event.preventDefault()
        doPopupOpened(true);
    }
    function handleButtonOrderClick(event) {
        event.preventDefault()
        doPopupOpened(true);
    }


    return (
    <div className="App">
        <PageContextProvider value={{ activeItem, setActiveItem }}>
            <PopupDiagnostic
                isOpen={isPopupOpened}
                onClose={closeAllPopups}
            />
            <PopupDiagnisticOrder
                isOpen={isPopupOrderOpened}
                onClose={closeAllPopups}
            />

            <Header
                onEdit={handleButtonClick}
            />
              <NavBar/>
            <Routes>
                <Route path={AppRoute.Main} element={
                    <MainPage
                        onEdit={handleButtonClick}
                        onEditOrder={handleButtonOrderClick}

                    />
                } />

                <Route path={AppRoute.TV} element={
                    <ServicePage
                        onEdit={handleButtonClick}
                        onEditOrder={handleButtonOrderClick}

                    />
                } />
                <Route path={AppRoute.Laptop} element={
                    <LaptopPage
                        onEdit={handleButtonClick}
                        onEditOrder={handleButtonOrderClick}

                    />
                } />
                <Route path={AppRoute.Smartphone} element={
                    <SmartphonePage
                        onEdit={handleButtonClick}
                        onEditOrder={handleButtonOrderClick}

                    />
                } />
                <Route path={AppRoute.Taplet} element={
                    <TabletPage
                        onEdit={handleButtonClick}
                        onEditOrder={handleButtonOrderClick}

                    />
                } />
                <Route path={AppRoute.Other} element={
                    <OtherPage
                        onEdit={handleButtonClick}
                        onEditOrder={handleButtonOrderClick}


                    />
                } />

                <Route path={AppRoute.About} element={
                    <AboutPage
                        onEdit={handleButtonClick}
                        onEditOrder={handleButtonOrderClick}


                    />
                } />
                <Route path={AppRoute.Contacts} element={
                    <ContactsPage
                        onEdit={handleButtonClick}
                        onEditOrder={handleButtonOrderClick}


                    />
                } />
                <Route path={AppRoute.PC} element={
                    <PCPage
                        onEdit={handleButtonClick}
                        onEditOrder={handleButtonOrderClick}

                    />
                } />
            </Routes>
            <Footer/>
            {/*  <Header/>*/}
      {/*  <NavBar/>*/}
      {/*  <First*/}
      {/*      backgroundImage={'https://i0.photo.2gis.com/images/branch/0/30258560050082866_3243.jpg'}*/}
      {/*      title={'Сеть сервисных центров в г. Санкт-Петербурге и в г. Мурино'}*/}
      {/*      subtitle1={'Бесплатный выезд мастера/курьер'}*/}
      {/*      subtitle2={'Железная гарантия на все услуги'}*/}
      {/*  />*/}
      {/*<Achievements/>*/}
      {/*      <Working/>*/}
      {/*      <Believe/>*/}
      {/*      <Contacts/>*/}
      {/*      <Footer/>*/}

        </PageContextProvider>

    </div>
  );
}

export default App;
