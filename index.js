const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());

app.get( '/', (req, res) => {
    res.send("Server Running Successfully");
});

const users = [
    {
        "id" : "1",
        "name" : "Abdullah",
        "email" : "abdullah@gmail.com"
    },
    {
        "id" : "2",
        "name" : "Al Mamun",
        "email" : "almamun@gmail.com"
    },
    {
        "id" : "3",
        "name" : "Al Mahmud",
        "email" : "almahmud@gmail.com"
    }
]

app.get('/users', (req, res) =>{
    res.send(users);
})

app.listen(port, () =>{
    console.log(`Server Running on Port: ${port}`);
})