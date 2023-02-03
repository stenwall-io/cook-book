import { Model, model, models, Schema, Types, PopulatedDoc } from 'mongoose';
import { IRecipe } from '@models/index';

export interface IPlan {
  _id: Types.ObjectId;
  name: string;
  recipes: Types.Array<PopulatedDoc<IRecipe['_id'] & IRecipe>>;
  createdAt: Date;
  updatedAt: Date;
}

const PlanSchema = new Schema<IPlan>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    recipes: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Recipe',
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default (models.Plan as Model<IPlan>) ||
  model<IPlan>('Plan', PlanSchema);
