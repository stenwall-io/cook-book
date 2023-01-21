import { Schema, Document, model, Types } from 'mongoose';

export interface UnitDocument extends Document {
  name: string;
  shortname: string;
}

const UnitSchema = new Schema<UnitDocument>({
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

const Unit = model<UnitDocument>('Unit', UnitSchema);

export default Unit;
