import { Schema, model, models } from 'mongoose';

export interface IUnit {
  _id: Schema.Types.ObjectId;
  name: string;
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
    required: true,
    trim: true,
  },
});

export default models.Unit || model<IUnit>('Unit', UnitSchema);
