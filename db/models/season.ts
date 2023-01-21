import { Schema, model, models } from 'mongoose';

export interface ISeason{
  _id: Schema.Types.ObjectId;
  name: string;
}

const SeasonSchema = new Schema<ISeason>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

export default models.Season || model<ISeason>('Season', SeasonSchema);
