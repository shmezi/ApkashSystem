import mongoose, {Document, Schema} from "mongoose";

/**
 * A schedule slot is a time period in which a task is to be complete.
 *     @param scheduleId Id of the schedule",
 *     @param category Id of the category this is under.
 *     @param start The starting hour ( In weekly hours )
 *     @param end The ending hour ( In wheekly hours )
 *     @param weight Amount of points this slot is worth
 *
 * Ex object: {
 *     scheduleId: "Kitchen",
 *     start: The starting hour ( In weekly hours )
 *     end: The ending hour ( In wheekly hours )
 *     weight: Amount of points this slot is worth
 * }
 */
export interface IScheduleSlot extends Document {
    scheduleId: string,
    start: number,
    end: number
    weight: number,
}

const ScheduleSlot = new Schema<IScheduleSlot>(
    {
        scheduleId: {type: String, required: true},
        start: {type: Number, required: true},
        end: {type: Number, required: true},
        weight: {type: Number, required: true},
    },
    {timestamps: true}
);
export default mongoose.models.ScheduleSlot || mongoose.model<IScheduleSlot>("ScheduleSlot", ScheduleSlot);
