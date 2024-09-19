import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'antd/dist/reset.css'

import { BrowserRouter } from 'react-router-dom'
import { legacy_createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers/rootReducer.jsx'
const appStore = legacy_createStore(rootReducer)


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={appStore}>
      <App />
    </Provider>
  </BrowserRouter>,
)
