import { Schema, Model, model, models, Types, PopulatedDoc } from 'mongoose';
import { IUnit, ISeason, ITag, IIngredient } from '@models/index';

export interface IRecipe {
  _id: Types.ObjectId;
  name: string;
  description?: string;
  image_url?: string;
  num_portions: number;
  seasons: Types.Array<PopulatedDoc<ISeason['_id'] & ISeason>>;
  ingredients: Types.Array<IRecipeIngredient>;
  ingredientList: Types.Array<string>;
  steps: Types.Array<IStepGroup>;
  tags: Types.Array<ITag['_id']>;
  createdAt: Date;
  updatedAt: Date;
}

interface IRecipeIngredient {
  ingredient: PopulatedDoc<IIngredient['_id'] & IIngredient>;
  unit: PopulatedDoc<IUnit['_id'] & IUnit>;
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
