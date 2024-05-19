// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Repository from './pages/Repository';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/repo/:repoName" component={Repository} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
