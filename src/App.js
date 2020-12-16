import React from 'react';
import axios from 'axios';
import {
  Container, 
  HeaderContainer, 
  Title, 
  CodeEnteryContainer, 
  SubTitle, 
  InputField, 
  FeedbackEnteryContainer,
  Button,
} from './App.styles';
import { baseUrl, metric, apiKey} from './config';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: null,
      feedBackMessage: '',
      areaData: {},
    };
  }

  setZipCode = (zipCode) => {
    console.log(zipCode)
    this.setState({zipCode});
  }

  setFeedBackMessage = (feedBackMessage) => {
    this.setState({feedBackMessage});
  }

  fetchAreaData = () => {
    const { zipCode } = this.state;
    axios.get(`${baseUrl}${zipCode}${metric}${apiKey}`).then(response => {
      console.log(response);
      this.setState({areaData: response});
    }).catch(e => {
      console.log(e);
    });
  }


  
  render() {
    return (
      <Container>
        <HeaderContainer>
          <Title>Weather Journal App</Title>
        </HeaderContainer>
        <CodeEnteryContainer>
          <SubTitle>Enter Zipcode here</SubTitle>
          <InputField onChange={(e) => this.setZipCode(e.target.value)} type="text" id="zip" placeholder="enter zip code here" />
          <Button onClick={this.fetchAreaData}> Get Area Data </Button>
        </CodeEnteryContainer>
        <FeedbackEnteryContainer>
          <SubTitle>How are you feeling today?</SubTitle>
          <InputField onChange={(e) => this.setFeedBackMessage(e.target.value)} className= "myInput" id="feelings" placeholder="Enter your feelings here" rows="9" cols="50"></InputField>
          <Button id="generate" type = "submit"> Generate </Button>
        </FeedbackEnteryContainer>
        <div class ="holder entry">
          <SubTitle>Most Recent Entry</SubTitle>
          <div id = "entryHolder">
            <div id = "date"></div> 
            <div id = "temp"></div>
            <div id = "content"></div>
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
