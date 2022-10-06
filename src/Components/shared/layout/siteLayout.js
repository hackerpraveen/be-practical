import React from 'react';
import { Route} from 'react-router-dom';
import Header  from '../header/header';
import Footer  from '../footer/footer';
const SiteLayout = (props) => {
  const { component: Component, ...rest} = props
    return (
      <React.Fragment>
        <Header />
        <Route exact {...rest} render={(props) =>{
          return  <Component {...props}/> ;
           }} />
        <Footer />
      </React.Fragment>
    );
}

export default SiteLayout;
