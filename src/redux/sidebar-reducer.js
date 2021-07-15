let initialState = {
  friends: [
    {
      id: 0,
      name: 'John',
      link: 'http://link1',
    },
    {
      id: 1,
      name: 'Meth',
      link: 'http://link2',
    },
    {
      id: 2,
      name: 'Alex',
      link: 'http://link3',
    },
  ]
}

export const sidebarReducer = (state = initialState, action) => {
  return state;
}