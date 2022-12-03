import data from "../../../app/data.json";

export default async (req, res) => {
  const { id } = req.query;

  const item = data.find((item) => item.slug === id);

  res.status(200).json(JSON.stringify(item));
};
