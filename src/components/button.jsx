import React from "react";
import Image2 from "../images/Mail.svg"
import Image3 from "../images/Linkedin Icon.svg"
import styles from "../main.module.css";
function Button(){
    return(
    <div>
        <div className={styles.buttonmain}>
        <button className={styles.button}>
         <img src={Image2} className={styles.btn}/>
            <p>Email</p>
            </button>
        <button className={styles.button1}><img src={Image3} className={styles.btn1}/><p>Linkedln</p></button>
    </div>
    </div>
    )
}
export default Button;
