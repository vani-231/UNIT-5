const action = { type="INC_COUNT", payload: 1 }

class store {
    constructor(reducer, init) {
        this.reducer = reducer
        this.state = init
    }
    getState() {
        return this.state
    }

    dispatch(action) {
        this.state = this.reducer(this.state, action)
    }
}

const reducer = (store, action) => {
    if (action.type === "INC_COUNT") {
        return { ...state, count: action.count + action.payload }
    }
    return store
}

const init = { count: 10 }

const store = new Store(reducer, init)

console.log(store.getState());

store.dispatch({ type: "INC_COUNT", payload: 1 })
console.log(store.getState());