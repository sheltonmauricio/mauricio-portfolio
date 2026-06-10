import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Força o Next.js a gerar HTML/CSS/JS estáticos na pasta /out
  output: 'export',
  
  // Desativa a otimização de imagem nativa que exige um servidor Node.js.
  // Como o GitHub Pages é estático, usaremos imagens não otimizadas ou tratadas manualmente.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;