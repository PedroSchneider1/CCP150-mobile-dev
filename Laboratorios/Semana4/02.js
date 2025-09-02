const { useState, useEffect } = React;
 
 function App() {
   const [isOn, setIsOn] = useState(false);
   const [count, setCount] = useState(0);

   useEffect(() => {
     let interval;
     if (isOn) {
       interval = setInterval(() => {
         setCount((prev) => prev + 1);
       }, 1000);
     }
     
     // Clean up the interval when the timer is paused or the component is unmounted
     return () => clearInterval(interval);
   }, [isOn]);
   
   const formatTime = (totalSeconds) => {
     const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
     const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
     const seconds = String(totalSeconds % 60).padStart(2, "0");
     return `${hours}:${minutes}:${seconds}`;
   };
   
   return (
    <div>
       <h1>Timer</h1>
       <p>{formatTime(count)}</p>
       {!isOn && (
         <button type="button" onClick={() => setIsOn(true)}>
           Iniciar
         </button>
       )}
       {isOn && (
         <button type="button" onClick={() => setIsOn(false)}>
           Pausar
         </button>
       )}
       <button onClick={() => setCount(0)}>
         Zerar
       </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));