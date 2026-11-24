-- Execute no SQL Editor do Supabase. A chave service_role nunca deve ir para o navegador.
create extension if not exists pgcrypto;

create table if not exists public.veiculos (
  id uuid primary key default gen_random_uuid(),
  titulo text not null,
  marca text not null,
  modelo text not null,
  ano integer not null check (ano between 1950 and 2099),
  quilometragem integer check (quilometragem is null or quilometragem >= 0),
  preco_estimado_ia numeric(12,2) check (preco_estimado_ia is null or preco_estimado_ia >= 0),
  status text not null default 'Disponível' check (status in ('Disponível', 'Vendido')),
  imagem_url text,
  descricao text,
  criado_em timestamptz not null default now()
);

create index if not exists veiculos_status_criado_em_idx on public.veiculos (status, criado_em desc);
alter table public.veiculos enable row level security;
grant select on public.veiculos to anon, authenticated;
grant insert, update, delete on public.veiculos to authenticated;

-- Habilita atualizações do estoque em tempo real na vitrine.
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'veiculos'
  ) then
    alter publication supabase_realtime add table public.veiculos;
  end if;
end $$;

drop policy if exists "Leitura pública de veículos disponíveis" on public.veiculos;
drop policy if exists "Leitura pública de veículos" on public.veiculos;
create policy "Leitura pública de veículos" on public.veiculos
  for select to anon, authenticated using (true);

drop policy if exists "Gestão por usuários autenticados" on public.veiculos;
create policy "Gestão por usuários autenticados" on public.veiculos
  for all to authenticated using ((select auth.uid()) is not null) with check ((select auth.uid()) is not null);

-- Crie os usuários autorizados pelo Dashboard: Authentication > Users > Add user.
-- Nenhum cadastro público é habilitado para o painel administrativo.

