import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'components/Drawer';
import Menu from 'components/Icons/menu.svg';
import Logout from 'components/Icons/log-out.svg';
import * as S from './styled';

const MobileNav = ({ open, setOpen, active }) => (
  <S.MobileNav>
    <S.Button onClick={() => setOpen(!open)}>
      {open ? <Logout /> : <Menu />}
    </S.Button>
    <Drawer open={open} active={active} />
  </S.MobileNav>
);

MobileNav.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};

export default MobileNav;
