import mongoose, {Document, Schema} from "mongoose";

/**
 * A user that can be assigned duties
 * @param id - ID of the user
 * @param name - Name of the user
 * @param basePoints - The starting value the user starts with to allow for the user to not be at a huge negative when starting out
 */
export interface IUser extends Document {
    id: string,
    name: string,
    basePoints: number
}

const UserSchema = new Schema<IUser>(
    {
        id: {type: String, required: true},
        name: {type: String, default: "noUserNameWasProvided"},
        basePoints: {type: Number, required: true},
    },
    {timestamps: true}
);
export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
