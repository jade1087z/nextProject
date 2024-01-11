import { connectDb } from "@/util/database.js";

export default async function Write(req, res) {
    if (req.method === "POST") {
        try {
            const db = (await connectDB).db("forum");
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
