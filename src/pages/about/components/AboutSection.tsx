import { PropsWithChildren, useEffect, useState } from 'react';

interface IProps {
  title: string;
  num: number;
  className?: string;
}

const AboutSection = (props: PropsWithChildren<IProps>) => {
  const [num, setNum] = useState('');
  useEffect(() => {
    setNum(props.num.toString().padStart(2, '0'));
  }, [props.num]);
  return (
    <div className={`section ${props.className}`}>
      <div className='section__title'>
        <span className='section__title-num'>{num}</span>
        <span className='section__title-text'>{props.title}</span>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default AboutSection;
