import Express  from "express";
import  cors  from "cors";
import routerTodo from "./routes/todo";

const app = Express();

app.use(Express.json());
app.use(cors());

//rotas
app.use (routerTodo)

//rota check


app.get("/api/", (req, res) => {
  res.json({ message: "API todo list"});
});

export default app;