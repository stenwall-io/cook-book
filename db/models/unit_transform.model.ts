import { Schema, Document, model, Types } from 'mongoose';
import { IngredientDocument, UnitDocument } from './';

export interface UnitTransformDocument extends Document {
  ingredient_id: IngredientDocument['_id'];
  unit_a_id: UnitDocument['_id'];
  unit_b_id: UnitDocument['_id'];
  factor: number;
}

const UnitTransformSchema = new Schema<UnitTransformDocument>(
  ingredient_id: {
    type: Schema.Types.ObjectId,
    ref: 'Ingredient'
  },
  unit_a_id: {
    type: Schema.Types.ObjectId,
    ref: 'Unit'
  },
  unit_b_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  factor: number
);

const UnitTransform = model<UnitTransformDocument>('UnitTransform', UnitTransformSchema);

export default UnitTransform;
