import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../../components/Layout';
import BusinessList from '../Business/List';
import menuData from '../../config/menu.json';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Layout menuData={menuData}>
      <Switch>
        <Route path="/business/list" component={BusinessList} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
