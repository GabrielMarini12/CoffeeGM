import { Container } from "../../components/container";

export function Menu() {
  return (
    <Container>
      <div className="flex flex-col mt-10 mb-10">
        <h1 className="text-center uppercase text-2xl font-bold text-green-950 mb-10">
          Menu
        </h1>

        <div className="grid grid-cols-2 mb-2 rounded-md bg-green-100 py-8">
          <div className="items-center flex flex-col ">
            <img
              className="w-28"
              src="https://www.starbucks.com.br/public/img/icons/starbucks-nav-logo.svg"
              alt=""
            />
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <p>Café com leite</p>
            <p>Descrição</p>
            <p>Valor</p>
          </div>
        </div>

        <div className="grid grid-cols-2 mb-2 rounded-md bg-green-100 py-8">
          <div className="flex flex-col justify-center items-center gap-2">
            <p>Café com leite</p>
            <p>Descrição</p>
            <p>Valor</p>
          </div>
          <div className="items-center flex flex-col">
            <img
              className="w-28"
              src="https://www.starbucks.com.br/public/img/icons/starbucks-nav-logo.svg"
              alt=""
            />
          </div>
        </div>

        <div className="grid grid-cols-2 mb-2  rounded-md bg-green-100 py-8">
          <div className="items-center flex flex-col">
            <img
              className="w-28"
              src="https://www.starbucks.com.br/public/img/icons/starbucks-nav-logo.svg"
              alt=""
            />
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <p>Café com leite</p>
            <p>Descrição</p>
            <p>Valor</p>
          </div>
        </div>

        <div className="grid grid-cols-2 mb-2 rounded-md bg-green-100 py-8">
          <div className="flex flex-col justify-center items-center gap-2">
            <p>Café com leite</p>
            <p>Descrição</p>
            <p>Valor</p>
          </div>
          <div className="items-center flex flex-col">
            <img
              className="w-28"
              src="https://www.starbucks.com.br/public/img/icons/starbucks-nav-logo.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
