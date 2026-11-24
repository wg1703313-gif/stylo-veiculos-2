import { getSupabase } from "@/lib/supabase";

export type Vehicle = {
  id: string;
  titulo: string;
  marca: string;
  modelo: string;
  ano: number;
  quilometragem: number | null;
  preco_estimado_ia: number | null;
  status: "Disponível" | "Vendido";
  imagem_url: string | null;
  descricao: string | null;
  combustivel?: string | null;
  cambio?: string | null;
  versao?: string | null;
  categoria?: string | null;
  carroceria?: string | null;
  criado_em?: string;
};

export const sampleVehicles: Vehicle[] = [
  { id: "demo-1", titulo: "Toyota Corolla XEi 2.0", marca: "Toyota", modelo: "Corolla XEi 2.0", ano: 2022, quilometragem: 38500, preco_estimado_ia: 139900, status: "Disponível", imagem_url: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1000&q=85", descricao: "Sedã confortável, muito bem cuidado, com central multimídia e câmera de ré." },
  { id: "demo-2", titulo: "Jeep Compass Longitude", marca: "Jeep", modelo: "Compass Longitude", ano: 2021, quilometragem: 46200, preco_estimado_ia: 128900, status: "Disponível", imagem_url: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=85", descricao: "SUV espaçoso com excelente pacote de conforto e tecnologia." },
  { id: "demo-3", titulo: "Honda Civic Touring", marca: "Honda", modelo: "Civic Touring", ano: 2020, quilometragem: 51200, preco_estimado_ia: 132900, status: "Disponível", imagem_url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=85", descricao: "Versão Touring com motor turbo, acabamento premium e teto solar." },
  { id: "demo-4", titulo: "Hyundai Creta Platinum", marca: "Hyundai", modelo: "Creta Platinum", ano: 2023, quilometragem: 22400, preco_estimado_ia: 144900, status: "Disponível", imagem_url: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=85", descricao: "SUV moderno, econômico e pronto para a família." },
];

export async function getVehicles(): Promise<{ vehicles: Vehicle[]; connected: boolean; error?: string }> {
  const supabase = getSupabase();
  if (!supabase) return { vehicles: sampleVehicles, connected: false };
  const { data, error } = await supabase.from("veiculos").select("*").eq("status", "Disponível").order("criado_em", { ascending: false });
  if (error) return { vehicles: sampleVehicles, connected: false, error: "Não foi possível carregar o estoque agora. Exibimos uma seleção de demonstração; tente novamente em instantes." };
  return { vehicles: data as Vehicle[], connected: true };
}
