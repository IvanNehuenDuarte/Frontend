import { Link } from "../Link";

export default function Page404() {
  return (
    <>
      <div>
        <h1>Yhis is NOT fine</h1>
        <img
          src="https://midu.dev/images/this-is-fine-404.gif"
          alt="Error 404"
        />
      </div>
        <Link to="/">Volver a la Home</Link>
    </>
  );
}
