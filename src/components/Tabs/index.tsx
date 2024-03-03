import clsx from 'clsx';

interface IProps {
  list: { id: number; name: string; isActive: boolean }[];
  toggleActive: (id: number) => void;
}

function Tabs(props: IProps) {
  const handleToggleActive = (id: number) => () => {
    props.toggleActive(id);
  };
  return (
    <ul className='tab'>
      {props.list.map((item) => {
        return (
          <li
            key={item.id}
            className={clsx('tab__item', item.isActive && 'tab__item--active')}
            onClick={handleToggleActive(item.id)}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}

export default Tabs;
