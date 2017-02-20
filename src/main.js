import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import store from './store/index.js';

import App from './App.jsx';
import TaskListsPage from './containers/TaskListsPage.jsx';
import TasksPage from './containers/TasksPage.jsx';
import TasksPageEdit from './containers/TasksPageEdit.jsx';

ReactDOM.render(
   <Provider store={store}>
      <Router history={hashHistory}>
         <Route path='/' component={App}>
            <IndexRoute component={TaskListsPage} />
            <Route path='/tasks' component={TaskListsPage}>
               <Route path='/tasks/:taskId' component={TasksPage}>
                  <Route path='/tasks/:taskId/:taskEditId' component={TasksPageEdit} />
               </Route>
            </Route>
         </Route>
      </Router>
   </Provider>,
   document.getElementById('mount-point')
);
