import { useState } from "react";
import { data } from "../../mocks/data";
import { Gentleman } from "../gentleman/gentleman";

export function Info() {
  const title: string = `
The gentleman`;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [gentlemanState, setSate] = useState(data);
  return (
    <>
      <header className="main-header">
        <h1 className="main-title">{title}</h1>
      </header>
      <section className="controls">
        <p className="info">{}</p>
        <button className="button button--select">Select all</button>
      </section>
      <main className="main">
        <ul className="gentlemen">
          {gentlemanState.map((men) => (
            <Gentleman>
              men={men}
              states={gentlemanState}
              setState={setSate}
              key={men.id}
            </Gentleman>
          ))}
        </ul>
      </main>
    </>
  );
}
