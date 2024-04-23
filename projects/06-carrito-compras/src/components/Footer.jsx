import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer () {
    const { filters } = useFilters()
    return (
        <footer className='footer'>
            {
                JSON.stringify(filters)
            }
            {/* <h4>Prueba técnica de React ⚛️
            <span>@IvanNehuenD</span></h4>
            <h5>Shopping cart con useContext & useReducer</h5> */}
        </footer>
    )
}