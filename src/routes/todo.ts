import {Router} from "express";
import { TodoController } from "../controller/todo";

const routerTodo = Router();

const todoController = new TodoController()

routerTodo.get("/api/todos", (req, res) => todoController.getAllTodos(req, res));
routerTodo.post("/api/todos", (req, res) => todoController.createTodo(req, res));
routerTodo.put("/api/todos/:id", (req, res) => todoController.updateTodo(req, res));
routerTodo.delete("/api/todos/:id", (req, res) => todoController.deleteTodo(req, res));
routerTodo.get("/api/todos/:id", (req, res) => todoController.getTodoById(req, res));



export default routerTodo;