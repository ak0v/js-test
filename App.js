import React from 'react';
import Sticky from 'react-stickynode'; 
import Menu from './modules/Menu'; 
import TitleBar from './modules/TitleBar';
import TopicContainer from './modules/TopicContainer';
import Authorization from './modules/Authorization';


class App extends React.Component {
   render() {
     let apikey = "AIzaSyBNR3o76t1PG4w4sgYbNiCqHFYjzWYJ4XI";
      return (
        <div id="App">
        <TitleBar id='titlebar'></TitleBar>
        <div id='titleseparator' style={{ height: '200px' }}></div>
        <Sticky enabled={true}>
        <Menu id="menu"
              items={[{label:"HOME", href:"home"},
                      {label:"СВАТБАТА", href:"details"},
                      {label:"ПРОГРАМАТА", href:"schedule"},
                      {label:"ПОТВЪРЖДЕНИЕ", href:"rsvp"},
                      {label:"СНИМКИ", href:"pictures"}]}>
        </Menu>
        </Sticky>
        <div id="svatbata">
        <TopicContainer id="details" title="Сватбата">
        <div className="container">
          <div className="one-half column">
            <h2>Ритуалът</h2>
            <p>16:30 часа – Обреден дом „Пълдин“</p>
            <p>
              <a href="http://www.svatbabg.net">
                <img className="location-image" src='img/paldinhall.jpg' alt="Paldin Hall" />
              </a>
            </p>
            <p style={{textAlign: "center"}}> 
              <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBNR3o76t1PG4w4sgYbNiCqHFYjzWYJ4XI&q=Ritual+house+Puldin,+ulitsa+Saborna,Plovdiv,Bulgaria">
              </iframe>
            </p>
            <p>Нашето сватбено тържество ще се състои на
            21.04.2018 г. от 16:30 часа в Обреден дом
            „Пълдин“.</p>
            <p>Обредния дом е позициониран в подножието
            на Стария град, а докато изчаквате да си
            кажем нашето „ДА!“ – ще може да се
            насладите на реновираната сграда. Таваните
            са изрисувани изкусно, дърворезба може да
            бъде видяна по всички мебели в сградата, а
            целият дом е украсен с рози и орхидеи,
            изработени от коприна.
        </p>
      </div>
      <div className="one-half column">
        <h2>Празненството</h2>
        <p>18:00 часа – ресторант „Мемори“</p>
        <p>
          <a href="http://memorybg.net"><img className="location-image" src="img/memory.jpg" alt="Memory Restaurant Plovdiv" /></a>
        </p>
        <p style={{textAlign: "center"}}> 
          <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBNR3o76t1PG4w4sgYbNiCqHFYjzWYJ4XI&q=Memory,ploshtad+Saedinenie,Plovdiv,Bulgaria">
              </iframe>
        </p>
        <p>Празненството ни ще продължи от 18:00 часа в
        ресторант „Мемори“ в гр. Пловдив.
        </p>
        <p>Ресторантът предлага разнообразие от храни
        и напитки, съчетани с уютна атмосфера.
        Надяваме се, че всички ще прекарат приятно и
        ще отпразнуваме заедно нашия голям ден и
        заедно ще споделим храна, питиета, песни и
        танци в ресторант „Мемори“. След 01:00 часа
        купонът ще продължи в пиано-бар “Quattro”,
        който се намира на долния етаж на
        ресторанта.</p>
      </div>
    </div>
    <hr />
  </TopicContainer>
  </div>
  <TopicContainer id="schedule" title="Програмата">
    <div className="container">
        <h2></h2>
        <p>16:30 часа – сериозната част в Обреден дом „Пълдин“ </p>
        <p>18:00 часа -  Welcome drink  в ресторант „Мемори“ </p>
        <p>19:00 часа – храна, питиета, песни и танци  в ресторант „Мемори“ </p>
        <p>01:00 часа – купонът продължава в пиано-бар „Quattro” </p>
    </div>
  </TopicContainer>
  <TopicContainer id='rsvp' title="Потвърждение">
       <div className= "container">
          <h2></h2>
          <p>За нас ще бъде радост да споделим нашия важен ден с всички вас. 
            Mолим ви да потърдите своето присъствие до 15.03.2018 г. </p>
            <Authorization></Authorization> 
       </div>
  </TopicContainer>
  
        <TopicContainer id='pictures' title="Under Construction">
          <div>
            <p>работи се!</p>
          </div>
        </TopicContainer>
        </div>
      ) 
   }
} 
export default App;