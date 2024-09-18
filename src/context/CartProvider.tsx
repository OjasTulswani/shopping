export type CartItemType = {
    sku: string,
    name: string,
    price: number,
    qty: number,
}

type CartStateType = {cart : CartItemType[]};

const initCartState : CartStateType = { cart : [] }

const REDUCER_ACTION_TYPE = {
    ADD : "ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT",
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerActionType = {
    typr: string
    payload?: CartItemType,
}

const reducer = (state : CartStateType, action : ReducerActionType) : cartStateType => {
    switch(action.type){
        case REDUCER_ACTION_TYPE.ADD:{
            if(!action.payload){
            throw new Error('action.payload is required in ADD')
            
        }}
            
        case REDUCER_ACTION_TYPE.REMOVE:{
            if(!action.payload){
                throw new Error('action.payload is required in ADD')
            }
            break
        }
        case REDUCER_ACTION_TYPE.QUANTITY:{
            break;
        }
        case REDUCER_ACTION_TYPE.SUBMIT:{
            return {...state, cart:[]}
            
        }
        default:
            throw new Error('Undefined action type')
    }
}