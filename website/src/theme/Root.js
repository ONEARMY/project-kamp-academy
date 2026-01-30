import React from 'react';
import ParentComms from '../components/ParentComms';

export default function Root({ children }) {
  return (
    <>
      <ParentComms />
      {children}
    </>
  );
}
