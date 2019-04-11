import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utility'

const initialState = {
	ingredients:null,
	totalPrice: 4,
	loading:false,
	error: null
}

const INGREDIENT_PRICES = {
	salad:0.5,
	cheese:0.4,
	meat:1.3,
	bacon:0.7
}

const addIngredient = (state, action) => {
	const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1}
	const updatedIngredients = updateObject(state.ingredients, updatedIngredient)
	const updatedState = {
		ingredients:updatedIngredients,
		totalPrice:state.totalPrice +INGREDIENT_PRICES[action.ingredientName]
	}
	return updateObject(state,updatedState)
}

const removeIngredient = (state, action) => {
	const updatedIngredient2 = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1}
	const updatedIngredients2 = updateObject(state.ingredients, updatedIngredient2)
	const updatedState2 = {
		ingredients:updatedIngredients2,
		totalPrice:state.totalPrice +INGREDIENT_PRICES[action.ingredientName]
	}
	return updateObject(state,updatedState2)
}

const setIngredients = (state,action) => {
	return updateObject(state, {
		error:false,
		ingredients:action.ingredients,
		totalPrice: 4
	})
}

const fetchIngredientsFailed = (state, action) => {
	return updateObject(state, {error:true})
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_INGREDIENT: return addIngredient(state, action)
		case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
		case actionTypes.SET_INGREDIENTS: return setIngredients(state, action)
		case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action)
		default: return state;
	}

}

export default reducer