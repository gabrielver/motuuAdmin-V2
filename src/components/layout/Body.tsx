import React from "react";
import Location from "../../views/dashboards/Location";
import Recap from "../../views/dashboards/Recap";
import Reports from "../../views/dashboards/Reports";
import Travel from "../../views/dashboards/Travel";
import User from "../../views/dashboards/User";
import "./Body.scss";
import { motion} from 'framer-motion'


function Body() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3

      }
    }
  }
  const item = {
    hidden: { opacity: 0, 
    y: 200 },
    show: { opacity: 1, 
    y:0 }
  }

  return (
    <motion.div variants={container}
    initial="hidden"
    animate="show" >
    {/* <motion.div initial={{width: 0 }} animate={{ width: "100%" }} exit={{x: window.innerWidth}} transition={{ duration: 0.5}}> */}
    <div className="body">

    <motion.div variants={item}>
        <Recap />
    </motion.div>

    <motion.div variants={item}>
        <Reports />
     </motion.div> 

     <motion.div variants={item}>
        <User />
     </motion.div> 

     <motion.div variants={item}>
        <Travel />
     </motion.div> 

     <motion.div variants={item}>
        <Location />
     </motion.div> 
      
      
      
    </div>
    </motion.div>
  );
}

export default Body;
