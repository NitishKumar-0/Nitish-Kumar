import { useState } from "react";

function App() {
  const [num, setNum] = useState(10);


  return (
    <>
    <div id="top"><h1>This is for decrement or incrementing teh number in teh box</h1></div>
    <div id="parent">
 
      <h1 id="inbox" tyle={{textAlign:"center"}}> {num}</h1>
      <div id="button">
        <button style={{padding:"10px"}}
      onClick={function () {

        setNum(num + 1)
      }}
      >
        Increment</button>
      <button onClick={function () {
        setNum(num - 1)
      }}>Dcrement</button>

      </div>
      
    </div>
    </>
  )

}
export default App;