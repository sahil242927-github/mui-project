import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme';
import Header from './ui/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={() => <div>Home</div>} />
          <Route path='/services' component={() => <div>Services</div>} />
          <Route
            path='/customsoftware'
            component={() => <div>Custom Software</div>}
          />
          <Route path='/mobileapps' component={() => <div>mobileapps</div>} />
          <Route exact path='/websites' component={() => <div>websites</div>} />
          <Route path='/revolution' component={() => <div>revolution</div>} />
          <Route path='/about' component={() => <div>about</div>} />
          <Route path='/contact' component={() => <div>contact</div>} />
          <Route path='/estimate' component={() => <div>estimate</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
