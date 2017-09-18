import React, { Component } from 'react';
import logo from './logo.svg';
import { Graph } from './Test';
import './App.css';
import 'react-vis/dist/style.css';
import { DiscreteColorLegend } from 'react-vis';

import styled from 'styled-components';


const ChartContainer = styled.div`
  height: 100vh;
  flex: 1;
  display: flex;
`;

const FullScreen = styled.div`
  height: 100vh;
  diplay: flex;

`;

class App extends Component {
  render() {
    return (
      <FullScreen>
        <ChartContainer>
          <Graph/>
          <DiscreteColorLegend
              height={200}
              width={300}
              items={[1, 2, 3, 4]}/>
        </ChartContainer>
      </FullScreen>
    );
  }
}

export default App;
