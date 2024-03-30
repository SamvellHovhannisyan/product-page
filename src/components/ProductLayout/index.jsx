import { useState } from 'react';
import {
  Box,
  Breadcrumbs,
  Button,
  Chip,
  Divider,
  FormControlLabel,
  InputAdornment,
  Link,
  OutlinedInput,
  Typography,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styles from './ProductLayout.module.scss';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import Switch from '@mui/material/Switch';

import { styled } from '@mui/material/styles';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  marginRight: '12px !important',
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#1551E5' : '#3d65cb',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#1551E5',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));
const IMAGES = [
  {
    id: 1,
    path: '/images/product_image_1.png',
    name: 'product_image_1',
  },
  {
    id: 2,
    path: '/images/product_image_2.png',
    name: 'product_image_2',
  },
  {
    id: 3,
    path: '/images/product_image_3.png',
    name: 'product_image_3',
  },
  {
    id: 4,
    path: '/images/product_image_4.png',
    name: 'product_image_4',
  },
  {
    id: 5,
    path: '/images/product_image_5.png',
    name: 'product_image_5',
  },
];

const ProductLayout = () => {
  const [activeImage, setActiveImage] = useState(IMAGES[0]);
  const [isInCart, setIsInCart] = useState(false);
  const [countValue, setCountValue] = useState(24);
  const handleScrollLeft = () => {
    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: -100, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: 100, behavior: 'smooth' });
    }
  };

  return (
    <Box className={styles.layout}>
      <Breadcrumbs separator="/" aria-label="breadcrumb" className={styles.breadcrumbs}>
        <Link underline="hover" className={styles.breadcrumbItem} href="/">
          Каталог
        </Link>
        <Link underline="hover" className={styles.breadcrumbItem} href="/">
          Обувь
        </Link>
        <Link underline="hover" className={styles.breadcrumbItem} href="/">
          Кроссовки
        </Link>
        <Link underline="hover" className={styles.breadcrumbItem} href="/">
          Беговые
        </Link>
      </Breadcrumbs>
      <Box className={styles.product}>
        <Typography className={styles.name}>Кроссовки мужские Skechers Sunny Dale</Typography>
        <Box className={styles.productDetails}>
          <Box className={styles.imagePreview}>
            <Box
              component="img"
              className={styles.mainImage}
              alt="product image"
              src={activeImage.path}
            />
            <Box className={styles.sliderWithActions}>
              <Button className={styles.sliderBtn} onClick={handleScrollLeft}>
                <ChevronLeftIcon />
              </Button>
              <ScrollContainer className="scroll-container" mouseScroll={{ buttons: [1] }}>
                <Box className={styles.slider}>
                  {IMAGES.map((item) => (
                    <Box
                      key={item.id}
                      className={styles.sliderImage}
                      onClick={() => {
                        setActiveImage(item);
                      }}
                      style={{
                        border:
                          activeImage === item ? '1px solid #1F4A9D' : '1px solid transparent',
                      }}
                    >
                      <Box
                        component="img"
                        className={styles.image}
                        alt={item.name}
                        src={item.path}
                      />
                    </Box>
                  ))}
                </Box>
              </ScrollContainer>
              <Button className={styles.sliderBtn} onClick={handleScrollRight}>
                <ChevronRightIcon />
              </Button>
            </Box>
          </Box>
          <Box className={styles.details}>
            <Box className={styles.topDetails}>
              <Box className={styles.priceOptions}>
                <Box className={styles.prices}>
                  <Typography className={styles.dangerText}>166 534.00 цена без скидки</Typography>
                  <Box className={styles.mainPrice}>
                    <Typography className={styles.price}>
                      122 566
                      <CurrencyRubleIcon sx={{ stroke: '#000000', strokeWidth: 1 }} />
                    </Typography>
                    <Chip className={styles.discountChip} label="-15%" size="small" />
                  </Box>
                </Box>
                <Box className={styles.packing}>
                  <Chip className={styles.packingChip} label="12 штук в уп." size="medium" />
                  <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    label="Заказ упаковкой"
                  />
                </Box>
                <Divider orientation="horizontal" variant="middle" sx={{ m: 0 }} />
                <Box className={styles.deliveryInfo}>
                  <Box className={styles.infoItem}>
                    <Typography className={styles.title}>Завтра</Typography>
                    <Typography className={styles.subtitle}>Доставка</Typography>
                  </Box>
                  <Box className={styles.infoItem}>
                    <Typography className={styles.title}>7 шт.</Typography>
                    <Typography className={styles.subtitle}>Тарасовка</Typography>
                  </Box>
                  <Box className={styles.infoItem}>
                    <Typography className={styles.title}>7 шт.</Typography>
                    <Typography className={styles.subtitle}>Тарасовка</Typography>
                  </Box>
                </Box>
                <Box className={styles.basketButtons}>
                  {!isInCart ? (
                    <Button
                      disableRipple
                      onClick={() => setIsInCart(true)}
                      className={styles.basketBtn}
                      startIcon={
                        <Box component="img" alt="search icon" src="/icons/basket_white.svg" />
                      }
                    >
                      В корзину
                    </Button>
                  ) : (
                    <OutlinedInput
                      type="number"
                      value={countValue}
                      className={styles.countInput}
                      sx={{ width: `${JSON.stringify(countValue).length + 16}ch !important` }}
                      placeholder="Название запроса"
                      endAdornment={
                        <InputAdornment position="end" className={styles.inputText}>
                          штуки
                          <AddIcon
                            className={styles.inputIcon}
                            onClick={() => setCountValue((current) => current + 1)}
                          />
                        </InputAdornment>
                      }
                      startAdornment={
                        <InputAdornment position="end" className={styles.inputText}>
                          <RemoveIcon
                            onClick={() => {
                              countValue === 1
                                ? setIsInCart(false)
                                : countValue > 1
                                ? setCountValue((current) => current - 1)
                                : () => {};
                            }}
                            className={styles.inputIcon}
                          />
                        </InputAdornment>
                      }
                    />
                  )}
                  <Button
                    className={styles.favoriteBtn}
                    startIcon={<FavoriteBorderIcon />}
                  ></Button>
                </Box>
              </Box>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Box className={styles.options}>
                <Typography className={styles.title}>Характеристики</Typography>
                <Box className={styles.vendorCods}>
                  <Box className={styles.line}>
                    <Box className={styles.lineItem}>
                      <Typography className={styles.title}>ELC00696</Typography>
                      <Typography className={styles.subTitle}>Код поставщика</Typography>
                    </Box>
                    <Box className={styles.lineItem}>
                      <Typography className={styles.title}>ELC0200000696</Typography>
                      <Typography className={styles.subTitle}>Характеристики</Typography>
                    </Box>
                  </Box>
                  <Box className={styles.line}>
                    <Box className={styles.lineItem}>
                      <Typography className={styles.title}>ELC00696</Typography>
                      <Typography className={styles.subTitle}>Код РАЭК</Typography>
                    </Box>
                    <Box className={styles.lineItem}>
                      <Typography className={styles.title}>ELC00696</Typography>
                      <Typography className={styles.subTitle}>Код ЕТМ</Typography>
                    </Box>
                  </Box>
                  <Box className={styles.line}>
                    <Box className={styles.lineItem}>
                      <Typography className={styles.title}>Electric used</Typography>
                      <Typography className={styles.subTitle}>Бренд</Typography>
                    </Box>
                    <Box className={styles.lineItem}>
                      <Typography className={styles.title}>ELC00696</Typography>
                      <Typography className={styles.subTitle}>Серия</Typography>
                    </Box>
                  </Box>
                  <Box className={styles.line}>
                    <Box className={styles.lineItem}>
                      <Typography className={styles.title}>ELC0200000696</Typography>
                      <Typography className={styles.subTitle}>Код производителя</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={styles.description}>
              <Typography className={styles.title}>Описание товара</Typography>
              <Typography className={styles.longText}>
                Создание приверженного покупателя специфицирует неопровержимый комплексный анализ
                ситуации. CTR существенно индуцирует из ряда вон выходящий SWOT-анализ. Воздействие
                на потребителя определяет возрастающий интеграл по поверхности, что известно даже
                школьникам. Отсюда естественно следует, что коммуникация уравновешивает косвенный
                фактор коммуникации. Поле направлений естественно допускает экспериментальный скачок
                функции, таким образом сбылась мечта идиота - утверждение полностью доказано.
                Арифметическая прогрессия притягивает линейно зависимый пул лояльных изданий.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductLayout;
