import { Container } from "../../components/container";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/banner.jpg";
import bannerColdBrewAndRefreshers from "../../assets/banner-cold-brew-and-refresh-morango.png";
import bannerPlantacao from "../../assets/guatemala.jpg";
import bannerTime from "../../assets/team.jpg";
import copoNaMaoImg from "../../assets/gmcoffeecompany.png";

export function Home() {
  return (
    <>
      <img
        src={bannerImg}
        alt="Banner com a identidade da GM Coffee Company"
        className="w-full max-w-[1400px] mx-auto mb-10"
      />
      <Container>
        <div className="grid grid-cols-2 mb-9 bg-gradient-to-r from-green-950 to-white rounded-l-full">
          <div className="w-64 h-64 relative ">
            <img
              src={copoNaMaoImg}
              alt="Segurando copo na mão"
              className="absolute w-64 -top-14 left-6  "
            />
          </div>

          <div className="flex justify-center items-center text-center px-4">
            <p className="text-green-950 font-semibold text-3xl">
              Desfrute da experiência de sentir os sabores dos nossos{" "}
              <span className="font-bold">cafés</span>!
            </p>
          </div>
        </div>
      </Container>

      <div className="grid grid-cols-2 max-w-[1400px] w-full mx-auto mb-10">
        <div className="flex flex-col bg-green-200/70 justify-center items-center text-center gap-8 px-6 py-8">
          <p className="text-3xl text-green-950 font-semibold">
            Uma surpresa refrescante para você
          </p>
          <p className="text-xl font-medium text-green-950">
            Conheça nossa linha de{" "}
            <span className="text-2xl font-bold">Cold Brew e Refreshers™</span>
          </p>
          <Link to="/menu">
            <button className="border border-green-950 px-4 py-1 rounded-full font-medium">
              Saiba mais
            </button>
          </Link>
        </div>

        <div>
          <img
            src={bannerColdBrewAndRefreshers}
            alt="2 copos com cafés da GM Coffee Company"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 max-w-[1400px] w-full mx-auto mb-10">
        <div>
          <img src={bannerPlantacao} alt="Plantando o café" />
        </div>

        <div className="flex flex-col bg-green-200/70 justify-center items-center text-center gap-8 px-6 py-8">
          <p className="text-3xl text-green-950 font-semibold">
            Coisas boas estão acontecendo
          </p>
          <p className="text-xl font-medium text-green-950">
            Acreditamos que podemos e devemos gerar um impacto positivo nas
            comunidades em que atuamos.{" "}
          </p>
          <Link to="/menu">
            <button className="border border-green-950 px-4 py-1 rounded-full font-medium">
              Saiba mais
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 max-w-[1400px] w-full mx-auto mb-10">
        <div className="flex flex-col bg-green-200/70 justify-center items-center text-center gap-8 px-6 py-8">
          <p className="text-3xl text-green-950 font-semibold">
            Histórias e Notícias GM
          </p>
          <p className="text-xl font-medium text-green-950">
            Fique por dentro das novidades e conheça mais sobre nossas
            iniciativas.{" "}
          </p>
          <Link to="/menu">
            <button className="border border-green-950 px-4 py-1 rounded-full font-medium">
              Saiba mais
            </button>
          </Link>
        </div>

        <div>
          <img src={bannerTime} alt="Imagem do time da GM Coffee Company" />
        </div>
      </div>
    </>
  );
}
