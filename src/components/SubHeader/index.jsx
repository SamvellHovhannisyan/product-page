import { Box, Button, Typography } from '@mui/material';
import styles from './SubHeader.module.scss';

const LEFT_CHAPTERS = [
  {
    name: 'Мои заказы',
  },
  {
    name: 'Сотрудники',
  },
  {
    name: 'Шаблоны заказов',
  },
  {
    name: 'Обращения',
  },
];

const SubHeader = () => (
  <Box className={styles.subheader}>
    <Box className={styles.sideBlock}>
      {LEFT_CHAPTERS.map((chapter, index) => (
        <Typography key={index} className={styles.chapterName}>
          {chapter.name}
        </Typography>
      ))}
    </Box>
    <Box className={styles.sideBlock}>
      <Button
        disableRipple
        className={styles.messageBtn}
        startIcon={<Box component="img" alt="search icon" src="/icons/message.svg" />}
      >
        Ваш менеджер
      </Button>
      <Box className={styles.sale}>
        <Box component="img" alt="search icon" src="/icons/percent.svg" />
        <Typography className={styles.text}>Акции</Typography>
      </Box>
      <Typography className={styles.text}>Блог</Typography>
    </Box>
  </Box>
);

export default SubHeader;
