import {addPostActionCreator, profileReducer} from "./profile-reducer";

let state = {
  postsData: [
    {
      id: '1',
      message: 'Hi how are you?',
      likes: '5'
    },
    {
      id: '2',
      message: 'Hello I am post?',
      likes: '10'
    },
  ]
}

it('Length of posts should be incremented', () => {
  //1. test data
  let action = addPostActionCreator("it-kamasutra.com")

  //2. action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.postsData.length).toBe(3);
});


it('New post message should be corrected', () => {
  //1. test data
  let action = addPostActionCreator("it-kamasutra.com")

  //2. action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.postsData[2].message).toBe("it-kamasutra.com");
});