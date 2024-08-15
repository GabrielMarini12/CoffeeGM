import { Container } from "../../components/container";
import logoImg from "../../assets/starbucks-nav-logo.svg";

export function Lojas() {
  return (
    <Container>
      <section className="w-full px-12 mt-10 mb-10">
        <h1 className="mb-6 text-4xl text-center font-extrabold text-green-950/95">
          Procure o estabelecimento mais próximo de você!
        </h1>
        <div className="flex justify-between items-center w-full bg-gradient-to-r from-green-950 to-green-100 rounded-md py-8 px-12 mb-4 shadow-md shadow-black hover:opacity-90">
          <div className="flex flex-col gap-1">
            <p className="text-4xl font-medium italic text-white/90">
              São Leopoldo
            </p>
            <p className="text-white/80 text-lg hover:text-white cursor-pointer">
              Veja as opções
            </p>
          </div>
          <img src={logoImg} alt="Logo da GM Coffee Company" className="w-14" />
        </div>

        <div className="flex justify-between items-center w-full bg-gradient-to-r from-green-950 to-green-100 rounded-md py-8 px-12 mb-4 shadow-md shadow-black hover:opacity-90">
          <div className="flex flex-col gap-1">
            <p className="text-4xl font-medium italic text-white/90">
              Novo Hamburgo
            </p>
            <p className="text-white/80 text-lg hover:text-white cursor-pointer">
              Veja as opções
            </p>
          </div>
          <img src={logoImg} alt="Logo da GM Coffee Company" className="w-14" />
        </div>

        <div className="flex justify-between items-center w-full bg-gradient-to-r from-green-950 to-green-100 rounded-md py-8 px-12 mb-4 shadow-md shadow-black hover:opacity-90">
          <div className="flex flex-col gap-1">
            <p className="text-4xl font-medium italic text-white/90">
              Porto Alegre
            </p>
            <p className="text-white/80 text-lg hover:text-white cursor-pointer">
              Veja as opções
            </p>
          </div>
          <img src={logoImg} alt="Logo da GM Coffee Company" className="w-14" />
        </div>
      </section>
    </Container>
  );
}
