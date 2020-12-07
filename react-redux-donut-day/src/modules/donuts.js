// Action type constants go here
const ADD_DONUT = "ADD_DONUT"
const HANDLE_NAME_CHANGE = 'HANDLE_NAME_CHANGE'
const HANDLE_FLAVOR_CHANGE = 'HANDLE_FLAVOR_CHANGE'
const CLEAR_FORM = 'CLEAR_FORM'

// Action creators go here
const addNewDonut = newDonut => {
  return {
    type: ADD_DONUT,
    newDonut
  }
}

const handleNameChange = event => {
  const newName = event.target.value
  return {
    type: HANDLE_NAME_CHANGE,
    newName
  }
}

const handleFlavorChange = event => {
  const newFlavor = event.target.value
  return {
    type: HANDLE_FLAVOR_CHANGE,
    newFlavor
  }
}

const clearForm = () => {
  return {
    type: CLEAR_FORM
  }
}
// Reducer and its initialState go here

const initialState = {
  donutOrderList: [
    {
      id: 1,
      name: 'Brianna',
      flavor: 'Everything Bagel Doughnut'
    },
    {
      id: 2,
      name: "Alex",
      flavor: 'Blackberry Hibiscus'
    },
    {
      id: 3,
      name: 'Dan',
      flavor: 'The biggest coffee roll ever'
    }
  ]
}

const donutsReducer = (state = initialState, action) => {
  console.log("inside the reducer")
  switch(action.type) {
    case ADD_DONUT:
      const newDonuts = state.donutOrderList.concat(action.newDonut)
      return {...state, donutOrderList: newDonuts }
    case HANDLE_NAME_CHANGE:
      return {...state, name: action.newName}
    case HANDLE_FLAVOR_CHANGE:
      return {...state, flavor: action.newFlavor}
    case CLEAR_FORM:
      return {...state, name: '', flavor: ''}
    default:
      return state
  }
};

// Export statement goes here

export {
  addNewDonut,
  handleNameChange,
  handleFlavorChange,
  clearForm,
  donutsReducer
};
