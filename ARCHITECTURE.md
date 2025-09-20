src/
 ├─ app/                          # Rotas controladas pelo Next
 │   ├─ layout.tsx                # Layout global (providers globais)
 │   ├─ page.tsx                  # Página inicial
 │   │
 │   ├─ (auth)/                   # Agrupamento de rotas de autenticação
 │   │   └─ login/
 │   │       ├─ page.tsx          # Rota /login
 │   │       └─ LoginForm.tsx     # Componente específico dessa rota
 │   │
 │   ├─ (dashboard)/              # Agrupamento de rotas internas
 │   │   ├─ layout.tsx            # Layout do dashboard (menu lateral, header, etc.)
 │   │   ├─ page.tsx              # Página inicial do dashboard
 │   │   └─ users/
 │   │       ├─ page.tsx          # Rota /dashboard/users
 │   │       └─ UsersTable.tsx    # Componente específico dessa rota
 │   │
 │   └─ api/                      # Rotas de API internas (Next API routes, se usar)
 │
 ├─ features/                     # Lógica, hooks e serviços organizados por domínio
 │   ├─ auth/
 │   │   ├─ hooks/
 │   │   │   └─ useLogin.ts
 │   │   ├─ services/
 │   │   │   └─ authService.ts
 │   │   └─ types.ts
 │   ├─ users/
 │   │   ├─ hooks/
 │   │   ├─ services/
 │   │   └─ types.ts
 │   └─ sports/
 │       ├─ hooks/
 │       ├─ services/
 │       └─ types.ts
 │
 ├─ shared/                       # Recursos globais/reutilizáveis
 │   ├─ components/               # Botões, inputs, layouts genéricos
 │   ├─ hooks/                    # useDebounce, useAuth, etc.
 │   ├─ utils/                    # Funções utilitárias
 │   ├─ constants/                # Constantes globais
 │   └─ types/                    # Tipos compartilhados
 │
 ├─ providers/                    # Providers globais
 │   ├─ ThemeProvider.tsx
 │   └─ AntdRegistry.tsx
 │
 ├─ styles/                       # Estilos globais
 │   └─ globals.css
 │
 └─ lib/                          # Configurações de libs externas
     ├─ axios.ts                  # Configuração do Axios
     └─ prisma.ts                 # Configuração do Prisma (se usar)
