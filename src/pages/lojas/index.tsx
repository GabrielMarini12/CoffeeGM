import { Container } from "../../components/container";
import logoImg from "../../assets/starbucks-nav-logo.svg";
import { useState } from "react";

export function Lojas() {
  const [exibirCardsSaoLeo, setExibirCardsSaoLeo] = useState(false);
  const [exibirCardsNh, setExibirCardsNh] = useState(false);
  const [exibirCardsPoa, setExibirCardsPoa] = useState(false);

  function escolherSaoLeo() {
    setExibirCardsSaoLeo(true);
    setExibirCardsNh(false);
    setExibirCardsPoa(false);
  }

  function escolherNh() {
    setExibirCardsNh(true);
    setExibirCardsSaoLeo(false);
    setExibirCardsPoa(false);
  }

  function escolherPoa() {
    setExibirCardsPoa(true);
    setExibirCardsSaoLeo(false);
    setExibirCardsNh(false);
  }

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
            <p
              className="text-white/80 text-lg hover:text-white cursor-pointer"
              onClick={escolherSaoLeo}
            >
              Veja as opções
            </p>
          </div>
          <img src={logoImg} alt="Logo da GM Coffee Company" className="w-14" />
        </div>

        {exibirCardsSaoLeo ? (
          <div className="mb-4 px-5 grid grid-cols-3 gap-3">
            <div className="bg-green-100 flex rounded-md h-72">
              <img
                src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-52 mr-4 rounded-l-md"
              />
              <div className="flex flex-col justify-between py-4 text-sm">
                <p className="font-medium text-green-950">
                  Rua Lindolfo Collor, 168 - Centro
                </p>
                <p className="font-bold text-green-900">Venha conhecer!</p>
              </div>
            </div>

            <div className="bg-green-100 flex rounded-md h-72">
              <img
                src="https://images.pexels.com/photos/1995010/pexels-photo-1995010.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-52 mr-4 rounded-l-md"
              />
              <div className="flex flex-col justify-between py-4 text-sm">
                <p className="font-medium text-green-950">
                  Rua Arnaldo Zimmermann, 250 - Campestre
                </p>
                <p className="font-bold text-green-900">Venha conhecer!</p>
              </div>
            </div>

            <div className="bg-green-100 flex rounded-md h-72">
              <img
                src="https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-52 mr-4 rounded-l-md"
              />
              <div className="flex flex-col justify-between py-4 text-sm">
                <p className="font-medium text-green-950">
                  Av. Feitoria, 2898 - Feitoria
                </p>
                <p className="font-bold text-green-900">Venha conhecer!</p>
              </div>
            </div>
          </div>
        ) : null}

        <div className="flex justify-between items-center w-full bg-gradient-to-r from-green-950 to-green-100 rounded-md py-8 px-12 mb-4 shadow-md shadow-black hover:opacity-90">
          <div className="flex flex-col gap-1">
            <p className="text-4xl font-medium italic text-white/90">
              Novo Hamburgo
            </p>
            <p
              className="text-white/80 text-lg hover:text-white cursor-pointer"
              onClick={escolherNh}
            >
              Veja as opções
            </p>
          </div>
          <img src={logoImg} alt="Logo da GM Coffee Company" className="w-14" />
        </div>

        {exibirCardsNh ? (
          <div className="mb-4 px-5 grid grid-cols-3 gap-3">
            <div className="bg-green-100 flex rounded-md h-72">
              <img
                src="https://images.pexels.com/photos/1192124/pexels-photo-1192124.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-52 mr-4 rounded-l-md"
              />
              <div className="flex flex-col justify-between py-4 text-sm">
                <p className="font-medium text-green-950">
                  Av. Vereador Adão, 700 - Centro
                </p>
                <p className="font-bold text-green-900">Venha conhecer!</p>
              </div>
            </div>

            <div className="bg-green-100 flex rounded-md h-72">
              <img
                src="https://images.pexels.com/photos/3968056/pexels-photo-3968056.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-52 mr-4 rounded-l-md"
              />
              <div className="flex flex-col justify-between py-4 text-sm">
                <p className="font-medium text-green-950">
                  Rua Cabine, 900 - Santo Afonso
                </p>
                <p className="font-bold text-green-900">Venha conhecer!</p>
              </div>
            </div>

            <div className="bg-green-100 flex rounded-md h-72">
              <img
                src="https://images.pexels.com/photos/1833586/pexels-photo-1833586.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-52 mr-4 rounded-l-md"
              />
              <div className="flex flex-col justify-between py-4 text-sm">
                <p className="font-medium text-green-950">
                  Rua Feitoria da Lomba, 98 - Centro
                </p>
                <p className="font-bold text-green-900">Venha conhecer!</p>
              </div>
            </div>
          </div>
        ) : null}

        <div className="flex justify-between items-center w-full bg-gradient-to-r from-green-950 to-green-100 rounded-md py-8 px-12 mb-4 shadow-md shadow-black hover:opacity-90">
          <div className="flex flex-col gap-1">
            <p className="text-4xl font-medium italic text-white/90">
              Porto Alegre
            </p>
            <p
              className="text-white/80 text-lg hover:text-white cursor-pointer"
              onClick={escolherPoa}
            >
              Veja as opções
            </p>
          </div>
          <img src={logoImg} alt="Logo da GM Coffee Company" className="w-14" />
        </div>

        {exibirCardsPoa ? (
          <div className="mb-4 px-5 grid grid-cols-3 gap-3">
            <div className="bg-green-100 flex rounded-md h-72">
              <img
                src="https://images.pexels.com/photos/2193600/pexels-photo-2193600.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-52 mr-4 rounded-l-md"
              />
              <div className="flex flex-col justify-between py-4 text-sm">
                <p className="font-medium text-green-950">
                  Av. Beira Rio, 1025 - Centro
                </p>
                <p className="font-bold text-green-900">Venha conhecer!</p>
              </div>
            </div>

            <div className="bg-green-100 flex rounded-md h-72">
              <img
                src="https://images.pexels.com/photos/2307221/pexels-photo-2307221.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-52 mr-4 rounded-l-md"
              />
              <div className="flex flex-col justify-between py-4 text-sm">
                <p className="font-medium text-green-950">
                  Rua Cristovão Colombo, 100 - Eucaliptos
                </p>
                <p className="font-bold text-green-900">Venha conhecer!</p>
              </div>
            </div>

            <div className="bg-green-100 flex rounded-md h-72">
              <img
                src="https://images.pexels.com/photos/2199190/pexels-photo-2199190.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-52 mr-4 rounded-l-md"
              />
              <div className="flex flex-col justify-between py-4 text-sm">
                <p className="font-medium text-green-950">
                  Rua Mãe de Deus, 690 - Azenha
                </p>
                <p className="font-bold text-green-900">Venha conhecer!</p>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </Container>
  );
}
