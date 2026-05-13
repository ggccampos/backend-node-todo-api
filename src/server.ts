import app from "./app";

const PORT = 3000;

app.listen(PORT, () => { 
  console.log(`Server is runnnig on http://localhost:${PORT}/api/todos`)
})