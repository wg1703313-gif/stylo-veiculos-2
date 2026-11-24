export const store = {
  name: "Stylo Veículos",
  phoneDisplay: "(96) 98418-6541",
  // Número visto na arte da loja; confira antes de publicar.
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5596984186541",
  address: "Rua Professor Tostes, 2858 — Buritizal, Macapá — AP",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Stylo+Ve%C3%ADculos+Rua+Professor+Tostes+2858+Macap%C3%A1+AP",
  instagramUrl: "",
  instagramHandle: "@seu_instagram_aqui",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${store.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}
