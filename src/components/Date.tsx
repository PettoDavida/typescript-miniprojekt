import '../components/CSS/Date.css'
function getCurrentDate() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
];
    const today = new Date();
    const displayDate = today.getDate() + " " + monthNames[today.getMonth()] + " " + today.getFullYear()
    return(
        <div className="Date">{displayDate}</div>
    )
}

export default getCurrentDate;