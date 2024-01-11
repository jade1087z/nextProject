// import { connectDB } from "@/util/database";
// import { ObjectId } from "mongodb";

// export default async function handle(req, res, props) {
//     if (req.method == "POST") {
//         if (req.body.title == "") {
//             return res.status(500).json("너 제목 써라");
//             console.log(req.body);
//         }
//         try {
//             console.log(req.body);
//             const db = (await connectDB).db("forum");
//             let result = await db
//                 .collection("post")
//                 .updateOne(
//                     { _id: new ObjectId(req.body._id) },
//                     { $set: { title: req.body.title, content: req.body.title } }
//                 );
//             console.log(req.body._id);
//             console.log(props.params.id);
//             console.log(result);
//             res.status(200).json({ success: true });
//         } catch (err) {
//             console.log(err);
//         }
//     }
// }
