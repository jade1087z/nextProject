import { MongoClient } from "mongodb";
//e4b7234adff27ebcae4c
//53287402922ea32eb1e23b230147c64939a62bdd
const url =
    "mongodb+srv://imdoob:zz3125@cluster0.ic31wpl.mongodb.net/forum?retryWrites=true&w=majority";

let connectDB;

if (process.env.NODE_ENV === "development") {
    if (!global._mongo) {
        global._mongo = new MongoClient(url).connect();
    }
    connectDB = global._mongo;
} else {
    connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
