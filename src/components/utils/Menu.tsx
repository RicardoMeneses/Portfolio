import { Menu, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import { FaChevronDown } from 'react-icons/fa';

const MyMenu = (props: any) => {
  const { children, content } = props;
  return (
    <Menu
      menuButton={
        <MenuButton className='flex items-center gap-1'>
          <span className=' uppercase text-xl'>{content} </span>
          <FaChevronDown className='text-xs' />
        </MenuButton>
      }
      transition
      direction='bottom'
      align='end'
      position='anchor'
      viewScroll='close'
      arrow={true}
    >
      {children}
    </Menu>
  );
};

export default MyMenu;
