import Ingredient, { IngredientDocument } from 'db/models/ingredient.model.ts';
import Plan, { PlanDocument } from 'db/models/plan.model.ts';
import Recipe, { RecipeDocument } from 'db/models/recipe.model.ts';
import Season, { SeasonDocument } from 'db/models/season.model.ts';
import UnitTransform, { UnitTransformDocument } from 'db/models/unit_transform.model.ts';
import Unit, { UnitDocument } from 'db/models/unit.model.ts';

export default {
    Ingredient,
    Plan,
    Recipe,
    Season,
    UnitTransform,
    Unit
};

export {
    IngredientDocument,
    PlanDocument,
    RecipeDocument,
    SeasonDocument,
    UnitTransformDocument,
    UnitDocument
};
