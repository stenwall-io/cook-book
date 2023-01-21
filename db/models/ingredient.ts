import { Schema, Document, model } from 'mongoose';
import { UnitDocument } from './';

export interface IngredientDocument extends Document {
  name: string;
  default_unit_id: UnitDocument['_id'];
}

const IngredientSchema = new Schema<IngredientDocument>({
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

const Ingredient = model<IngredientDocument>('Ingredient', IngredientSchema);

export default Ingredient;
