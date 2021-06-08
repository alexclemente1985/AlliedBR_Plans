import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import PlansScreen from './screens/PlansScreen';

const App = () => (
    <Provider store={store}>
        <Router>
            <Header />
            <Switch>
                <Route path={`/plans/:id`}>
                    <PlansScreen />
                </Route>
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
