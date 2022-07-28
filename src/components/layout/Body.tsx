import React from "react";
import Location from "../../views/dashboards/Location";
import Recap from "../../views/dashboards/Recap";
import Reports from "../../views/dashboards/Reports";
import Travel from "../../views/dashboards/Travel";
import User from "../../views/dashboards/User";
import "./Body.scss";
import { motion} from 'framer-motion'


function Body() {
  return (
    <motion.div initial={{scaleY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{ duration: 0.5}}>
    {/* <motion.div initial={{width: 0 }} animate={{ width: "100%" }} exit={{x: window.innerWidth}} transition={{ duration: 0.5}}> */}
    <div className="body">
      <Recap />
      <Reports />
      <User />
      <Travel />
      <Location />
    </div>
    </motion.div>
  );
}

export default Body;
