# Stylo Veículos

Site em Next.js (App Router), TypeScript e Tailwind CSS, com vitrine, páginas de veículos e painel Supabase Auth em `/admin`.

## Configurar

1. Instale as dependências com `npm install`.
2. Copie `.env.example` para `.env.local` e preencha a URL e a chave **anon/public** do projeto Supabase. Os nomes `SUPABASE_URL` e `SUPABASE_ANON_KEY` também são aceitos. Reinicie o servidor depois de alterar as variáveis.
3. Cole e execute [`supabase/schema.sql`](supabase/schema.sql) no SQL Editor do Supabase.
4. Em Authentication → Users, crie os usuários autorizados do painel. O login é por e-mail e senha; o cadastro público não é habilitado.
5. Confira o WhatsApp em `NEXT_PUBLIC_WHATSAPP_NUMBER` e ajuste endereço, Instagram e telefone em [`lib/store.ts`](lib/store.ts) antes de publicar.
6. Rode `npm run dev` para desenvolvimento.

As estimativas de preço são informativas e negociáveis; não existe serviço de avaliação por IA conectado. Os veículos demonstrativos aparecem apenas enquanto o Supabase não estiver configurado ou ocorrer erro de conexão; ao criar a tabela, a vitrine passa a exibir os dados reais.
