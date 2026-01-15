import mongoose, {Document, Schema} from "mongoose";

/**
 * An entry of a user in a schedule
 */
export interface IScheduleEntry extends Document {
    userId: string,
    scheduleId: string,
    entryId: string
}

const ScheduleEntry = new Schema<IScheduleEntry>(
    {
        userId: {type: String, required: true},
        scheduleId: {type: String, required: true},
        entryId: {type: String, required: true},
    },
    {timestamps: true}
);
export default mongoose.models.ScheduleEntry || mongoose.model<IScheduleEntry>("ScheduleEntry", ScheduleEntry);
