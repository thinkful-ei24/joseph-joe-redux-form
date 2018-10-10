const initialState = {
  form: '',
}

export default function reducer(state=initialState, action) {
  if(action.type === SUBMIT) {
    console.log('something');
  }
} 