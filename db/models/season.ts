import { Schema, Model, model, models, Types } from 'mongoose';

export interface ISeason {
  _id: Types.ObjectId;
  name: string;
}

const SeasonSchema = new Schema<ISeason>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

export default (models.Season as Model<ISeason>) ||
  model<ISeason>('Season', SeasonSchema);
