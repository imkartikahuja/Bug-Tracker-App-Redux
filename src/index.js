import configureStore from "./store/configureStore";
// import {
//   bugAdded,
//   bugResolved,
//   bugAssignedToUser,
//   getUnresolvedBugs,
//   getBugsByUser,
// } from "./store/bugs";
// import { projectAdded } from "./store/projects";
// import { userAdded } from "./store/users";

const store = configureStore();

// store.dispatch((dispatch, getState) => {
//   // Call an API
//   // When the promise is resolved => dispatch()
//   dispatch({ type: "bugsRecevied", bugs: [1, 2, 3] });
//   console.log(getState());
//   // If the promise is rejected => dispatch()
// });

store.dispatch({
  type: "error",
  payload: { message: "An error occurred." },
});

// store.dispatch(userAdded({ name: "Kartik Ahuja" }));
// store.dispatch(userAdded({ name: "User 2" }));

// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
// store.dispatch(bugResolved({ id: 1 }));

// store.dispatch(projectAdded({ name: "Project 1" }));

// const unresolvedBugs = getUnresolvedBugs(store.getState());
// console.log(unresolvedBugs);

// console.log(store.getState());

// const bugs = getBugsByUser(1)(store.getState());
// console.log(bugs);
