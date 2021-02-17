

export default function cartReducer(state, action) {

    function getProductFromCart(id, size) {
        return state.find((p) => p.id === id && p.size === size);
    }

    switch (action.type) {
        case 'add': {
            const { id, size } = action;
            const productInCart = getProductFromCart(id, size);
            if (productInCart) {
                return state.map((i) =>
                    i.id === id && i.size === size
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            } else {
                return [...state, { id, size, quantity: 1 }];
            }

        }
        case 'modify': {
            const { id, size, changeQuantityStep } = action;
            const productInCart = getProductFromCart(id, size);
            if (productInCart.quantity + changeQuantityStep > 0) {
                return state.map((i) =>
                    i.id === id && i.size === size
                        ? { ...i, quantity: i.quantity + changeQuantityStep }
                        : i
                );
            } else return state;
        }
        case 'delete':
            const { id, size } = action;
            return state.filter(
                (i) => i.id !== id || (i.id === id && i.size !== size)
            );
        default:
            throw new Error("Action not defined.");
    }
}