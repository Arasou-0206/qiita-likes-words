import React,{useEffect,useState} from 'react'
import { render } from 'react-dom'
import { ResponsiveSwarmPlotCanvas } from '@nivo/swarmplot'

const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    window
    .fetch('./qiita.json')
    .then((response) => response.json())
    .then((data) =>{
      setData(data)
    })
  },[])
  const newData = data.filter(function(item, index){
    if(item.likes >= 100)return true;
  });

  return (
    <div style={{width: '3000px', height: '1200px'}} >
    <ResponsiveSwarmPlotCanvas
        data={newData}
        groups={['C#','C++','CSS','Go','HTML','Java','JavaScript','PHP','Python','Ruby','Swift']}
        value= "likes"
        label = "id"
        valueScale={{ type: 'linear', min: 100, max: 4000, reverse: false }}
        size={{ key:'words', values: [ 1000, 70000 ], sizes: [ 1, 20 ] }}
        spacing={3}
        simulationIterations={200}
        colors={{ scheme: 'paired' }}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.6 ] ] }}
        margin={{ top: 80, right: 100, bottom: 80, left: 100 }}
        axisTop={{
            orient: 'top',
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'group if vertical, price if horizontal',
            legendPosition: 'middle',
            legendOffset: -46
        }}
        axisRight={{
            orient: 'right',
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'price if vertical, group if horizontal',
            legendPosition: 'middle',
            legendOffset: 76
        }}
        axisBottom={{
            orient: 'bottom',
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'group if vertical, price if horizontal',
            legendPosition: 'middle',
            legendOffset: 46
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'price if vertical, group if horizontal',
            legendPosition: 'middle',
            legendOffset: -76
        }}
        useMesh={true}
        onClick= {(value) => (
          console.log(value.id)
        )}
        debugMesh={true}
    />
    </div>
  )
}
render(<App />, document.querySelector('#content'))
