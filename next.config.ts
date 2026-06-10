import type { NextConfig } from "next";

// Substitua pelo nome EXATO do seu repositório no GitHub
const repoName = 'mauricio-portfolio'; 

// Só aplica o prefixo se estiver no ambiente de produção do GitHub Actions
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Define o caminho base para os links internos e ficheiros estáticos
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
};

export default nextConfig;