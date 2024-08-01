import { Container } from "../container";
import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

export function Footer() {
  return (
    <Container>
      <div className="w-full border border-black/10 mb-12"></div>
      <footer className="h-28 w-full mb-20">
        <div className="flex mb-10 w-[25%] justify-between">
          <p className="bg-black p-2 rounded-full hover:bg-black/70 hover:scale-110 transition-all cursor-pointer">
            <FaWhatsapp size={20} color="#fff" />
          </p>
          <p className="bg-black p-2 rounded-full hover:bg-black/70 hover:scale-110 transition-all cursor-pointer">
            <FaFacebook size={20} color="#fff" />
          </p>
          <p className="bg-black p-2 rounded-full hover:bg-black/70 hover:scale-110 transition-all cursor-pointer">
            <FaLinkedin size={20} color="#fff" />
          </p>
          <p className="bg-black p-2 rounded-full hover:bg-black/70 hover:scale-110 transition-all cursor-pointer">
            <FaInstagram size={20} color="#fff" />
          </p>
          <p className="bg-black p-2 rounded-full hover:bg-black/70 hover:scale-110 transition-all cursor-pointer">
            <FaYoutube size={20} color="#fff" />
          </p>
          <p className="bg-black p-2 rounded-full hover:bg-black/70 hover:scale-110 transition-all cursor-pointer">
            <FaTwitter size={20} color="#fff" />
          </p>
        </div>

        <div className="flex justify-between w-[55%] mb-10">
          <p className="cursor-pointer">Política de privacidade</p>
          <p>|</p>
          <p className="cursor-pointer">Política de troca de produto</p>
          <p>|</p>
          <p className="cursor-pointer">Termos de uso</p>
          <p>|</p>
          <p className="cursor-pointer">Política de Cookies</p>
        </div>

        <div className="flex gap-1 text-black/40 text-base">
          <p>© 2024 Starbucks Coffee Company.</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </footer>
    </Container>
  );
}
