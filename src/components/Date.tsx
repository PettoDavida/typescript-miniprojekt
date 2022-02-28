import '../components/Date.css'
function getCurrentDate() {
    const today = new Date();
    const displayDate = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear()
    return(
        <div className="Date">{displayDate}</div>
    )
}

export default getCurrentDate;