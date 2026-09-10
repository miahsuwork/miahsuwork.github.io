import React from 'react';

export default function Footer() {
  const [thisYear] = React.useState(new Date().getFullYear());

  return (
    <footer>
      <div className='layout footer__inner'>
        <div className='footer__copyright'>
          COPYRIGHT © {thisYear} MiaHsu All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
