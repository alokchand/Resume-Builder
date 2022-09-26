const reducers = (data = [], action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return action.payload;
    case "UPDATE_ACH":
      return action.payload;
    case "UPDATE_Education":
      return action.payload;
    case "UPDATE_WORK":
      return action.payload;
    default:
      return data;
  }
};
export default reducers;
