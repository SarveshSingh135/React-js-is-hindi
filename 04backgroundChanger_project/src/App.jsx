import { useState } from "react"


function App() {
  const [color , setColor] =useState("Orange")

  return (
    <div className="w-full h-screen duration-400"
    style ={{backgroundColor: color}}>
      <div className="fixed bottom-12 inset-x-0 flex justify-center px-2">
        <div className="flex flex-wrap justify-between w-full max-w-4xl bg-white px-4 py-2 rounded-3xl">
          <button          
          onClick={() => setColor("red")}
          className="outline-none px-4 py1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}
          >Red</button>
          <button
           onClick={() => setColor("green")}
          className="outline-none px-4 py1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}
          >green</button>
          <button
           onClick={() => setColor("black")}
          className="outline-none px-4 py1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"black"}}
          >black</button>
          <button
           onClick={() => setColor("blue")}
          className="outline-none px-4 py1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"blue"}}
          >blue</button>
          <button
           onClick={() => setColor("white")}
          className="outline-none px-4 py1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"white"}}
          >white</button>
          <button
           onClick={() => setColor("purple")}
          className="outline-none px-4 py1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"purple"}}
          >purple</button>
          <button
           onClick={() => setColor("yellow")}
          className="outline-none px-4 py1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"yellow"}}
          >yellow</button>
          <button
           onClick={() => setColor("olive")}
          className="outline-none px-4 py1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"olive"}}
          >olive</button>
          <button
           onClick={() => setColor("grey")}
          className="outline-none px-4 py1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"grey"}}
          >Grey</button>
          <button
           onClick={() => setColor("lavender")}
          className="outline-none px-4 py1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"lavender"}}
          >Lavender</button>
          <button
          onClick={() => setColor("pink")}
          className="outline-none px-4 py1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"pink"}}
          >pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
