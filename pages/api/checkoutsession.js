const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  const transformedItems = items.map((item) => ({
    description: `${item.name} - ${item.selectedSizeProp}`,
    quantity: item.quantity,
    price_data: {
      currency: "sgd",
      unit_amount: Math.round((item.price / 10000) * 100),
      product_data: {
        name: item.name,
        images: [item.prop[0].image[0]],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: ["shr_1JUuWyLGtksRU8sW7GevYwRT"],
    shipping_address_collection: {
      allowed_countries: ["SG", "MY"],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/basket`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.prop[0].image[0])),
    },
  });

  res.status(200).json({ id: session.id });
};
