import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import theme from './ui/Theme';
import Header from './ui/Header';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';
import Services from './Services';
import CustomSoftware from './CustomSoftware';
import AboutUs from './ui/AboutUs';
import ContactUs from './ui/ContactUs';

function App() {
  // to maintain the Header's tabs selected state
  const [value, setValue] = useState(0);

  // for keeping track of last selected menu item
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path='/services'
            render={(props) => (
              <Services
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path='/customsoftware'
            render={(props) => (
              <CustomSoftware
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />

          <Route path='/mobileapps' component={() => <div>mobileapps</div>} />
          <Route exact path='/websites' component={() => <div>websites</div>} />
          <Route path='/revolution' component={() => <div>revolution</div>} />
          <Route
            path='/about'
            render={(props) => (
              <AboutUs
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path='/contact'
            render={(props) => (
              <ContactUs
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route path='/estimate' component={() => <div>estimate</div>} />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
