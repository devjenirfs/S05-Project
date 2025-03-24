/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // 🔥 Isso permite a exportação estática
  basePath: "/S05-Project",  // 🔥 Substitua pelo nome do repositório no GitHub
  assetPrefix: "/S05-Project/",
  images: {
    unoptimized: true,  // 🚀 Desativa a otimização de imagens (necessário para GitHub Pages)
  },
};

export default nextConfig;
