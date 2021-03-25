require("./db/connection");
const { Person } = require("./models/Person");
const { Task } = require("./models/Task");

const app = async () => {
    try {
        const person = new Person({
            name: "Bex",
            email: "bex@email.com",
            age: 29,
            likesPizza: true,
        });
        await person.save();

        const task = new Task({
            task: "Order pizza",
            complete: false
        });
        await task.save();
    } catch (err) {
        console.log(err);
    }
}

app();