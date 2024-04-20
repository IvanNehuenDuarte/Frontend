import { createRoot } from 'react-dom/client'
import App from './src/App.jsx'
import './src/index.css'
import { FiltersProvider } from './src/context/filters.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
    <FiltersProvider>
        <App />
    </FiltersProvider>
)
