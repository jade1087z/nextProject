import { connectDB } from "@/util/database";

export default async function Home() {
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").find().toArray();
    console.log(result);

    return (
        <div>
            {result.map((res, key) => (
                <div key={key}>
                    <h4>{res.title}</h4>
                    <p>{res.content}</p>
                </div>
            ))}
        </div>
    );
}

// 1. 몽고디비 연동
// 2. 디비에서 사용될 디비 이름 async await
