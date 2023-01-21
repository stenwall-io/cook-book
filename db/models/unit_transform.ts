import { Schema, model, models } from 'mongoose';
import { IIngredient, IUnit } from './';

export interface IUnitTransform {
  ingredient_id: IIngredient['_id'];
  unit_a_id: IUnit['_id'];
  unit_b_id: IUnit['_id'];
  factor: number;
}

const UnitTransformSchema = new Schema<IUnitTransform>(
  {
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
      ref: 'Unit'
    },
    factor: Number
  }
);

export default models.UnitTransform || model<IUnitTransform>('UnitTransform', UnitTransformSchema);
