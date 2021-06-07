import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/Home';
import AboutScreen from './screens/About';

const App = () => (
    <Provider store={store}>
        <Router>
            <Header />
            <Switch>
                <Route path="/about">
                    <AboutScreen />
                </Route>
                <Route path="/">
                    <HomeScreen />
                </Route>
            </Switch>
        </Router>
    </Provider>
);

export default App;
