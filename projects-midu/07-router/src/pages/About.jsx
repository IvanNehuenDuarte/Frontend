/* eslint-disable react/prop-types */
import { Link } from '../components/Link'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir a la home',
    description: '¡Hola! Me llamo Iván Nehuen Duarte y estoy creando un clon de React Router'
  },
    en: {
      title: 'About us',
      button: 'Go to home page',
      description: '¡Hi! My name is Iván Nehuen Duarte and I am creating a clone of React Router'
    }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')

    return(
      <>
        <h1>{i18n.title}</h1>
        <div>
          <img src="https://pbs.twimg.com/profile_images/1643742813379543043/DRQqV8wb_400x400.jpg" alt="Foto de Iván Duarte" />
        <p>{i18n.description}</p>
        </div>
        <Link to='/'>{i18n.button}</Link>
      </>
    )
  }