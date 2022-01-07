
const initialValue = 5

const changeTheNum = (state = initialValue, action) => {

    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state
    }

}

export default changeTheNum;