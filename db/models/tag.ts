import { Schema, Model, model, models } from 'mongoose';
import { IUnit } from '@models/index';

export interface ITag {
  _id: Schema.Types.ObjectId;
  name: string;
  default_unit_id: IUnit['_id'];
}

const TagSchema = new Schema<ITag>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

export default (models.Tag as Model<ITag>) || model<ITag>('Tag', TagSchema);
