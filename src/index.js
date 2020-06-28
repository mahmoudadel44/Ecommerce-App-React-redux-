
import React from 'react'
import  ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './components/App'
import './css/bootstrap.min.css'
import './App.css'
import './css/bootstrap.min.css'
ReactDOM.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    ,document.querySelector('#root'))