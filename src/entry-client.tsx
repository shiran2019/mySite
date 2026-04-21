import React from 'react'
import ReactDOM from 'react-dom/client'
import { getRouter } from './router'
import './styles.css'

const router = getRouter()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {router.component ? <router.component /> : <div>Loading...</div>}
  </React.StrictMode>,
)
