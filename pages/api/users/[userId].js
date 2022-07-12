require("../../../database/init");
import TodoModel from "../../../database/TodoModel";

const handler = async (req, res) => {
  const todoId = req.query.userId;

  switch (req.method) {
    case "DELETE":
      const deleteResult = await TodoModel.deleteOne({ _id: todoId });
      res.json(deleteResult);
      break;
    case "PUT":
      const body = req.body;
      const putResult = await TodoModel.updateOne({_id:todoId},body)
      res.json(putResult);
      break;

    default:
      res.json({ error: "Method not allowed" });
      break;
  }
};

export default handler;
