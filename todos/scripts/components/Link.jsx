import React from 'react';

const Link = ({active, onClick, children})=> {
  if(active) {
    return (
        <span>{children}</span>
    )
  }
  return (
    <a
        href="javascript: void(0)"
        onClick={onClick}
    >
      {children}
    </a>
  )
};

export default Link;