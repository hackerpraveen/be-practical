
import React from 'react';
import {
    Switch
  } from "react-router-dom";
  import { SiteLayout } from "./Components/shared";
  import Home from "./Components/pages/Home";
import CTIP from './Components/pages/CTIP';
import PermanentStaffing from './Components/pages/PermanentStaffing';
import TCStaffing from './Components/pages/TCStaffing';
import TrainDeploy from './Components/pages/TrainDeploy';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Career from './Components/pages/Career';
import JobPost from './Components/pages/JobPost';
// import Services from './components/services/services';



const Routes = () => {
    return (
      <Switch>
        <SiteLayout path="/home" component={Home} pagename={'home'} />
        <SiteLayout path="/Corporate-Training-and-Induction-Program" component={CTIP} pagename={'Corporate-Training-and-Induction-Program'} />
        <SiteLayout path="/Permanent-Staffing" component={PermanentStaffing} pagename={'Permanent-Staffing'} />
        <SiteLayout path="/Temporary-Contract-Staffing" component={TCStaffing} pagename={'Temporary-Contract-Staffing'} />
        <SiteLayout path="/Train-Deploy" component={TrainDeploy} pagename={'Train-Deploy'} />
        <SiteLayout path="/About-Us" component={About} pagename={'About-Us'} />
        <SiteLayout path="/Contact-Us" component={Contact} pagename={'Contact-Us'} />
        <SiteLayout path="/Career" component={Career} pagename={'Career'} />
        <SiteLayout path="/Job-post/:id" component={JobPost} pagename={'Job-post'} />


        {/* <SiteLayout path="/temp" component={Temp} pagename={'temp'} />
        <SiteLayout path="/about-us"component={About} pagename={'about'} />
        <SiteLayout path="/contact-us"component={Contact} pagename={'contact'} />
        <SiteLayout path="/services"component={Services} pagename={'services'} /> */}

        <SiteLayout path="" component={Home} pagename={'home'} />

      </Switch>
    );
}

export default Routes;
