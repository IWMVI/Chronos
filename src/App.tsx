import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Heading attr={123} attr2="String">
        Olá mundo 1
      </Heading>
      <Heading>Olá mundo 2 </Heading>
      <Heading>Olá mundo 3</Heading>
      <Heading>Olá mundo 4</Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        saepe consequuntur itaque nobis debitis asperiores possimus in, tempore
        neque ipsum, atque natus eos error quia? Quod exercitationem alias odio
        a.
      </p>
    </>
  );
}
