import { stat } from "fs";

export const loadState = () => {
    try {
      const serializedData = localStorage.getItem('state')
      console.log("el estado", serializedData)
      if (serializedData === null){
        return {
          token: "",
          sectionView: "",
          userType: "",
          userId: "",
          userEmail: ""
        }
      } 
      return JSON.parse(serializedData) // Si encontramos con exito nuestro storage lo devolvemos.
    } catch (error) {
      return {
        token: "",
        sectionView: "",
        userType: "",
        userId: "",
        userEmail: ""
      }
    }
}
export const loadCartState = () =>{
  try{
    const serializedCart = localStorage.getItem('cart')
    console.log("el carrito", serializedCart)
    if (serializedCart === null){
      return []
    }
    return JSON.parse(serializedCart)
  } catch(error){
    return []
  }
}
export const saveState = (state) => {
    try {
      const varState = {
        token: state.token,
        sectionView: state.sectionView,
        userType: state.userType,
        userId: state.userId,
        userEmail: state.userEmail
      }
      let serializedData = JSON.stringify(varState)
      console.log("serializador", serializedData)
      localStorage.setItem('state', serializedData)
    } catch (error) {
      console.log("imprime",error)
      // Acá podemos capturar o crear cualquier log que deseemos en caso de que falle el salvado en el storage.    
    }
  }

  export const saveCartState = (state) => {
    try {
      let serializedData = JSON.stringify(state.cart)
      console.log("serializador", serializedData)
      localStorage.setItem('cart', serializedData)
    } catch (error) {
      console.log("imprime",error)
      // Acá podemos capturar o crear cualquier log que deseemos en caso de que falle el salvado en el storage.    
    }
  }