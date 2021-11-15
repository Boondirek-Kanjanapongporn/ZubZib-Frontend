import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { LightThemeContext } from './LightThemeContext';
import {AuthenticateContext} from './AuthenticateContext';
import {UsernameContext} from './UsernameContext';
import {PasswordContext} from './PasswordContext';
import Home from './pages';
import Contact from './pages/ContactPage'
import About from './pages/AboutPage';
import Creators from './pages/CreatorsPage';
import Signup from './pages/SignupPage';
import Chatroom from './pages/ChatroomPage';

function App() {
  const [lightTheme, setLightTheme] = useState(true);
  const [authenticate, setAuthenticate] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Router>
      <Switch>
        <AuthenticateContext.Provider value={{authenticate,setAuthenticate}}>
          <LightThemeContext.Provider value={{lightTheme, setLightTheme}}>
            <UsernameContext.Provider value={{username, setUsername}}>
              <PasswordContext.Provider value={{password, setPassword}}>
                <Route exact path="/">
                  {authenticate ? <Redirect to="/chatroom" /> : <Home/>}
                </Route>
                <Route path="/about" component={About} exact/>
                <Route path="/creators" component={Creators} exact/>
                <Route path="/contact" component={Contact} exact/>
                <Route path="/signup" component={Signup} exact/>
                <Route path="/chatroom" exact>
                  {authenticate? <Chatroom/> : <Redirect to="/"/>}
                </Route>
              </PasswordContext.Provider>
            </UsernameContext.Provider>
          </LightThemeContext.Provider>
        </AuthenticateContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
