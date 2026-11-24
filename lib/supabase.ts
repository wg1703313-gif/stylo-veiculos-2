import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

let client: SupabaseClient | null = null;
export function getSupabase() {
  if (!url || !key) return null;
  if (!client) client = createClient(url, key, { auth: { persistSession: true, autoRefreshToken: true } });
  return client;
}

export function supabaseSetupMessage() {
  return "A conexão com o estoque ainda não foi configurada. Adicione a URL e a chave anon do Supabase em .env.local e reinicie o site.";
}
