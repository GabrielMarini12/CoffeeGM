import { Container } from "../../components/container";
import menuBanner from "../../assets/menu-banner.jpg";
import coffee from "../../assets/coffee.jpg";
import carameloCoffee from "../../assets//pexels-arrcaa-18635176.jpg";
import chocoCoffee from "../../assets/pexels-charlotte-may-5946982.jpg";
import blackCoffee from "../../assets/pexels-lucianphotography-4056276.jpg";

export function Menu() {
  return (
    <>
      <div className="grid grid-cols-2  bg-green-100 mb-6 w-full max-w-[1400px] mx-auto">
        <div className="items-center flex flex-col ">
          <img src={menuBanner} alt="Foto de 2 cafés" />
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
        <div className="flex flex-col mb-10 ">
          <div className="grid grid-cols-2 mb-2 rounded-md bg-green-100 w-[60%] mx-auto">
            <div className="flex flex-col ">
              <img
                className=" rounded-l-md max-h-96 object-cover"
                src={coffee}
                alt="Café"
              />
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
                className="rounded-l-md max-h-96 object-cover"
                src={chocoCoffee}
                alt="Café de morango"
              />
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
                className="rounded-r-md max-h-96 object-cover"
                src={blackCoffee}
                alt="Café com leite"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
