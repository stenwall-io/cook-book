import { Schema, Model, model, models } from 'mongoose';
import { IRecipe } from '@models/index';

export interface IPlan {
  _id: Schema.Types.ObjectId;
  name: string;
  recipes: Array<IPlanRecipe>;
  createdAt: Date;
  updatedAt: Date;
}

interface IPlanRecipe {
  order: number;
  recipe: IRecipe['_id'];
}

const PlanSchema = new Schema<IPlan>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    recipes: [
      {
        order: Number,
        recipe: {
          type: Schema.Types.ObjectId,
          ref: 'Recipe',
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default (models.Plan as Model<IPlan>) ||
  model<IPlan>('Plan', PlanSchema);
