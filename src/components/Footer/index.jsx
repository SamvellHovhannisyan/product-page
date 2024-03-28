import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import styles from './Footer.module.scss';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Divider orientation="horizontal" variant="middle" />
      <Box className={styles.contactInfo}>
        <Box className={styles.leftSide}>
          <Box component="img" alt="Brand logo" src="/icons/logo.svg" className={styles.logo} />
          <Box className={styles.email}>
            <Typography className={styles.title}>8 800 841-95-95</Typography>
            <Typography className={styles.subtitle}>Служба поддержки</Typography>
          </Box>
          <Box className={styles.email}>
            <Typography className={styles.title}>support@sport.ru</Typography>
            <Typography className={styles.subtitle}>Служба поддержки</Typography>
          </Box>
        </Box>
        <Box className={styles.rightSide}>
          <Typography className={styles.chapterName}>Вакансии</Typography>
          <Typography className={styles.chapterName}>Блог</Typography>
          <Typography className={styles.chapterName}>Акции</Typography>
          <Button className={styles.suggestIdea}>Предложить идею</Button>
        </Box>
      </Box>
      <Divider orientation="horizontal" variant="middle" />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box className={styles.column}>
            <Typography className={styles.title}>Женщинам</Typography>
            <Box className={styles.columnItems}>
              <Typography className={styles.item}>Одежда</Typography>
              <Typography className={styles.item}>Обувь</Typography>
              <Typography className={styles.item}>Аксессуары</Typography>
              <Typography className={styles.item}>Белье</Typography>
              <Typography className={styles.item}>Bra fitting</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box className={styles.column}>
            <Typography className={styles.title}>Мужчинам</Typography>
            <Box className={styles.columnItems}>
              <Typography className={styles.item}>Одежда</Typography>
              <Typography className={styles.item}>Обувь</Typography>
              <Typography className={styles.item}>Аксессуары</Typography>
            </Box>
          </Box>{' '}
        </Grid>
        <Grid item xs={3}>
          <Box className={styles.column}>
            <Typography className={styles.title}>Детям</Typography>
            <Box className={styles.columnItems}>
              <Typography className={styles.item}>Одежда</Typography>
              <Typography className={styles.item}>Обувь</Typography>
              <Typography className={styles.item}>Аксессуары</Typography>
              <Typography className={styles.item}>Белье</Typography>
              <Typography className={styles.item}>Игрушки</Typography>
              <Typography className={styles.item}>Малыши</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box className={styles.column}>
            <Typography className={styles.title}>Виды спорта</Typography>
            <Box className={styles.columnItems}>
              <Typography className={styles.item}>Велоспорт</Typography>
              <Typography className={styles.item}>Туризм</Typography>
              <Typography className={styles.item}>Тренажеры и фитнес</Typography>
              <Typography className={styles.item}>Командные виды спорта</Typography>
              <Typography className={styles.item}>Самокаты</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Divider orientation="horizontal" variant="middle" />
      <Box className={styles.policy}>
        <Box className={styles.fastActions}>
          <Box className={styles.iconAction}>
            <Box component="img" className={styles.icon} alt="search icon" src="/icons/file.svg" />
            <Typography className={styles.text}>PDF презентация</Typography>
          </Box>
          <Box className={styles.iconAction}>
            <Box component="img" className={styles.icon} alt="search icon" src="/icons/video.svg" />
            <Typography className={styles.text}>Видео инструкция</Typography>
          </Box>
          <Box className={styles.iconAction}>
            <Box component="img" className={styles.icon} alt="search icon" src="/icons/info.svg" />
            <Typography className={styles.text}>FAQ</Typography>
          </Box>
          <Box className={styles.iconAction}>
            <Box
              component="img"
              className={styles.icon}
              alt="search icon"
              src="/icons/youtube.svg"
            />
            <Typography className={styles.textYoutube}>Мы на YouTube</Typography>
          </Box>
          <Box className={styles.iconAction}>
            <Typography className={styles.text}>Политика конфиденциальности</Typography>
          </Box>
          <Box className={styles.iconAction}>
            <Typography className={styles.text}>Лицензионное соглашение</Typography>
          </Box>
        </Box>
        <Typography className={styles.description}>
          Настоящая Политика обработки персональных данных разработана в соответствии с Конституцией
          Российской Федерации, Трудовым кодексом Российской Федерации, Гражданским кодексом
          Российской Федерации, Федеральным законом от 27 июля 2006 года 149-ФЗ &quot;Об информации,
          информационных технологиях и о защите информации&quot;,
        </Typography>
      </Box>
      <Box className={styles.bottomBrand}>
        <Box component="img" alt="Brand logo" src="/icons/logo_grey.svg" className={styles.logo} />
        <Typography className={styles.text}>Разработка платформы</Typography>
      </Box>
    </Box>
  );
};
export default Footer;
