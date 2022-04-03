import ReactDOM from "react-dom";
import { StrictMode } from 'react';
import App from "./app.js";
import React from "react";
import './style.css';


const root = document.getElementById('root');

ReactDOM.render(
    <StrictMode>
        <App></App>
    </StrictMode>, root)


