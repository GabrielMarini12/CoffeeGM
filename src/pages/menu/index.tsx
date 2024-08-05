import { Container } from "../../components/container";
import menuBanner from "../../assets/menu-banner.jpg";
import coffee from "../../assets/coffee.jpg";
import carameloCoffee from "../../assets/caramelocoffee.jfif";
import morangoCoffee from "../../assets/coffeemorango.jfif";
import milkCoffee from "../../assets/milkcoffee.jfif";

export function Menu() {
  return (
    <>
      <div className="grid grid-cols-2 rounded-md bg-green-100 mb-6 w-full max-w-[1400px] mx-auto">
        <div className="items-center flex flex-col ">
          <img
            src={menuBanner}
            alt="Foto de 2 cafés"
            className="rounded-l-md"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-center uppercase text-3xl font-bold text-green-950 mb-10 italic  ">
            Cardápio
          </h1>
          <p className="text-xs">*Cardápio sem preço</p>
          <p className="text-xs -mt-2">
            Consulte os nossos baristas para saber mais
          </p>
        </div>
      </div>
      <Container>
        <div className="flex flex-col mb-10">
          <div className="grid grid-cols-2 mb-2 rounded-md bg-green-100 w-[60%] mx-auto">
            <div className="flex flex-col ">
              <img className=" rounded-l-md" src={coffee} alt="Café" />
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <p>Café com leite</p>
              <p>Descrição</p>
              <p>Valor</p>
            </div>
          </div>

          <div className="grid grid-cols-2 mb-2 rounded-md bg-green-100 w-[60%] mx-auto">
            <div className="flex flex-col justify-center items-center gap-2">
              <p>Café com leite</p>
              <p>Descrição</p>
              <p>Valor</p>
            </div>
            <div className="flex flex-col">
              <img
                className="rounded-r-md"
                src={carameloCoffee}
                alt="Café de caramelo"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 mb-2  rounded-md bg-green-100 w-[60%] mx-auto ">
            <div className="flex flex-col">
              <img
                className="rounded-l-md"
                src={morangoCoffee}
                alt="Café de morango"
              />
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <p>Café com leite</p>
              <p>Descrição</p>
              <p>Valor</p>
            </div>
          </div>

          <div className="grid grid-cols-2 mb-2 rounded-md bg-green-100  w-[60%] mx-auto">
            <div className="flex flex-col justify-center items-center gap-2">
              <p>Café com leite</p>
              <p>Descrição</p>
              <p>Valor</p>
            </div>
            <div className="flex flex-col">
              <img
                className="rounded-r-md"
                src={milkCoffee}
                alt="Café com leite"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
