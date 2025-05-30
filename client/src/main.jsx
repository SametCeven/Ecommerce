import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min.js'
import { Provider } from "react-redux"
import { myStore } from './store/store.js'

createRoot(document.getElementById('root')).render(
    <Provider store={myStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
