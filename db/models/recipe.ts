import { Schema, Model, model, models, Types } from 'mongoose';
import { IUnit, ISeason, ITag, IIngredient } from '@models/index';

export interface IRecipe {
  _id: Types.ObjectId;
  name: string;
  description?: string;
  image_url?: string;
  num_portions: number;
  seasons: Types.Array<ISeason['_id']>;
  ingredients: Array<IRecipeIngredient>;
  ingredientList: Array<string>;
  steps: Array<IStepGroup>;
  tags: Types.Array<ITag['_id']>;
  createdAt: Date;
  updatedAt: Date;
}

interface IRecipeIngredient {
  ingredient: IIngredient['_id'];
  unit: IUnit['_id'];
  amount: number;
  soak: boolean;
  boil: boolean;
}

interface IStepGroup {
  title: string;
  steps: Array<string>;
}

const RecipeSchema = new Schema<IRecipe>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
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
        steps: [String],
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

RecipeSchema.virtual('ingredientList').get(function (this: IRecipe) {
  return this.ingredients.map((ingredient) => {
    if (typeof ingredient.unit.shortname != undefined) {
      return `${ingredient.amount} ${ingredient.unit.shortname} ${ingredient.ingredient.name}`;
    }
  });
});

export default (models.Recipe as Model<IRecipe>) ||
  model<IRecipe>('Recipe', RecipeSchema);
