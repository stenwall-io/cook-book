import { Schema, Document, model, Types } from 'mongoose';
import { RecipeDocument } from './';

export interface PlanDocument extends Document {
  name: string;
  recipes: Array<PlanRecipe>;
  createdAt: Date;
  updatedAt: Date;
}

interface PlanRecipe {
  order: number,
  recipe: RecipeDocument['_id']
}

const PlanSchema = new Schema<PlanDocument>(
  name: {
    type: String,
    required: true,
    trim: true,
  },
  recipes: [
    {
      order: number,
      recipe: {
        type: Schema.Types.ObjectId, 
        ref: 'Unit',
        required: true
      }
    }
  ],
  {
    timestamps: true
  }
);

const Plan = model<PlanDocument>('Plan', PlanSchema);

export default Plan;