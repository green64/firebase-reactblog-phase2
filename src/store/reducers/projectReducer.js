const initState = {
  projects: [
    {id: '1', title: 'Just Call Me Willy', content: 'Every chocolate factory needs a generalist'},
    {id: '2', title: 'Coding Through the Polar Vortex', content: 'You can still learn when temperatures are subzero'},
    {id: '3', title: 'VSC Shortcuts You Should Know', content: 'Become a faster developer by learning shorthand'}
  ]
};

const projectReducer = (state = initState, action) => {
  return state
};

export default projectReducer