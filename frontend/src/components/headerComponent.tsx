import { Link } from 'react-router-dom'
import '../styles/HeaderStyle.css'

export const HeaderComponent = () => {
    return(
        <header>
            <div className='main-header'>
                <section>
                    <Link to="/" className='text-header'>WaifuPedia</Link>
                </section>
                <section>
                    <Link to="/formulario" className='text-header'>Registrar</Link>
                </section>
            </div>
        </header>
    )
}