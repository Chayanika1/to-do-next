require("../../../database/init");
import TodoModel from "../../../database/TodoModel";

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      const todos = await TodoModel.find({});
      res.json(todos);
      break;
    case "POST":
      const body = req.body;
      const result = await TodoModel.create(body);
      res.json(result);
      break;

    default:
      res.json({ error: "Method not allowed" });
      break;
  }
};
export default handler ;