import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: "e4b7234adff27ebcae4c",
            clientSecret: "53287402922ea32eb1e23b230147c64939a62bdd",
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" },
            },
            // 로그인 요청시 실행 -> 아이디 / 비밀번호 비교
            async authorize(credentials) {
                let db = (await connectDB).db("forum");
                let user = await db
                    .collection("user_local")
                    .findOne({ email: credentials.email });
                if (!user) {
                    console.log("해당 이메일은 없음");
                    return null;
                }
                const pwcheck = await bcrypt.compare(
                    credentials.password,
                    user.password
                );
                if (!pwcheck) {
                    console.log("비번틀림");
                    return null;
                }
                return user;
            },
        }),
    ],

    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, //30일
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.user = {};
                token.user.name = user.name;
                token.user.email = user.email;
            }
            return token;
        },
        session: async ({ session, token }) => {
            session.user = token.user;
            return session;
        },
    },

    secret: "qwer1234",
    adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
