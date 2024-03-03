import { PropsWithChildren } from 'react';
interface IProps {
  isOpen: boolean;
  handleToggleNavBar: () => void;
}

export default function Hamburger({
  isOpen,
  handleToggleNavBar,
}: PropsWithChildren<IProps>) {
  return (
    <button
      className={`navbar__toggle ${isOpen ? 'navbar__toggle--active' : ''}`}
      type='button'
      onClick={handleToggleNavBar}
    >
      <span></span>
    </button>
  );
}
