import { createStore, applyMiddleware } from 'redux'
import { loadState, saveState, loadCartState, saveCartState } from './storage';


const reducer = ( state, action) => {
	if (action.type === "ADD_TOKEN") {
		console.log('token store'+action.token)
		return{
			...state,
			token: action.token,
			userType: action.userType
		}
	}
	if (action.type === "ADD_BIKE") {
		return{
			...state,
			cart: state.cart.concat(action.bike)
		}
	}
	if (action.type === "SECTION_VIEW") {
		return{
			...state,
			sectionView: action.sectionView
		}
	}
	if (action.type === "CLOSE_SESSION") {
		return{
			...state,
			token: "",
			userType: ""
		}
	}
	if (action.type === "REMOVE_BIKE") {
		return{
			...state,
			cart: state.cart.filter(bike => bike.id !== action.bike.id)
		}
	}
	if (action.type === "CHANGE_USER_TYPE"){
		return{
			...state,
			userType: action.userType
		}
	}
	console.log('view '+state.sectionView)
	return state
};

const persistedState = () =>{
	console.log("deberia ser el estado guardado",loadState())
	const currentStore = loadState();
	const currentCart = loadCartState()
    return {
		token: currentStore.token,
		sectionView: currentStore.sectionView,
		userType: currentStore.userType,
		cart: currentCart
	}
}

const logger = store => next => action => {
    console.log('Realizó método dispatch para: ', action);
    let result = next(action);
	saveState(store.getState());
	saveCartState(store.getState());
    console.log('El estado es ahora: ', store.getState());
    return result;
}

export default createStore(reducer , persistedState(), applyMiddleware(logger));