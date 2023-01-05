import React from 'react'

function Child() {

    console.log('Child component rendered! ');



  return (
    <div>Child</div>
  )
}

const propsEqual = (prevProps, nextProps) => {

    if(prevProps == nextProps){
        return true;
    }
    else{
        return false;
    }
}

export default React.memo(Child, propsEqual)