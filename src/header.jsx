import React from "react";
import Image1 from "../images/Rectangle 90.png";
import styles from "../main.module.css";
import Button from "./button";
import About from "./about";
import Interest from "./interests";
import Footer  from "./footer";
function Header(){
    return(<div className={styles.main}>
       
        <img src={Image1} alt="John's image" className={styles.pic}/>
        <div className={styles.header}>
        <h1 className={styles.top1}>Laura Smith</h1>
        <h3 className={styles.top2}>Frontend Developer</h3>
        <h4 className={styles.top3}>laurasmith.website</h4>
        <Button />
        <About />
        <Interest />
        <Footer />
        </div>
    </div>)
}
export default Header;