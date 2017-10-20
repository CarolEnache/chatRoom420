export const signIn = () => {
  return(dispatch)=> {
    dispatch({ type: 'ATTEMPTING_LOGIN' });
      setTimeout(()=>{
        dispatch({
          type: 'SIGN_IN',
          email: 'bill@example.com',
          displayName: 'Bill Murray',
          photoURL: 'http://www.fillmurray.com/200/200',
          uid: 'firstUser'
        })
      }, 2000); 
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  };
};
