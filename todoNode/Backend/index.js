const http = require("http");
const fs = require("fs");
const { stringify } = require("querystring");

const PORT = 3001;
let todos;

fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    const json = data;
	console.log(data);
	const parsedData = JSON.parse(json);
	todos = parsedData;
});

function writeFile(todos) {
	fs.writeFile("todos.json", JSON.stringify(todos), "utf-8", (err, data) => {
		if (err) throw err;
	});
}

const app = http.createServer((req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Access-Control-Allow-Methods", "GET, PATCH, DELETE, OPTIONS, POST, PUT")
	res.setHeader(

		"Access-Control-Allow-Headers",
		
		"Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
		
		);

// OPTIONS 
const url = req.url.split("/");
if (req.method === "OPTIONS") {
	res.statusCode = 200;
	res.end();
	return;
}

// GET /todos - Hämta alla todos
if (req.method === "GET" && url.length === 2) {
	// Hämta data
	res.setHeader("Content-Type", "application/json");
	res.statusCode = 200;
	console.log("Alla todos har hämtats")
	res.end(JSON.stringify(todos));
}

// GET /todos/:id - Hämta en todo
if (req.method === "GET" && url.length === 3) {
	const [route, id] = req.url.split("/").filter((item) => item.length > 0);
	const todo = todos.find((todo) => todo.id === parseInt(id));
	res.setHeader("Content-Type", "application/json");
	res.statusCode = 200;
	console.log("Todo har hämtats")
	res.end(JSON.stringify(todo));
}

if (req.method === "POST" && url[1] === "todos" && url.length === 2) {
	// Skickar data
	req.on("data", (chunk) => {
		const data = JSON.parse(chunk);
		let newTodo = {
			id: Math.floor(Math.random() * 100000),
			chore: data.chore,
			completed: false,
			};
		console.log(todos);
		todos.push(newTodo);
		writeFile(todos);
		res.statusCode = 200;
		console.log("En ny todo har skapats")
		res.end();
	});
}

if (req.method === "PUT" && url[1] === "todos" && url.length === 3) {
	const reqId = parseInt(url[2]);
	const todoIndex = todos.findIndex((todo) => todo.id === reqId);
	req.on("data", (chunk) => {
		todos[todoIndex] = JSON.parse(chunk);
		console.log(todos);
		res.statusCode = 200;
		console.log("Hel todo har ändrats");
		res.end();
		writeFile(todos, null, "\t");
	});
}

// PATCH /todos/:id - Ändra en todo (partial)
if (req.method === "PATCH" && url[1] === "todos" && url.length === 3) {
	const reqId = parseInt(url[2]);
	const todoIndex = todos.findIndex((todo) => todo.id === reqId);
	req.on("data", (chunk) => {
		const data = JSON.parse(chunk);
		let todo = todos[todoIndex];
		if (data.completed) {
			todo.completed = data.completed
		}
		if (data.chore) {
			todo.chore = data.chore
		}
		console.log(todos);
		res.statusCode = 200;
		console.log("En del av en todo har ändrats");
		res.end(JSON.stringify(todo));
		writeFile(todos);
	});
}

// DELETE /todos/:id - Ta bort en todo
if (req.method === "DELETE" && url[1] === "todos" && url.length === 3) {

	const [route, id] = req.url.split("/").filter((item) => item.length > 0);
	const filteredTodos = todos.filter((todo) => todo.id !== parseInt(id));
	todos = filteredTodos;
	
	writeFile(todos);
	res.setHeader("Content-Type", "application/json");
	res.statusCode = 200;
	console.log("Requested todo has been deleted");
	res.end(JSON.stringify(todos));	
	}
});

app.listen(3001, () => {
	console.log(`Servern lyssnar på ${PORT}`);
});