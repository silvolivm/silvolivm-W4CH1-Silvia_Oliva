// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DataGentleman } from "../../mocks/data";

/*prod es un objeto que trae todo lo que tu pases*/

/*es un componente React válido porque acepta un solo argumento de objeto "props" (que significa propiedades) con datos y devuelve un elemento Reac método slice() devuelve una copia de una parte del array dentro de un nuevo*/
export function Gentleman({ men }) {
  return (
    <>
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={"img/" + men.picture}
          alt="El Fary comiendo limones"
        />

        <span className="gentleman__initial">
          {men.name.slice(0, 1).toLocaleUpperCase()}
        </span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{men.name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {men.profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span>
            {men.status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span>
            {men.twitter}
          </li>
        </ul>
      </div>
    </>
  );
}
