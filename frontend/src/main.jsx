import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import './css/bootstrap/css/bootstrap.min.css'
import './css/bootstrap/js/bootstrap.bundle.min.js'
import "./css/custom/custom.css";
import "./css/custom/custom-categorieen.css";
import "./css/custom/custom-artikelen.css";
import App from './app.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename="/webshop/">
            <App/>
        </BrowserRouter>
    </StrictMode>
)