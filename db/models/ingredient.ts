import { Schema, Model, model, models, Types } from 'mongoose';
import { IUnit } from '@models/index';

export interface IIngredient {
  _id: Types.ObjectId;
  name: string;
  default_unit: IUnit['_id'];
}

const IngredientSchema = new Schema<IIngredient>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  default_unit: {
    type: Schema.Types.ObjectId,
    ref: 'Unit',
    required: true,
  },
});

export default (models.Ingredient as Model<IIngredient>) ||
  model<IIngredient>('Ingredient', IngredientSchema);
