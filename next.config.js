/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: () => [ADMIN_REWRITE],
  sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	}
}

const ADMIN_REWRITE = {
  source: "/admin/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/admin/:path*"
      : "/admin/index.html",
};

module.exports = nextConfig;

