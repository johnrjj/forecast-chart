import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
  AreaSeries,
  GradientDefs,
  makeWidthFlexible,
  makeHeightFlexible,
  Borders,
  DiscreteColorLegend,
} from 'react-vis';

const FlexibleXYPlot = makeHeightFlexible(makeWidthFlexible(XYPlot));

const getData = () => new Array(10).fill(0).reduce((prev, curr) => [...prev, {
  x: prev.slice(-1)[0].x + 1,
  y: prev.slice(-1)[0].y * (1 + Math.random() * 0.2)
}], [{ x: 0, y: 10 }])


const ITEMS = [
  'Options',
  'Buttons',
  'Select boxes',
  'Date inputs',
  'Password inputs',
  'Forms',
  'Other'
];

class Graph extends React.Component {
  render() {
    return (
      <FlexibleXYPlot
      margin={{left: 64, right: 64, top: 32, bottom: 64}}
        onMouseLeave={() => console.log('mouse out of graph')}
      >
        {/* xDomain={[1.2, 3]}
        yDomain={[11, 26]}> */}
        <GradientDefs>
          <linearGradient id="CoolGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="red" stopOpacity={0.4}/>
            <stop offset="100%" stopColor="blue" stopOpacity={0.3} />
          </linearGradient>
        </GradientDefs>

        <XAxis />
        <YAxis />

        <VerticalGridLines />
        <HorizontalGridLines />

        <AreaSeries
          color={'url(#CoolGradient)'}
          data={[
            {x: 10, y: 15, y0: 36},
            {x: 0, y: 10, y0: 10}
          ]}/>
        {/* <Borders style={{
          bottom: {fill: '#fff'},
          left: {fill: 'url(#CoolGradient)', opacity: 0.3},
          right: {fill: '#fff'},
          top: {fill: '#fff'}
        }}/> */}

        <LineMarkSeries 
          animation={true}  
          data={getData()} 
        />
        <LineMarkSeries 
          animation={true}  
          data={getData()} 
        />
        <LineMarkSeries 
          animation={true}  
          data={getData()} 
        />
      </FlexibleXYPlot>
    );
  }
}



export {
  Graph,
}