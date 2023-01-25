export default const typeDefs = `type Recipe{
	id: ID!
	name: String!
	image_url: String
	seasons: [Season!]!
	num_portions: Int!
    ingredients: [RecipeIngredient!]!
    steps: [StepGroup!]!
}

type RecipeIngredient{
	ingredient: Ingredient!
	unit: Unit!
	amount: Float!
	soak: Boolean
	boil: Boolean
}

type StepGroup{
	title: String!
    order: Int!
    steps: [Step!]!
}

type Step{
	order: Int!
    text: String!
}

type Season{
	id: ID!
	name: String!
}

type Ingredient{
	id: ID!
	name: String!
	defult_unit: Unit!
}

type Unit{
	id: ID!
	name: String!
	shortname: String!
}

type User{
	id: ID!
	username: String!
	password: String!
}

type UnitTransform{
	ingredient: Ingredient!
	unit_a: Unit!
	unit_b: Unit!
	factor: Float!
}

type Plan{
	id: ID!
	name: String!
	recipes: [PlanRecipe!]!
}

type PlanRecipe{
	order: Int!
	recipe: Recipe!
}`;
