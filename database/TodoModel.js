import { model, models, Schema } from "mongoose";

const TodoSchema = Schema({
  content: { type: String, required: true }
})

const TodoModel = models.Todo || model("Todo", TodoSchema)
export default TodoModel