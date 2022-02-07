import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import styles from './ProductInCart.module.css';
import theme from '../../themes/theme';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

function ProductInCart({ productName, productCode, price, quantity }) {
  return (
    <Box className={styles.products__wrapper} sx={{ bgcolor: theme.palette.secondary.main }}>
      <Typography
        className={styles.noProduct__description}
        sx={{ fontSize: 14, color: theme.palette.primary.contrastText }}>
        Nazwa: {productName}
      </Typography>
      <Typography
        className={styles.noProduct__description}
        sx={{ fontSize: 14, color: theme.palette.primary.contrastText }}>
        Symbol: {productCode}
      </Typography>
      <Typography
        className={styles.noProduct__description}
        sx={{ fontSize: 14, color: theme.palette.primary.contrastText }}>
        Cena: {price.toFixed(2)}
      </Typography>
      <Typography
        className={styles.noProduct__description}
        sx={{ fontSize: 14, color: theme.palette.primary.contrastText }}>
        Ilość: {quantity}
      </Typography>
      <Button sx={{ color: theme.palette.primary.highlight }}>USUŃ Z KOSZYKA</Button>
    </Box>
  );
}

ProductInCart.propTypes = {
  productName: PropTypes.string.isRequired,
  productCode: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
};

export default ProductInCart;
