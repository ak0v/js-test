import React from 'react';
import Sticky from 'react-stickynode'; 
import Menu from './modules/Menu'; 
import TitleBar from './modules/TitleBar';
import TopicContainer from './modules/TopicContainer';
import Authorization from './modules/Authorization';


class App extends React.Component {
   render() {
      return (
        <div id="App">
        <TitleBar id='titlebar'></TitleBar>
        <div id='titleseparator' style={{ height: '200px' }}></div>
        <Sticky enabled={true}>
        <Menu id="menu"
              items={[{label:"HOME", href:"home"},
                      {label:"СВАТБАТА", href:"details"},
                      {label:"RSVP", href:"rsvp"},
                      {label:"SCHEDULE", href:"schedule"}]}>
        </Menu>
        </Sticky>
        <TopicContainer id='rsvp' title="потвърждение">
          <div> 
            <Authorization></Authorization> 
          </div>
        </TopicContainer>
        <TopicContainer id="details" title="Сватбата">
        <div className="container">
          <div className="one-half column">
            <h2>Ритуалът</h2>
            <p>16:30 @Зала Пълдин Стария Град</p>
            <p>
              <a href="http://www.svatbabg.net">
                <img className="location-image" src='img/paldinhall.jpg' alt="Paldin Hall" />
              </a>
            </p>
            <p style={{textAlign: "center"}}>
              <a href="https://goo.gl/maps/GRT4MGSE92y">Google Maps</a>
            </p>
            <p>Той се намира в подножието на Стария град на Пловдив и отвори врати в края на октомври 2009 година 
              след основен ремонт, първия след повече от 30 години. В реконструкцията бяха вложени 2 млн. лв., с които
               бе възстановен старинният блясък на сградата, съчетан с модерни удобства като климатизацията. Таваните са
                изрисувани, по всички мебели има дърворезба, целият дом е украсен с рози и орхидеи, изработени от коприна 
                като цветята в Белия дом. Те са накацали по клонки холандска върба, а около тях падат кристали "Сваровски" 
                и перли.Ритуалният дом "Пълдин" се намира в къщата на д-р Рашко Петров, един от първите български лекари,
                учили в чужбина, след това съратник на Левски. Сградата е типичен представител на несиметричната възрожденска
                архитектура. След Освобождението за кратко в нея се помещавало временното руско управление, ръководено от 
                княз Александър Дондуков-Корсаков. През 1974 г. къщата е превърната в обреден дом за сватбени тържества. .
        </p>
      </div>
      <div className="one-half column">
        <h2>Празненството</h2>
        <p>18:30 @ ресторант Мемори</p>
        <p>
          <a href="http://memorybg.net"><img className="location-image" src="img/memory.jpg" alt="Memory Restaurant Plovdiv" /></a>
        </p>
        <p style={{textAlign: "center"}}>
          <a href="https://goo.gl/maps/4VMFLpyZBvB2">Google Maps</a> 
        </p>
        <p>Ресторант Мемори Пловдив - Wine&Dine – в превод - да осигуриш щедро храна и вино. Ние в ресторант 
          Мемори добавяме и дългогодишния опит и старание за перфектно обслужване и собствен стил. В сърцето на 
          града създадохме мястото, в което ще намерите храна, приготвена с грижа, умение и страст и ще можете да 
          й се насладите сред релаксиращите тонове и форми на авторския интериор. В ресторант Мемори полагаме
           всекидневни усилия да задоволим апетита ви за новаторска и съвременна кухня, но с удоволствие ще ви 
           сготвим и по домашному любимите ястия. Към това предлагаме да прибавим ноти от джаз и соул музика и да
            вдишаме ароматите на чаша превъзходно вино от изключителната ни винена селекция и така да натрупаме 
            заедно бъдещите ни спомени.
        </p>
      </div>
    </div>

    <hr />

    <h2>В деня на сватбата</h2>
    <p>Програма с линк . Дрескод шуби-дуби.
    </p>
    <p>Програма 2 с линк.
    </p>
    <p>
      Програма с 3
    </p>

    <hr />

    <h2>След сватбата</h2>
    <p>Купонът след сватбата продължава след 01:00 след полунощ в&nbsp;
       <a href="https://www.facebook.com/quattropianobar/"> Piano Bar Quatro</a>. Той се намирана долния етаж
       на ревсторант Мемори <a href="https://goo.gl/maps/Tjsbh4Ty9ey"></a>.
    </p>
  </TopicContainer>
        <TopicContainer id='link3' name="link3" title="Long and descriptive link 3">
          <div>
            <p> text related to link3 </p>
          </div>
        </TopicContainer>
        </div>
      ) 
   }
} 
export default App;