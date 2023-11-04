import React from "react";
import Image2 from "../images/Instagram Icon.png";
import Image3 from "../images/Twitter Icon.svg";
import Image4 from "../images/Facebook Icon.svg";
import Image5 from "../images/GitHub Icon.svg";
import styles from "../main.module.css"
function Footer(){
    return(<div>

            <div className={styles.footermain}>
          <img src={Image3} className={styles.icon1} />
          <img src={Image4} className={styles.icon2} />
          <img src={Image2} className={styles.icon3} />
          <img src={Image5} className={styles.icon4} />
         
          </div>
          </div>
    
    )
}
export default Footer