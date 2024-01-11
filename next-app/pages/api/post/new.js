// import { connectDB } from "@/util/database";
// import { ObjectId } from "mongodb";

// export default async function handle(req, res) {
//     if (req.method == "POST") {
//         if (req.body.title == "") {
//             return res.status(500).json("너 제목 써라");
//         }
//         try {
//             const db = (await connectDB).db("forum");
//             let result = await db.collection("post").insertOne(req.body);
//             if (result) {
//                 res.status(200).json({ success: true });
//                 if (res.data.success) {
//                     RuleTester.push("/list");
//                 }
//             } else {
//                 res.status(400).json({ success: false });
//             }
//         } catch (err) {
//             console.log(err);
//         }
//     }
// }
