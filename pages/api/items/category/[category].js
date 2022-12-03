import data from "../../../../app/data.json";

export default async (req, res) => {
  const { category } = req.query;

  const item = data.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  res.status(200).json(JSON.stringify(item));
};
