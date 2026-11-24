"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Gauge, CalendarDays, Sparkles, CarFront, X, Fuel, Settings2, Tag } from "lucide-react";
import type { Vehicle } from "@/lib/vehicles";

const money = (value: number | null) => value == null ? "Consulte" : value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
const km = (value: number | null) => value == null ? "Consulte" : `${value.toLocaleString("pt-BR")} km`;
const valueOrUnknown = (value?: string | null) => value?.trim() || "Não informado";

export default function VehicleCard({ vehicle, index }: { vehicle: Vehicle; index: number }) {
  const [open, setOpen] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("modal-open");
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.classList.remove("modal-open"); };
  }, [open]);

  return <>
    <button type="button" className="vehicle-card" style={{ animationDelay: `${index * 90}ms` }} onClick={() => setOpen(true)} aria-label={`Ver detalhes de ${vehicle.titulo}`}>
      <div className="vehicle-photo">
        {vehicle.imagem_url && !imageFailed ? <img src={vehicle.imagem_url} alt={vehicle.titulo} loading="lazy" onError={() => setImageFailed(true)} /> : <div className="photo-empty"><CarFront size={46} /><span>Foto indisponível</span></div>}
        <span className="photo-tag"><span /> {vehicle.status}</span><span className="photo-arrow"><ArrowUpRight size={19} /></span>
      </div>
      <div className="vehicle-content"><p className="vehicle-make">{vehicle.marca}</p><h3>{vehicle.titulo}</h3>
        <div className="vehicle-meta"><span><CalendarDays size={14} /> {vehicle.ano}</span><span><Gauge size={14} /> {km(vehicle.quilometragem)}</span></div>
        <div className="vehicle-price"><div><small>Estimativa inicial</small><strong>{money(vehicle.preco_estimado_ia)}</strong></div><span className="price-note"><Sparkles size={13} /> Negociável</span></div>
      </div>
    </button>
    {open && <div className="vehicle-modal-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) setOpen(false); }}>
      <section className="vehicle-modal" role="dialog" aria-modal="true" aria-labelledby={`vehicle-title-${vehicle.id}`}>
        <button type="button" className="vehicle-modal-close" aria-label="Fechar detalhes" onClick={() => setOpen(false)}><X size={21} /></button>
        <div className="vehicle-modal-photo">{vehicle.imagem_url && !imageFailed ? <img src={vehicle.imagem_url} alt={vehicle.titulo} onError={() => setImageFailed(true)} /> : <div className="photo-empty"><CarFront size={58} /><span>Foto indisponível</span></div>}</div>
        <div className="vehicle-modal-content"><span className="eyebrow"><span /> {vehicle.marca} · {vehicle.ano}</span><h2 id={`vehicle-title-${vehicle.id}`}>{vehicle.titulo}</h2>
          <p className="vehicle-modal-price">{money(vehicle.preco_estimado_ia)}</p>
          <div className="vehicle-specs">
            <div><Gauge /><span>Quilometragem<strong>{km(vehicle.quilometragem)}</strong></span></div>
            <div><Fuel /><span>Combustível<strong>{valueOrUnknown(vehicle.combustivel)}</strong></span></div>
            <div><Settings2 /><span>Câmbio<strong>{valueOrUnknown(vehicle.cambio)}</strong></span></div>
            <div><Tag /><span>Versão<strong>{valueOrUnknown(vehicle.versao)}</strong></span></div>
            <div><CarFront /><span>Modelo<strong>{vehicle.modelo || "Não informado"}</strong></span></div>
            <div><CarFront /><span>Categoria / carroceria<strong>{valueOrUnknown(vehicle.categoria || vehicle.carroceria)}</strong></span></div>
          </div>
          {vehicle.descricao && <p className="vehicle-modal-description">{vehicle.descricao}</p>}
        </div>
      </section>
    </div>}
  </>;
}
