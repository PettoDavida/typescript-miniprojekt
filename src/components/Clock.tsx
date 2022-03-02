import '../components/CSS/Clock.css'
import React, { useEffect, useState } from "react";
function Clock() {
    const [clockState, setClockstate] = useState<any | null>(null)
    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockstate(date.toLocaleTimeString().replace(/:[^:]*$/,''))
        }, 10)
    }, [])

    const today = new Date();
 
    return (
        <div className="Clock">{clockState}</div>
    );
  }
  
  export default Clock;