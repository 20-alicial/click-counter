import { useState, useEffect } from 'react';
import './App.css';
// import { collection, addDoc } from "@firebase/firestore";
// import {firestore} from "./firebase"

export default function App() {
  const [count, setCount] = useState(0);
  // const ref = collection(firestore, "total_count");

  useEffect(() => {
    const data = window.localStorage.getItem('CLICK_COUNTER_APP');
    console.log(data,'data')
    if ( data !== null ) {
      setCount(JSON.parse(data)+1);
      // console.log("testing");
      // console.log(count)
    }
  }, [])

  // useEffect(() =>{
  //   window.localStorage.setItem('CLICK_COUNTER_APP', JSON.stringify(count))
  //   console.log(count)
  // }, [count])

  function handleClick(){
    setCount(count + 1);
    window.localStorage.setItem('CLICK_COUNTER_APP', JSON.stringify(count));
    // console.log(count)
  }

  // const handleClick = async(e) => {
  //   e.preventDefault();
  //   setCount (count + 1);
  //   console.log(count);

  //   let data = {
  //     total_count: count + 1,
  //   };

  //   try {
  //     addDoc(ref, data);
  //   } catch(e) {
  //     console.log(e);
  //   }
  // };  

  function Button(){
    return (
      <button onClick={handleClick}>
        Click Me!
      </button>
    )
  }
  return(
    <div className="counter">
      <h1>
        Welcome to Click Counter!
      </h1>
      <h4>Number of Times You Clicked:</h4>
      <h3 className="counter__output">{count}</h3>
        <Button />
    </div>
  )
}