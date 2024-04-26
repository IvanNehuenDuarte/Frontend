/* eslint-disable react/prop-types */
import { EVENTS } from "../utils/consts"
import { useState, useEffect, Children } from "react"
import { match } from "path-to-regexp";
import { getCurrentPath } from "../utils/utils";

export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
    const [currentPath, setCurrentPath] = useState(getCurrentPath())
  
    useEffect(() => {
      const onLocationChange = () => {
        setCurrentPath(getCurrentPath())
      }
  
      window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)
  
      return () => {
        window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
      }
    }, [])

    let routeParams = {}

    // add routes from children <Route /> components
    const routesFromChildren = Children.map(children, ({ props, type }) => {
      const { name } = type 
      const isRoute = name === 'Route'
      
      return isRoute ? props : null
    })

    const routesToUse = routes.concat(routesFromChildren).filter(Boolean)
  
    const Page = routesToUse.find(({ path }) => {
        if (path === currentPath) return true

        // Usamos path-to-regexp para detectar rutas dinamicas
        const matcherUrl = match(path, { decode: decodeURIComponent })
        const matched = matcherUrl(currentPath)
        if (!matched) return false

        // Guardamos parámetros url dinamicos
        routeParams = matched.params // { query: 'javascript' } /search/javascript
        return true

    })?.Component

    return Page 
        ? <Page routeParams={routeParams} /> 
        : <DefaultComponent routeParams={routeParams}/>
  }