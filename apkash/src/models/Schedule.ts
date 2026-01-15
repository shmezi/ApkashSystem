import mongoose, {Document, Schema} from "mongoose";


export interface ISchedule extends Document {
    id: string,
    year: number,
    week: number,
}

const Schedule = new Schema<ISchedule>(
    {
        id: {type: String, required: true},
        year: {type: Number, required: true},
        week: {type: Number, required: true}
    },
    {
        timestamps: true
    }
);
export default mongoose.models.Schedule || mongoose.model<ISchedule>("Schedule", Schedule);
