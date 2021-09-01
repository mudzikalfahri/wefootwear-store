module.exports = {
  images: {
    domains: ["i.ibb.co", "ibb.co"],
  },
  env: {
    publishableKey: `${process.env.STRIPE_PUBLIC_KEY}`,
  },
};
