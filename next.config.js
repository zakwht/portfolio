module.exports = {
  assetPrefix: "./",
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://zakwht.github.io/repos/",
        permanent: true
      }
    ];
  },
  async rewrites() {
    return [
      {
        source: "/resume.pdf",
        destination: "/api/resume"
      }
    ];
  }
};
