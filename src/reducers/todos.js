const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DRIVER':
      return [
        ...state, {
          id: action.id,
          name: action.name,
          drivingLicence: action.drivingLicence,
          registrationDate: action.registrationDate
        }
      ]
    default:
      return state
  }
}

export default todos
