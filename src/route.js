import { Button } from 'antd';
import {HomeOutlined} from '@ant-design/icons';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from "./Components/pages/Home";
  import { SiteLayout } from "./Components/shared";
import CTIP from './Components/pages/CTIP';
import PermanentStaffing from './Components/pages/PermanentStaffing';
import TCStaffing from './Components/pages/TCStaffing';
import TrainDeploy from './Components/pages/TrainDeploy';
// import Services from './components/services/services';

//life@sss
// import {SecLifePage, SecLife, SecLifeSSS} from './components/pages/sections';


const Routes = () => {
    return (
      <Switch>
        <SiteLayout path="/home" component={Home} pagename={'home'} />
        <SiteLayout path="/Corporate-Training-and-Induction-Program" component={CTIP} pagename={'Corporate-Training-and-Induction-Program'} />
        <SiteLayout path="/Permanent-Staffing" component={PermanentStaffing} pagename={'Permanent-Staffing'} />
        <SiteLayout path="/Temporary-Contract-Staffing" component={TCStaffing} pagename={'Temporary-Contract-Staffing'} />
        <SiteLayout path="/Train-Deploy" component={TrainDeploy} pagename={'Train-Deploy'} />

        {/* <SiteLayout path="/temp" component={Temp} pagename={'temp'} />
        <SiteLayout path="/about-us"component={About} pagename={'about'} />
        <SiteLayout path="/contact-us"component={Contact} pagename={'contact'} />
        <SiteLayout path="/services"component={Services} pagename={'services'} /> */}

        <SiteLayout path="" component={Home} pagename={'home'} />

      </Switch>
    );
}

export default Routes;
