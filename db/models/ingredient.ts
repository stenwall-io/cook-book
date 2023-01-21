import { Schema, Model, model, models } from 'mongoose';
import { IUnit } from './';

export interface IIngredient {
  _id: Schema.Types.ObjectId;
  name: string;
  default_unit_id: IUnit['_id'];
}

const IngredientSchema = new Schema<IIngredient>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  default_unit_id: {
    type: Schema.Types.ObjectId,
    ref: 'Unit',
    required: true,
  },
});

export default (models.Ingredient as Model<IIngredient>) || model<IIngredient>('Ingredient', IngredientSchema);

