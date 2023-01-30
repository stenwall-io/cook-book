import { Schema, Model, model, models } from 'mongoose';

export interface IUnit {
  _id: Schema.Types.ObjectId;
  name: string;
  plural: string;
  shortname: string;
}

const UnitSchema = new Schema<IUnit>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  shortname: {
    type: String,
    trim: true,
  },
  plural: {
    type: String,
    trim: true,
  },
});

export default (models.Unit as Model<IUnit>) ||
  model<IUnit>('Unit', UnitSchema);
