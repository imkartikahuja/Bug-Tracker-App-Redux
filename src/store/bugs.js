import { createAction, createReducer } from "@reduxjs/toolkit";

// Action types
// const BUG_ADDED = "bugAdded";
// const BUG_REMOVED = "bugRemoved";
// const BUG_RESOLVED = "bugResolved";

//Action creators

// export function bugAdded(description) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: description,
//     },
//   };
// }

// export const bugAdded = (description) => ({
//   type: BUG_ADDED,
//   payload: {
//     description,
//   },
// });

export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");

// Reducer
let lastId = 0;

export default createReducer([], {
  [bugAdded.type]: (bugs, action) => {
    // [bugAdded.type]: to dynamically calculate
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },

  [bugResolved.type]: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs[index].resolved = true;
  },
});

// export default function reducer(state = [], action) {
//   if (action.type === bugAdded.type)
//     return [
//       ...state,
//       {
//         id: ++lastId,
//         description: action.payload.description,
//         resolved: false,
//       },
//     ];
//   else if (action.type === bugRemoved.type)
//     return state.filter((bug) => bug.id !== action.payload.id);
//   else if (action.type === bugResolved.type)
//     return state.map((bug) =>
//       bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
//     );

//   return state;
// }
