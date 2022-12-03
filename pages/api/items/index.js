import data from "../../../app/data.json";

export default async (req, res) => {
  res.status(200).json(JSON.stringify(data));
};
