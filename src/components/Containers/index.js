import React from 'react';

const LayoutContent = ({children}) => {
  return (
    <div style={style.root}>
      {children}
    </div>
  );
}

const style = {
  root: {
    marginTop: "5rem"
  }
}

export {
  LayoutContent
};