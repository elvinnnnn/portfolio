/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  output: "export",
  trailingSlash: true,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

export default nextConfig;
