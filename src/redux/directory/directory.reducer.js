import sectionsData from "./sections.data";

const INITIAL_STATE = { sections: sectionsData };

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
