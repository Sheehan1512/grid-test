// import { useEffect, useRef } from 'react';
import './App.css'
import GridItem from './GridItem/GridItem'

function App() {

  // const divRef = useRef();

  // useEffect(() => {
  //   const observer = new ResizeObserver(entries => {
  //     for(let entry of entries) {
  //       console.log('Height:', entry.contentRect.height);
  //       console.log('Width:', entry.contentRect.width);
  //     }
  //   });

  //   if (divRef.current) {
  //     observer.observe(divRef.current);
  //   }

  //   return () => {
  //     if (divRef.current) {
  //       observer.unobserve(divRef.current);
  //     }
  //   };
  // }, []);

  const numbers = Array.from({length: 500}, (_, i) => i + 1)

  return (
    <div className="App">
      <div className='grid'>
      {/* <div className='grid' ref={divRef}> */}
        {numbers.map(number => (
          <GridItem key={number} number={number}/>
        ))}
      </div>
    </div>
  )
}

export default App
