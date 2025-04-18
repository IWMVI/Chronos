import { Menu } from "./components/Menu";
import { Logo } from "./components/Logo";
import { Footer } from "./components/Footer";
import { Cycles } from "./components/Cycles";
import { PlayCircleIcon } from "lucide-react";
import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { DefaultButton } from "./components/DefaultButton";

import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput
              labelText="Task"
              id="myInput"
              type="text"
              placeholder="Informe uma Task"
            />
          </div>
          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="formRow">
            <Cycles />
          </div>
          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
