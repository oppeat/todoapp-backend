var express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mock data
var todos = [
  {
    id: '1001',
    title: 'Clear Tasks on JIRA'
  },
  {
    id: '1002',
    title: 'Learn how to use React with Redux'
  },
  {
    id: '1003',
    title: 'Daily Meetup'
  }
]

app.get('/todos', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json(todos)
})
app.get('/todos/:id', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { id } = req.params
  const result = todos.find(todo => todo.id === id)
  res.json(result)
})
app.post('/todos', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  todos.push(req.body);
  const payload = req.body
  res.json(payload)
})
app.put('/todos/:id', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { id } = req.params
  var index = todos.map(function(e) { return e.id; }).indexOf(id)
  todos[index] = req.body
  console.log(todos)

  res.json({ id })
})
app.delete('/todos/:id', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { id } = req.params
  todos = todos.filter(todo => todo.id !== id)
  console.log(todos)
  res.json({ id })
})
app.listen(9000, () => {
  console.log('Application is running on port 9000')
})