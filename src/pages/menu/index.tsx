import { useEffect, useState } from "react";
import { Container } from "../../components/container";
import menuBanner from "../../assets/menu-banner.jpg";

import { api } from "../../services/api";

export interface CafesProps {
  id: string;
  name: string;
  description: string;
  price: string;
  modelo: string;
  image: string;
}

export function Menu() {
  const [cafes, setCafes] = useState<CafesProps[]>([]);

  useEffect(() => {
    async function getCafes() {
      const response = await api.get("/cafes");
      setCafes(response.data);
    }

    getCafes();
  }, []);

  return (
    <>
      <div className="grid grid-cols-2  bg-green-100 mb-10 w-full max-w-[1400px] mx-auto">
        <div className="items-center flex flex-col ">
          <img src={menuBanner} alt="Foto de 2 cafés" />
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-center uppercase text-3xl font-bold text-green-950 mb-10 italic  ">
            Cardápio
          </h1>
          <p className="text-xs">*Cardápio com preço variável</p>
          <p className="text-xs -mt-2">
            Consulte os nossos baristas para saber mais
          </p>
        </div>
      </div>

      <Container>
        <section className="flex justify-center items-center mb-12">
          <input
            id="filter-0"
            type="radio"
            name="filter-selection"
            className="hidden"
          />
          <label
            className="rounded-s-full bg-green-900 px-10 py-6 italic font-medium text-xl text-white cursor-pointer hover:opacity-90 hover:shadow-inner hover:shadow-black"
            htmlFor="filter-0"
          >
            Todos
          </label>
          <input
            id="filter-1"
            type="radio"
            name="filter-selection"
            className="hidden"
          />
          <label
            className=" bg-green-900 px-8 py-6 italic font-medium text-xl text-white cursor-pointer hover:opacity-90 hover:shadow-inner hover:shadow-black"
            htmlFor="filter-1"
          >
            Simples
          </label>
          <input
            id="filter-2"
            type="radio"
            name="filter-selection"
            className="hidden"
          />
          <label
            dir="rtl"
            className="rounded-s-full bg-green-900  px-10 py-6 italic font-medium text-xl text-white cursor-pointer hover:opacity-90 hover:shadow-inner hover:shadow-black"
            htmlFor="filter-2"
          >
            Especiais
          </label>
        </section>

        {cafes.map((cafe) => (
          <div className="flex flex-col mb-10 " key={cafe.id}>
            <div className="grid grid-cols-2 mb-2 rounded-md bg-green-100 w-[60%] mx-auto ">
              <div className="flex flex-col ">
                <img
                  className=" rounded-l-md h-96 object-cover"
                  src={cafe.image}
                  alt={cafe.name}
                />
              </div>

              <div className="flex flex-col justify-around items-start gap-2 px-8">
                <p className="text-3xl text-green-950 font-bold">{cafe.name}</p>
                <p className="text-sm text-green-900">{cafe.description}</p>
                <p className="text-xl text-green-950 font-medium">
                  R$ {cafe.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}
