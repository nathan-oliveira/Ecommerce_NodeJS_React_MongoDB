module.exports = {
  secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "AHSA0923UHASDJUIJADAHFA9239023QAS3",
  api: process.env.NODE_ENV === "production" ? "https://api.loja-teste.ampliee.com": "http://localhost:3000",
  loja: process.NODE_ENV === "production" ? "https://loja-teste.ampliee.com": "http://localhost:8000",
};