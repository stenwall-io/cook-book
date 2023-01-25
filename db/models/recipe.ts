import { Schema, Model, model, models, Types } from 'mongoose';
import { IUnit, ISeason, ITag, IIngredient } from '@models/index';

export interface IRecipe {
  _id: Schema.Types.ObjectId;
  name: string;
  image_url?: string;
  num_portions: number;
  seasons: Types.Array<ISeason['_id']>;
  ingredients: Array<IRecipeIngredient>;
  steps: Array<IStepGroup>;
  tags: Types.Array<ITag['_id']>;
  createdAt: Date;
  updatedAt: Date;
}

interface IRecipeIngredient {
  ingredient_id: IIngredient['_id'];
  unit_id: IUnit['_id'];
  amount: number;
  soak: boolean;
  boil: boolean;
}

interface IStepGroup {
  title: string;
  order: number;
  steps: Array<IStep>;
}

interface IStep {
  order: number;
  text: string;
}

const RecipeSchema = new Schema<IRecipe>(
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
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Tag',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default (models.Recipe as Model<IRecipe>) ||
  model<IRecipe>('Recipe', RecipeSchema);
