import { Schema, Document, model } from 'mongoose';
import { RecipeDocument } from '@models/index';

export interface PlanDocument extends Document {
  name: string;
  recipes: Array<PlanRecipe>;
  createdAt: Date;
  updatedAt: Date;
}

interface PlanRecipe {
  order: number;
  recipe: RecipeDocument['_id'];
}

const PlanSchema = new Schema<PlanDocument>(
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

const Plan = model<PlanDocument>('Plan', PlanSchema);

export default Plan;
