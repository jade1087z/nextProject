import { connectDB } from "@/util/database";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Write(req, res) {
    let session = await getServerSession(req, res, authOptions);
    console.log(session);

    if (session) {
        req.body.email = session.user.email;
        req.body.name = session.user.name;

        if (req.method === "POST") {
            try {
                const db = (await connectDB).db("forum");
                // let reuslt = await db.collection("session")
                let result = await db.collection("post").insertOne(req.body);
                return res.status(200).json({ success: true });
            } catch (error) {
                console.log(error);
                return res
                    .status(500)
                    .json({ success: false, message: "Server Error" });
            }
        }
    }
}
