import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/reset.css'
import './styles/styles.css'
import Footer from "./components/ui/Footer.jsx";
import {StateProvider} from './context/StateProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <StateProvider>
            <App/>
            <Footer/>
        </StateProvider>
    </React.StrictMode>,
)
