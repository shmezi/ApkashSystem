import mongoose, {Document, Schema} from "mongoose";

/**
 * An entry of a user in a schedule
 */
export interface IScheduleCategory extends Document {
    userId: string,
    scheduleId: string,
    entryId: string
}

const ScheduleCategory = new Schema<IScheduleCategory>(
    {
        userId: {type: String, required: true},
        scheduleId: {type: String, required: true},
        entryId: {type: String, required: true},
    },
    {timestamps: true}
);
export default mongoose.models.ScheduleCategory || mongoose.model<IScheduleCategory>("ScheduleEntry", ScheduleCategory);
