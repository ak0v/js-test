import React from 'react';
import Sticky from 'react-stickynode'; 
import Menu from './modules/Menu'; 
import TitleBar from './modules/TitleBar';
import TopicContainer from './modules/TopicContainer';


class App extends React.Component {
   render() {
      return (
        <div id="main">
        <TitleBar id='titlebar'></TitleBar>
        <div id='titleseparator' style={{ height: '200px' }}></div>
        <Sticky enabled={true}>
        <Menu id="menu"
              items={[{label:"Link1", href:'link1'},
                      {label:"Link2", href:'link2'},
                      {label:"Link3", href:'link3'},]}>
        </Menu>
        </Sticky>
        <TopicContainer id='link1' name="link1" title="Long and descriptive link 1">
          <div>
            <p> text related to link1 </p>
          </div>
        </TopicContainer>
        <TopicContainer id='link2' name="link2" title="Long and descriptive link 2">
          <div>
            <p> text related to link2 </p>
          </div>
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