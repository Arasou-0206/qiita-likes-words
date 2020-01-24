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
    if(item.likes > 100 && item.words > 10000)return true;
  });

  return (
    <>
        <section className="section">
          <div className="container">
            <div className="content has-text-centered">
              <h3>2019年度尾上ゼミ 情報科学講究1 課題制作</h3>
              <h1>Qiitaの『いいね』数と文字数に関する可視化</h1>
              <p>これはデータの説明です。</p>
              <p>これは可視化の説明です。</p>
              <div div style={{width: '1350px', height: '1300px' , overflow:'auto'}} >
               <div style={{width: '3500px', height: '1200px'}} >
    <ResponsiveSwarmPlotCanvas
        data={newData}
        groups={['C#','C++','CSS','Go','HTML','Java','JavaScript','PHP','Python','Ruby','Swift']}
        value= "likes"
        label = "id"
        valueScale={{ type: 'linear', min: 0, max: 4000, reverse: false }}
        size={{ key:'words', values: [ 1000, 70000 ], sizes: [ 1, 10 ] }}
        spacing={3}
        //forceStrength={9.0}
        simulationIterations={300}
        colors={{ scheme: 'category10' }}
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
            tickSize: 20,
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
        //debugMesh={true}
    />
               </div>
              </div>
              <br></br>
              <p>これは可視化結果の考察です。</p>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>&copy;2019 荒木 創太郎,坂本 愛弥</p>
          </div>
        </footer>
      </>
  )
}
render(<App />, document.querySelector('#content'))
