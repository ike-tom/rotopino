import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import styles from './Cart.module.css';
import theme from '../../themes/theme';
import { Button } from '@mui/material';
import { useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import calculateValueOfBasket from '../../utils/calculateValueOfBasket';
import { useEffect } from 'react';
import ProductInCart from '../ProductInCart/ProductInCart';
import getDecimalPart from '../../utils/getDecimalPart';
import { useState } from 'react';

function Cart() {
  const cart = useContext(CartContext);
  const [cartValue, setCartValue] = useState(0);
  useEffect(() => {
    setCartValue(calculateValueOfBasket(cart.cart));
  }, [cart.cart]);

  const addProductsToCart = cart.cart.map((item, i) => {
    return (
      <ProductInCart
        key={i}
        productName={item.productName}
        productCode={item.productCode}
        price={item.price}
        quantity={item.quantity}
      />
    );
  });

  return (
    <Box className={styles.cart__wrapper} sx={{ bgcolor: theme.palette.primary.main }}>
      <Box className={styles.cartHeader__wrapper} sx={{ bgcolor: theme.palette.secondary.main }}>
        <Typography
          className={styles.cartHeader}
          sx={{ color: theme.palette.primary.highlight, fontWeight: 700, fontSize: 15 }}>
          Twój zestaw systemu ONE+
        </Typography>
      </Box>
      <Box className={styles.productsHeader__wrapper}>
        <Typography
          className={styles.productsHeader}
          sx={{ color: theme.palette.primary.highlight, fontSize: 14, fontWeight: 700 }}>
          DODANE PRODUKTY
        </Typography>
      </Box>
      {cart.cart.length === 0 ? (
        <Box className={styles.products__wrapper} sx={{ bgcolor: theme.palette.secondary.main }}>
          <Typography
            className={styles.noProduct__description}
            sx={{ fontSize: 14, color: theme.palette.primary.contrastText }}>
            Jeżeli nie posiadasz jeszcze produktu pamiętaj o jego dodaniu.
          </Typography>
        </Box>
      ) : (
        addProductsToCart
      )}
      <Box className={styles.priceSummaryButton__wrapper}>
        <Box className={styles.priceSummary__description}>
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 700,
              color: theme.palette.primary.contrastText
            }}>
            RAZEM:
            <Typography
              sx={{
                mb: 0,
                mt: 0.2,
                fontSize: 25,
                fontWeight: 700,
                color: theme.palette.primary.highlight,
                lineHeight: 1
              }}
              component="span">
              {Math.floor(cartValue)}
              {cartValue % 1 === 0 ? (
                <Typography
                  className={styles.cent}
                  component="span"
                  sx={{ fontWeight: 700, lineHeight: 1 }}>
                  00
                </Typography>
              ) : (
                <Typography
                  className={styles.cent}
                  component="span"
                  sx={{ fontWeight: 700, lineHeight: 1 }}>
                  {getDecimalPart(cartValue).toFixed(2) * 100}
                </Typography>
              )}
            </Typography>
          </Typography>
        </Box>
        <Box className={styles.goToCart__wrapper}>
          <Button
            sx={{
              bgcolor: theme.palette.secondary.light,
              color: theme.palette.secondary.main,
              '&:hover': {
                color: theme.palette.primary.contrastText,
                backgroundColor: theme.palette.primary.highlight
              },
              fontSize: 16,
              letterSpacing: 1,
              borderRadius: 0
            }}
            className={styles.goToCart__button}>
            DO KOSZYKA
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;
