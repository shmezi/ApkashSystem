import mongoose, {Document, Schema} from "mongoose";

/**
 * Defines a ruling for a user that they do not have any duties during this period.
 */
export interface IRulingJustification extends Document {
    userId: string,
    reasoning: string,
    start: number,
    end: number,
    repeatsEvery: number,
}

const RulingJustification = new Schema<IRulingJustification>(
    {
        userId: {type: String, required: true},
        reasoning: {type: String, required: true},
        start: {type: Number, required: true},
        end: {type: Number, required: true},
        repeatsEvery: {type: Number, default: -1, required: true},
    },
    {timestamps: true}
);
export default mongoose.models.RulingJustification || mongoose.model<IRulingJustification>("RulingJustification", RulingJustification);
