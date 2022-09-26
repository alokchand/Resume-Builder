export const fetchData = (data) => (dispatch) => {
  dispatch({ type: "FETCH_DATA", payload: data });
};


export const updateAchievements = (data, newData, prevData, temp ) => (dispatch) => {
  data = data.filter((x)=>(x.description!==prevData.description))
  data.push(newData)
  temp.Achievements = data;
  dispatch({ type: "UPDATE_ACH", payload: temp });
};

export const updateEducation = (data, newData, prevData, temp ) => (dispatch) => {
  data = data.filter((x)=>(x.description!==prevData.description))
  data.push(newData)
  temp.education = data;
  dispatch({ type: "UPDATE_Education", payload: temp });
};

export const updateWork = (data, newData, prevData, temp ) => (dispatch) => {
  data = data.filter((x)=>(x.description!==prevData.description))
  data.push(newData)
  temp.work = data;
  dispatch({ type: "UPDATE_WORK", payload: temp });
};

