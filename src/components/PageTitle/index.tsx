import React from 'react';

interface IProps {
  title: string;
}

export const PageTitle = (props: IProps) => {
  return <div className='page-title'>{props.title}</div>;
};
