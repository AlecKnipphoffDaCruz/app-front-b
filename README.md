# app-front-b

Front simples (React + Vite) servido por nginx. Faz parte do estudo de Kubernetes;
os manifests de deploy ficam no repo [platform-gitops](https://github.com/AlecKnipphoffDaCruz/platform-gitops).

```bash
npm install && npm run dev                          # rodar local
docker build -t app-front-b . && docker run -p 8080:8080 app-front-b   # testar a imagem
```

O CI (`.github/workflows/ci.yaml`) publica a imagem no GHCR e atualiza a tag no platform-gitops.
Precisa do secret `GITOPS_TOKEN` (token com permissão de escrita no repo platform-gitops).
