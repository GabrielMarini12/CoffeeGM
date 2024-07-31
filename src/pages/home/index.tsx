import { Container } from "../../components/container";
import bannerImg from "../../assets/banner.jpg";
import bannerColdBrewAndRefreshers from "../../assets/banner-cold-brew-and-refresh-morango.png";
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
        <div className="grid grid-cols-2 mb-10 py-8 ">
          <div className="bg-green-950/90 rounded-full w-64 h-64 relative mx-auto shadow-md shadow-black">
            <img
              src={copoNaMaoImg}
              alt="Segurando copo na mão"
              className="absolute w-72 -top-14 -right-2"
            />
          </div>

          <div className="flex justify-center items-center text-center px-4">
            <p className="text-green-950 font-semibold text-3xl">
              Desfrute da experiência de sentir os sabores dos nossos cafés!
            </p>
          </div>
        </div>
      </Container>

      <div className="grid grid-cols-2 max-w-[1400px] w-full mx-auto mb-10">
        <div className="flex flex-col bg-green-200/70 justify-center items-center gap-8">
          <p className="text-3xl text-green-950 font-semibold">
            Uma surpresa refrescante para você
          </p>
          <p className="text-xl font-medium text-green-950">
            Conheça nossa linha de{" "}
            <span className="text-2xl font-bold">Cold Brew e Refreshers™</span>
          </p>
          <button className="border border-green-950 px-4 py-1 rounded-full font-medium">
            Saiba mais
          </button>
        </div>

        <div>
          <img
            src={bannerColdBrewAndRefreshers}
            alt="2 copos com cafés da GM Coffee Company"
          />
        </div>
      </div>
    </>
  );
}
