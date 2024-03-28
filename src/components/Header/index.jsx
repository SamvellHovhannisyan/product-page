import {
  Box,
  Divider,
  InputAdornment,
  Menu,
  MenuItem,
  OutlinedInput,
  Button,
  Typography,
} from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import EditIcon from '@mui/icons-material/Edit';
import styles from './Header.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled, alpha } from '@mui/material/styles';
import { useState } from 'react';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={styles.header}>
      <Box component="img" alt="Brand logo" src="/icons/logo.svg" />
      <Button disableRipple className={styles.menuBtn} startIcon={<FormatListBulletedIcon />}>
        Меню
      </Button>
      <OutlinedInput
        className={styles.searchInput}
        placeholder="Название запроса"
        endAdornment={
          <InputAdornment position="end" sx={{ gap: '12px' }}>
            <Box
              component="img"
              className={styles.input_icon}
              alt="close icon"
              src="/icons/close_icon.svg"
            />
            <Box
              component="img"
              className={styles.input_icon}
              alt="search icon"
              src="/icons/search_icon.svg"
            />
          </InputAdornment>
        }
      />
      <Box
        component="img"
        className={styles.action_icon}
        alt="notification icon"
        src="/icons/notification_icon.svg"
      />
      <Divider orientation="vertical" variant="middle" flexItem />
      <FavoriteBorderIcon className={styles.action_icon} />
      <Button
        disableRipple
        className={styles.basketBtn}
        startIcon={
          <Box
            component="img"
            className={styles.input_icon}
            alt="search icon"
            src="/icons/basket.svg"
          />
        }
      >
        144 235
        <CurrencyRubleIcon sx={{ fontSize: '14px', stroke: '#1551E5', marginLeft: '-12px' }} />
      </Button>
      <Box className={styles.userInfo} onClick={handleClick}>
        <Box
          component="img"
          className={styles.avatar}
          alt="search icon"
          src="/images/test_avatart.png"
        />
        <Typography className={styles.userName}>Ермаков Е.</Typography>
        <Box component="img" className={styles.avatar} alt="search icon" src="/icons/expand.svg" />
      </Box>
      {/*TODO menu items*/}
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Duplicate
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          More
        </MenuItem>
      </StyledMenu>
    </Box>
  );
};
export default Header;
