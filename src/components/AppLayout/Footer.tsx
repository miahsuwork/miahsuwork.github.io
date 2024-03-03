import React from 'react';

export default function Footer() {
  const [thisYear] = React.useState(new Date().getFullYear());

  return (
    <footer>
      <div className='layout flex lg:justify-start justify-center'>
        <div className='text-xs py-5'>
          COPYRIGHT © {thisYear} MiaHsu All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
