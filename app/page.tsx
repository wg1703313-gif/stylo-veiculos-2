import Link from "next/link";
import { ArrowDown, ArrowRight, BadgeCheck, ShieldCheck, Sparkles, Phone } from "lucide-react";
import VehicleCard from "@/components/VehicleCard";
import InventoryRealtime from "@/components/InventoryRealtime";
import Footer from "@/components/Footer";
import { getVehicles } from "@/lib/vehicles";
import { store, whatsappLink } from "@/lib/store";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { vehicles, connected, error } = await getVehicles();
  return <main id="inicio"><InventoryRealtime />
    <div className="announcement"><span className="announcement-dot" /> A chave do seu próximo carro pode estar aqui <a href="#estoque">Conheça o estoque <ArrowRight size={13} /></a></div>
    <header className="topbar wrap"><Link href="/" className="brand"><span className="brand-mark">S</span><span><strong>stylo</strong><small>VEÍCULOS</small></span></Link><nav><a href="#estoque">Estoque</a><a href="#sobre">Sobre nós</a><a href="#contato">Contato</a></nav><a className="header-cta" href={whatsappLink("Olá! Vim pelo site da Stylo Veículos e gostaria de conversar.")} target="_blank" rel="noreferrer"><Phone size={15} /> Fale com a loja</a></header>
    <section className="hero wrap">
      <div className="hero-copy"><span className="eyebrow"><span /> MACAPÁ · AMAPÁ</span><h1>O próximo capítulo<br />da sua história <em>começa aqui.</em></h1><p>Encontre o carro que combina com o seu caminho. Uma seleção especial, atendimento de verdade e negociação sem complicação.</p><div className="hero-actions"><a href="#estoque" className="button-primary">Encontrar meu próximo carro <ArrowRight size={17} /></a><a href={whatsappLink("Olá! Quero ajuda para escolher meu próximo carro.")} target="_blank" rel="noreferrer" className="button-quiet">Converse com a gente</a></div><div className="hero-proof"><div className="proof-avatars"><span>S</span><span>♡</span><span>✓</span></div><span><strong>Uma loja feita para você.</strong><small>Da primeira conversa à chave na mão.</small></span><BadgeCheck size={18} className="proof-check" /></div></div>
      <div className="hero-visual"><div className="hero-image"><img src="/stylos-veiculos.jfif" alt="Fachada da Stylo Veículos em Macapá" /><div className="hero-image-shade" /></div><div className="hero-float"><span className="float-icon"><Sparkles size={17} /></span><span><strong>Escolhas com mais confiança</strong><small>Atendimento próximo, do seu jeito</small></span></div><div className="hero-index"><span>01</span><i /> 04</div></div>
      <a href="#estoque" className="scroll-cue"><ArrowDown size={14} /> ROLE PARA DESCOBRIR</a>
    </section>
    <section id="estoque" className="inventory-section"><div className="wrap"><div className="section-head"><div><span className="eyebrow"><span /> ESTOQUE SELECIONADO</span><h2>Um carro esperando<br />por <em>novas histórias.</em></h2></div><p>Cada escolha é especial. Explore nossos veículos e fale diretamente com a loja para encontrar a melhor condição para você.</p></div>
      {!connected && <div className="connection-note"><span><ShieldCheck size={17} /></span><p>{error || "Estoque de demonstração: configure o Supabase para exibir os veículos cadastrados pela loja."}</p><Link href="/admin">Acessar painel</Link></div>}
      <div className="vehicle-grid">{vehicles.length ? vehicles.map((vehicle, i) => <VehicleCard key={vehicle.id} vehicle={vehicle} index={i} />) : <div className="empty-inventory"><span>♡</span><h3>Tem novidade chegando.</h3><p>Nosso estoque está sendo atualizado. Chame a gente e ajudamos você a encontrar o carro ideal.</p><a href={whatsappLink("Olá! Gostaria de saber quais carros estão disponíveis na Stylo Veículos.")} target="_blank" rel="noreferrer" className="button-primary">Perguntar no WhatsApp <ArrowRight size={16} /></a></div>}</div>
      <div className="inventory-bottom"><span>Encontrou seu próximo carro?</span><a href={whatsappLink("Olá! Quero conversar sobre os veículos da Stylo Veículos.")} target="_blank" rel="noreferrer">Conte para a gente <ArrowRight size={15} /></a></div>
    </div></section>
    <section id="sobre" className="experience-section"><div className="wrap experience"><div className="experience-image"><img src="/stylos-veiculos.jfif" alt="Stylo Veículos: uma loja perto de você" /><div className="experience-stamp"><strong>Seu próximo<br />carro está na<br /><em>Stylo.</em></strong><span>MACAPÁ · AP</span></div></div><div className="experience-copy"><span className="eyebrow"><span /> MAIS QUE UMA LOJA</span><h2>Comprar bem começa<br />com <em>se sentir bem.</em></h2><p>Acreditamos que escolher um carro deve ser uma experiência leve, segura e do seu jeito. Aqui você encontra pessoas prontas para ouvir, orientar e negociar com transparência.</p><div className="value-list"><div><span>01</span><p><strong>Atendimento próximo</strong><small>Uma conversa honesta, sem pressa e sem pressão.</small></p></div><div><span>02</span><p><strong>Boas escolhas</strong><small>Veículos selecionados para você dirigir com confiança.</small></p></div><div><span>03</span><p><strong>Negociação aberta</strong><small>Converse com a loja e encontre a melhor condição.</small></p></div></div><a className="text-link" href={whatsappLink("Olá! Quero conhecer melhor a Stylo Veículos.")} target="_blank" rel="noreferrer">Venha conversar com a gente <ArrowRight size={16} /></a></div></div></section>
    <section className="closing-cta"><div className="wrap closing-content"><div><span className="eyebrow"><span /> A PRÓXIMA HISTÓRIA É SUA</span><h2>Bora encontrar<br />o carro <em>certo?</em></h2></div><a href={whatsappLink("Olá! Quero encontrar meu próximo carro com a Stylo Veículos.")} target="_blank" rel="noreferrer" className="button-primary">Chamar no WhatsApp <ArrowRight size={17} /></a><span className="closing-decoration">stylo</span></div></section>
    <Footer />
  </main>;
}
