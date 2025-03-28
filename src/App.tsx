import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";
import { TimerIcon } from "lucide-react";

export function App() {
  return (
    <>
      <Heading>
        Olá mundo 1
        <button title="Timer">
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        saepe consequuntur itaque nobis debitis asperiores possimus in, tempore
        neque ipsum, atque natus eos error quia? Quod exercitationem alias odio
        a.
      </p>
    </>
  );
}
