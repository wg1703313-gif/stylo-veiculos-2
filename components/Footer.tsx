import { Instagram, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { store, whatsappLink } from "@/lib/store";

export default function Footer() {
  return <footer className="footer" id="contato">
    <div className="footer-main wrap">
      <div className="footer-brand"><a href="#inicio" className="brand"><span className="brand-mark">S</span><span><strong>stylo</strong><small>VEÍCULOS</small></span></a><p>Seu próximo carro começa com uma boa conversa.</p></div>
      <div className="footer-contact"><span className="footer-label">Visite a loja</span><a href={store.mapsUrl} target="_blank" rel="noreferrer"><MapPin size={17} /><span>{store.address}<small>Confira o endereço antes da visita</small></span><ArrowUpRight size={15} /></a></div>
      <div className="footer-contact"><span className="footer-label">Vamos conversar</span><a href={whatsappLink("Olá! Gostaria de conhecer o estoque da Stylo Veículos.")} target="_blank" rel="noreferrer"><MessageCircle size={17} /><span>WhatsApp<small>{store.phoneDisplay} · confirmar número</small></span><ArrowUpRight size={15} /></a>{store.instagramUrl ? <a href={store.instagramUrl} target="_blank" rel="noreferrer"><Instagram size={17} /><span>Instagram<small>{store.instagramHandle}</small></span><ArrowUpRight size={15} /></a> : <div className="contact-placeholder"><Instagram size={17} /><span>Instagram<small>{store.instagramHandle} · preencher em lib/store.ts</small></span></div>}</div>
    </div>
    <div className="footer-bottom wrap"><span>© {new Date().getFullYear()} Stylo Veículos. Todos os direitos reservados.</span><span>Estimativas sujeitas a avaliação e negociação.</span></div>
  </footer>;
}
