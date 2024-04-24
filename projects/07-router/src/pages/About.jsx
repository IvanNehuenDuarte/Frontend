import { Link } from '../Link.jsx'

export default function AboutPage() {
    return(
      <>
        <h1>About</h1>
        <div>
          <img src="https://pbs.twimg.com/profile_images/1643742813379543043/DRQqV8wb_400x400.jpg" alt="Foto de Iván Duarte" />
        <p>¡Hola! Me llamo Iván Nehuen Duarte y estoy creando un clone de React Router</p>
        </div>
        <Link to='/'>Ir a sobre nosotros</Link>
      </>
    )
  }