var express = require('express')
const Joi = require('joi'); //used for validation

var port = 3000

const app = express();
app.use(express.json());

var customers =
                [
                    { name: 'vraj', id: 1 },
                    { name: 'vishal', id: 2 },
                    { name: 'karan', id: 3 }
                ]

app.get('/', (req, res) => {
    res.send('Wellcome home')
})

// 1.Create a Restful API, which will return Customer list in JSON format.
app.get('/customers', (req, res) => {
    res.send(customers)
})

// 2.Create a Restful API which will search a particular record from the customer list.
app.get('/customers/:id', (req, res) => {
    const cu = customers.find(c => c.id === parseInt(req.params.id));
    res.send(cu)
})

// 3. Create a Restful API which will insert a new customer object in the customer list.
app.post('/customers/', (req, res) => {
    customers.push(req.body)
    res.send(customers)
})


// 4. Create a Restful API which update a name of existing customer whose customer ID is 1
app.put('/customers/:id', (req, res) => {
    const cu = customers.find(c => c.id === parseInt(req.params.id));
    console.log(req.body.name)
    cu.name = req.body.name;
    res.send(customers)
})

// 5. Create a Restful API which will delete a record from the customer list.
app.delete('/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if (!customer) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>');
    const index = customers.indexOf(customer);
    customers.splice(index, 1);
    res.send(customers);
})

app.listen(port, () => console.log(`Listening on port ${port}..`));
