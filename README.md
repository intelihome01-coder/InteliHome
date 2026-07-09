# InteliHome - Soluções de Automação, Elétrica & Segurança

Este projeto foi otimizado e estruturado para funcionar perfeitamente em produção no **Render**, garantindo que as imagens, logos e estilos carreguem corretamente e de forma consistente com o ambiente de desenvolvimento do AI Studio.

---

## 🚀 Como subir para o GitHub

Para enviar o projeto atualizado ao seu repositório no GitHub:

1. **Pelo AI Studio**:
   - Vá no menu de configurações (ícone de engrenagem) ou no menu de exportação.
   - Selecione a opção **Export to GitHub** ou **Download ZIP**.
   - Se exportar via ZIP, extraia os arquivos e faça o commit/push para o seu repositório do GitHub.

2. **Certifique-se de incluir todos os arquivos**:
   - A pasta `src/assets/` com todas as imagens locais (`logo-intelihome.png`, `automacao-residencial.jpg`, etc.).
   - A pasta `public/` contendo a cópia do logo de backup (`logo-intelihome.png`).
   - O arquivo `vite-env.d.ts` e todas as configurações do Vite.

---

## 🛠️ Configurações Recomendadas no Render

Ao conectar o seu repositório do GitHub ao **Render**, configure o serviço estático (**Static Site**) com as seguintes informações:

- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`
- **Environment**: `Node` (Padrão para projetos Node.js/Vite)

---

## 📸 Estrutura de Imagens e Correções Efetuadas

Todas as imagens e caminhos foram corrigidos definitivamente para evitar que fiquem quebradas em produção:

1. **Logo Oficial (`Logo.tsx`)**:
   - O componente foi otimizado para carregar a imagem do logo importada via Vite (`src/assets/logo-intelihome.png`).
   - Se por algum motivo o navegador falhar em ler o asset compilado, foi implementado um **fallback inteligente automático** que tentará ler diretamente `/logo-intelihome.png` da raiz do servidor (pasta `public`).
   - Caso ambas falhem, um logo premium dinâmico em vetor/texto estilizado será renderizado, impedindo que o site mostre uma imagem quebrada.

2. **Seção "Quem Somos" (`About.tsx`)**:
   - Conforme solicitado, removemos as legendas sobrepostas dos dois cards e substituímos as imagens por links de hospedagem externa de alta confiabilidade:
     - **CFTV & Monitoramento**: `https://i.postimg.cc/Z4LL1WqT/Chat-GPT-Image-8-07-2026-20-50-35.png`
     - **Comando Elétrico**: `https://i.postimg.cc/dwn85gW1/Chat-GPT-Image-8-07-2026-20-51-51.png`

3. **Background do Hero (`Hero.tsx`)**:
   - A imagem de fundo da automação residencial é importada e processada nativamente pelo Vite usando `src/assets/automacao-residencial.jpg`, garantindo compatibilidade total na compilação do Render.

---

## ⚡ Scripts Disponíveis

No arquivo `package.json`, estão configurados os seguintes scripts:

- `npm run dev`: Inicia o servidor de desenvolvimento local.
- `npm run build`: Compila a aplicação para produção (arquivos otimizados gerados na pasta `dist`).
- `npm run lint`: Executa a verificação estática de tipos do TypeScript para assegurar que não há falhas de código.
