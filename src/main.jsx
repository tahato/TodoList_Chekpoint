import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AddTask from './Components/AddTask/AddTask.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Task from './Components/Task/Task.jsx'
import {Providre} from 'react'
import { Provider } from 'react-redux'
import store from './Redux/store.js'
const router = createBrowserRouter([
  {
    path: "/",
    element: <AddTask></AddTask>,
  },
  {
    path: "/task",
    element: <Task></Task>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store} >
    <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>,
)
