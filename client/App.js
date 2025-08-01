import React,{useEffect} from "react";

export default function App() {

  useEffect(()=>{
    const testing = async ()=>{
      const response = await fetch("/api/")
      const data = await response.json()
      console.log(data)
    }
    testing()
  },[])

  return <div>HELLO WORLD WAHATS UP WORLD</div>;
}
