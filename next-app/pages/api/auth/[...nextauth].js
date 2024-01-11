import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: "e4b7234adff27ebcae4c",
            clientSecret: "53287402922ea32eb1e23b230147c64939a62bdd",
            //e4b7234adff27ebcae4c
            //53287402922ea32eb1e23b230147c64939a62bdd
        }),
    ],
    secret: "qwer1234",
};
export default NextAuth(authOptions);
