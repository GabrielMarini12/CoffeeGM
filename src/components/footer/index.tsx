import { Container } from "../container";
import { Link } from "react-router-dom";
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
          <Link to="https://web.whatsapp.com/" target="_blank">
            <p className="bg-black p-2 rounded-full hover:bg-black/70 hover:scale-110 transition-all cursor-pointer">
              <FaWhatsapp size={20} color="#fff" />
            </p>
          </Link>
          <Link to="https://www.facebook.com/?locale=pt_BR" target="_blank">
            <p className="bg-black p-2 rounded-full hover:bg-black/70 hover:scale-110 transition-all cursor-pointer">
              <FaFacebook size={20} color="#fff" />
            </p>
          </Link>
          <Link to="https://www.linkedin.com/" target="_blank">
            <p className="bg-black p-2 rounded-full hover:bg-black/70 hover:scale-110 transition-all cursor-pointer">
              <FaLinkedin size={20} color="#fff" />
            </p>
          </Link>
          <Link to="https://www.instagram.com/" target="_blank">
            <p className="bg-black p-2 rounded-full hover:bg-black/70 hover:scale-110 transition-all cursor-pointer">
              <FaInstagram size={20} color="#fff" />
            </p>
          </Link>
          <Link to="https://www.youtube.com/" target="_blank">
            <p className="bg-black p-2 rounded-full hover:bg-black/70 hover:scale-110 transition-all cursor-pointer">
              <FaYoutube size={20} color="#fff" />
            </p>
          </Link>
          <Link
            to="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D"
            target="_blank"
          >
            <p className="bg-black p-2 rounded-full hover:bg-black/70 hover:scale-110 transition-all cursor-pointer">
              <FaTwitter size={20} color="#fff" />
            </p>
          </Link>
        </div>

        <div className="flex justify-between w-[55%] mb-10">
          <p className="cursor-pointer hover:text-black/70">
            Política de privacidade
          </p>
          <p>|</p>
          <p className="cursor-pointer hover:text-black/70">
            Política de troca de produto
          </p>
          <p>|</p>
          <p className="cursor-pointer hover:text-black/70">Termos de uso</p>
          <p>|</p>
          <p className="cursor-pointer hover:text-black/70">
            Política de Cookies
          </p>
        </div>

        <div className="flex gap-1 text-black/40 text-base">
          <p>© 2024 Starbucks Coffee Company.</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </footer>
    </Container>
  );
}
