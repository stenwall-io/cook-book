import { Schema, Document, model } from 'mongoose';

export interface SeasonDocument extends Document {
  name: string;
}

const SeasonSchema = new Schema<SeasonDocument>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const Season = model<SeasonDocument>('Season', SeasonSchema);

export default Season;
