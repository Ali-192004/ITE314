const express = require('express');
const app = express();

const myData = {
    first_name: 'Aldrin',
    last_name: 'Amantillo',
    age: 20,
    school_email: 'alra.amantillo.swu@phinmaed.com',
};

app.get('/', (req, res) => {
    res.send("Welcome to my server, visitor! To know more  please try adding any of these in the url: ('/firstname', '/lastname', '/age', '/schoolemail')");
});

app.get('/firstname', (req, res) => {
    res.send(myData.first_name.toUpperCase());
});

app.get('/lastname', (req, res) => {
    res.send(myData.last_name.toUpperCase());
});

app.get('/age', (req, res) => {
    res.send(myData.age.toString());
});

app.get('/schoolemail', (req, res) => {
    res.send(myData.school_email);
});

app.get('/mydata', (req, res) => {
    res.send(myData)
    
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
