import React from "react";

function Footer() {
    let day = new Date()
    let year=day.getFullYear()
    return <footer className="footer"><p>@ copyright, {year} </p></footer>
}

export default Footer