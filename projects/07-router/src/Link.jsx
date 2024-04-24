import { EVENTS } from "./consts";

export function navigate(href) {
  window.history.pushState({}, "", href);
  // Crear evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

// eslint-disable-next-line react/prop-types
export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0; //primary click
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrKey || event.shiftKey;
    const isManageableEvent = target === undefined || target === "_self";

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault();
      navigate(to); // navegación con SPA
    }
  };

  return <a onClick={handleClick} href={to} target={target} {...props} />;
}
