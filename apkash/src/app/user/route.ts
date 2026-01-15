import {NextRequest} from "next/server";
import User from "@/models/User";

const POST = async (req: NextRequest) => {
    const newUser = await req.json();
    await User.insertOne(newUser);
};

export default POST