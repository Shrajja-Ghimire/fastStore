const initialState = {
  cartItems: [],
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    //disptch when product is added
    case "ADD_TO_CART":
      // Check if the product already exists in the cart
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // If it exists, increment the quantity
        const updatedCartItems = state.cartItems.map((item, index) => {
          if (index === existingItemIndex) {
            return { ...item, quantity: item.quantity + 1 }; // Create a new object with updated quantity
          }
          return item;
        });
        return {
          ...state,
          cartItems: updatedCartItems,
          totalAmount: updatedCartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          ), // Recalculate totalAmount
        };
      } else {
        // If it's a new item, add it to the cart
        const newItem = {
          ...action.payload,
          quantity: 1,
        };
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
          totalAmount: state.totalAmount + action.payload.price,
        };
      }

    case "REMOVE_FROM_CART":
      // Remove the item from the cart
      const updatedItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      // Find the removed item to adjust the totalAmount
      const itemToRemove = state.cartItems.find(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        cartItems: updatedItems,
        totalAmount:
          state.totalAmount - itemToRemove.price * itemToRemove.quantity, // Subtract the price of the removed item
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
        totalAmount: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;
