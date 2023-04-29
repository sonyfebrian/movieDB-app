import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ReactQueryProvider } from './Provider/index.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactQueryProvider>
        <App />
      </ReactQueryProvider>
    </Provider>
  </React.StrictMode>,
)
