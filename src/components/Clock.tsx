import '../components/Clock.css'
import React, { useEffect, useState } from "react";
function Clock() {
    const [clockState, setClockstate] = useState<any | null>(null)
    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockstate(date.toLocaleTimeString())
        }, 1000)
    }, [])

    const today = new Date();
    const displayDate = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear()
 
    return (
        <div className="Clock">{clockState}</div>
    );
  }
  
  export default Clock;