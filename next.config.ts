import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['assets.tcgdex.net'], // Add the external image domain here
  },
  sassOptions: {
    additionalData: `@import "src/app/styles/variables.scss";`,
  },
};

export default nextConfig;
