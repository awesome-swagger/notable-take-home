const express = require('express');
const cors = require('cors');
const app = express();
 
const FakeDB = require('fake-db');

const db = new FakeDB([
  {
    firstName: 'Hibbert',
    lastName: 'Julius',
    email: 'hibbert@notablehealth.com',
    appoointments: [
      { name: 'Sterling Archer', time: '8:00AM', kind: 'New Patient' },
      { name: 'Cyril Figis', time: '8:00AM', kind: 'Follow-up' },
      { name: 'Lana Kane', time: '9:30AM', kind: 'New Patient' },
      { name: 'Ray Gilette', time: '9:00AM', kind: 'Follow-up' },
      { name: 'Pam Poovery', time: '8:00AM', kind: 'New Patient' },
    ]
  },
  {
    firstName: 'Krieger',
    lastName: 'Algernop',
    email: 'kreger@notablehealth.com',
    appoointments: [
      { name: 'Sterling Archer', time: '8:00AM', kind: 'New Patient' },
      { name: 'Cyril Figis', time: '8:00AM', kind: 'Follow-up' },
      { name: 'Ray Gilette', time: '9:00AM', kind: 'Follow-up' },
      { name: 'Lana Kane', time: '9:30AM', kind: 'New Patient' },
      { name: 'Pam Poovery', time: '8:00AM', kind: 'New Patient' },
    ]
  },
  {
    firstName: 'Riviery',
    lastName: 'Nick',
    email: 'riviery@notablehealth.com',
    appoointments: [
      { name: 'Cyril Figis', time: '8:00AM', kind: 'Follow-up' },
      { name: 'Ray Gilette', time: '9:00AM', kind: 'Follow-up' },
      { name: 'Sterling Archer', time: '8:00AM', kind: 'New Patient' },
      { name: 'Lana Kane', time: '9:30AM', kind: 'New Patient' },
      { name: 'Pam Poovery', time: '8:00AM', kind: 'New Patient' },
    ]
  },
]);

app.get('/api/physicians', cors(), function(req, res) {
  db.getCollection().then(function(collection) {
    res.json(collection.map(col => ({
      id: col.id,
      firstName: col.firstName,
      lastName: col.lastName,
      email: col.email
    })));
  });
});

app.get('/api/appointments/:id', cors(), function(req, res) {
  const userId  = req.params.id;
  db.getItem(userId).then(function(item) {
    res.json(item.appoointments);
  });
});

app.listen(3001, function () {
  console.log('CORS-enabled web server listening on port 3001')
});
