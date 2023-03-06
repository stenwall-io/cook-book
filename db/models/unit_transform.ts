import { Schema, Model, model, models, PopulatedDoc } from 'mongoose';
import { IIngredient, IUnit } from './';

export interface IUnitTransform {
  ingredient_id: PopulatedDoc<IIngredient['_id'] & IIngredient>;
  unit_a_id: PopulatedDoc<IUnit['_id'] & IUnit>;
  unit_b_id: PopulatedDoc<IUnit['_id'] & IUnit>;
  factor: number;
}

const UnitTransformSchema = new Schema<IUnitTransform>({
  ingredient_id: {
    type: Schema.Types.ObjectId,
    ref: 'Ingredient',
  },
  unit_a_id: {
    type: Schema.Types.ObjectId,
    ref: 'Unit',
  },
  unit_b_id: {
    type: Schema.Types.ObjectId,
    ref: 'Unit',
  },
  factor: Number,
});

export default (models.UnitTransform as Model<IUnitTransform>) ||
  model<IUnitTransform>('UnitTransform', UnitTransformSchema);
