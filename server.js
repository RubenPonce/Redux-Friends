const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let nextId = 7;

let employees = [
  {
    id: 1,
    name: 'Ben',
    age: 30,
    email: 'ben@lambdaschool.com'
  },
  {
    id: 2,
    name: 'Austen',
    age: 45,
    email: 'austen@lambdaschool.com'
  },
  {
    id: 3,
    name: 'Ryan',
    age: 15,
    email: 'ryan@lambdaschool.com'
  },
  {
    id: 4,
    name: 'Dustin',
    age: 25,
    email: 'D-munny@lambdaschool.com'
  },
  {
    id: 5,
    name: 'Sean',
    age: 35,
    email: 'sean@lambdaschool.com'
  },
  {
    id: 6,
    name: 'Michelle',
    age: 67,
    email: 'michelle@gmail.com'
  }
];

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  // if (authorization === token) {
    next();
  // }
  //  else {
  //   res.status(403).json({ error: 'User be logged in to do that.' });
  // }
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'a' && password === 'b') {
    req.isLoggingIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: 'Username or Password incorrect. Please see Readme' });
  }
});

app.get('/api/employees', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(employees);
  }, 1000);
});

app.get('/api/employees/:id', authenticator, (req, res) => {
  const employee = employees.find(f => f.id == req.params.id);

  if (employee) {
    res.status(200).json(employee);
  } else {
    res.status(404).send({ msg: 'employee not found' });
  }
});

app.post('/api/employees', authenticator, (req, res) => {
  const employee = { id: getNextId(), ...req.body };

  employees = [...employees, employee];

  res.send(employees);
});

app.put('/api/employees/:id', authenticator, (req, res) => {
  const { id } = req.params;

  const employeeIndex = employees.findIndex(f => f.id == id);

  if (employeeIndex > -1) {
    const employee = { ...employees[employeeIndex], ...req.body };

    employees = [
      ...employees.slice(0, employeeIndex),
      employee,
      ...employees.slice(employeeIndex + 1)
    ];
    res.send(employees);
  } else {
    res.status(404).send({ msg: 'employee not found' });
  }
});

app.delete('/api/employees/:id', authenticator, (req, res) => {
  const { id } = req.params;

  employees = employees.filter(f => f.id !== Number(id));

  res.send(employees);
});

function getNextId() {
  return nextId + 1;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
