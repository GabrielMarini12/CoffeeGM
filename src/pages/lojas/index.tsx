import { Container } from "../../components/container";
import logoImg from "../../assets/starbucks-nav-logo.svg";

export function Lojas() {
  return (
    <Container>
      <section className="w-full px-6 mt-10 mb-10">
        <div className="flex justify-between items-center w-full bg-slate-400 rounded-md py-8 px-12 mb-4">
          <div>
            <p>São Leopoldo</p>
            <p>Veja as opções</p>
          </div>
          <img src={logoImg} alt="Logo da GM Coffee Company" className="w-14" />
        </div>

        <div className="flex justify-between items-center w-full bg-slate-400 rounded-md py-8 px-12 mb-4">
          <div>
            <p>Novo Hamburgo</p>
            <p>Veja as opções</p>
          </div>
          <img src={logoImg} alt="Logo da GM Coffee Company" className="w-14" />
        </div>

        <div className="flex justify-between items-center w-full bg-slate-400 rounded-md py-8 px-12 mb-4">
          <div>
            <p>Porto Alegre</p>
            <p>Veja as opções</p>
          </div>
          <img src={logoImg} alt="Logo da GM Coffee Company" className="w-14" />
        </div>
      </section>
    </Container>
  );
}
