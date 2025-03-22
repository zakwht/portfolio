module.exports = {
  assetPrefix: "./",
  async rewrites() {
    return [
      {
        source: "/resume.pdf",
        destination: "/api/resume"
      }
    ];
  }
};
