import type { NextConfig } from "next";

// Projenin lokalde (npm run dev) mi yoksa canlıda (production) mı çalıştığını tespit eder.
const isDev = process.env.NODE_ENV !== "production";

// Geliştirme (dev) ortamında React HMR için 'unsafe-eval' izni verilir (kırmızı uyarıyı engeller).
// Production (canlı) ortamda ise 'unsafe-eval' OTOMATİK OLARAK TAMAMEN KALDIRILIR!
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ""} https://va.vercel-scripts.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https://flagcdn.com;
  font-src 'self' data:;
  media-src 'self' blob: data:;
  connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com;
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
  object-src 'none';
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, " ").trim();

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=(), interest-cohort=()",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Content-Security-Policy",
    value: cspHeader,
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;