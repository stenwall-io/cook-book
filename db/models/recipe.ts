import { Schema, Document, model, Types } from 'mongoose';
import { UnitDocument, SeasonDocument, IngredientDocument } from '.';

export interface RecipeDocument extends Document {
  name: string;
  image_url?: string;
  num_portions: number;
  seasons: Types.Array<SeasonDocument['_id']>;
  ingredients: Array<RecipeIngredient>;
  steps: Array<StepGroup>;
  createdAt: Date;
  updatedAt: Date;
}

interface RecipeIngredient {
  ingredient_id: IngredientDocument['_id'];
  unit_id: UnitDocument['_id'];
  amount: number;
  soak: boolean;
  boil: boolean;
}

interface StepGroup {
  title: string;
  order: number;
  steps: Array<Step>;
}

interface Step {
  order: number;
  text: string;
}

const RecipeSchema = new Schema<RecipeDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image_url: String,
    seasons: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Season',
      },
    ],
    ingredients: [
      {
        ingredient: {
          type: Schema.Types.ObjectId,
          ref: 'Ingredient',
        },
        unit: {
          type: Schema.Types.ObjectId,
          ref: 'Unit',
        },
        amount: Number,
        soak: Boolean,
        boil: Boolean,
      },
    ],
    steps: [
      {
        title: String,
        order: Number,
        steps: [
          {
            order: Number,
            text: String,
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Recipe = model<RecipeDocument>('Recipe', RecipeSchema);

export default Recipe;
