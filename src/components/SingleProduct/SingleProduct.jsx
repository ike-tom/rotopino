/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';
import { Card } from '@mui/material';
import photo from '../../assets/images/nophoto.jpg';
import theme from '../../themes/theme';

import styles from './SingleProduct.module.css';
import getDecimalPart from '../../utils/getDecimalPart';

import { useContext } from 'react';
import CartContext from '../../contexts/CartContext';

function SingleProduct({ imageURL, productName, productCode, stockList, price }) {
  const [quantity, setQuantity] = useState(1);
  const [stock, setStock] = useState(stockList - quantity);
  const cart = useContext(CartContext);

  const addProducts = () => {
    cart.addToCart(productName, productCode, price, quantity);
  };
  const addQuantity = () => {
    if (stock > 0) {
      setQuantity((prevState) => prevState + 1);
      setStock((prevState) => prevState - 1);
    } else return;
  };

  const subtractQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevState) => prevState - 1);
      setStock((prevState) => prevState + 1);
    } else return;
  };

  return (
    <Box className={styles.product__wrapper}>
      <Card>
        <CardMedia height="200" component="img" alt={productName + ' image'} src={photo} />
      </Card>
      <Box
        sx={{ bgcolor: theme.palette.primary.main }}
        className={styles.productName__headerWrapper}>
        <Typography
          sx={{ fontSize: 15, lineHeight: 3.4, color: theme.palette.primary.contrastText }}
          className={styles.productName__header}
          variant="h2">
          {productName}
        </Typography>
      </Box>
      <Box className={styles.productDetails__Wrapper}>
        <Box
          className={styles.productName__descriptionWrapper}
          sx={{ bgcolor: theme.palette.secondary.main }}>
          <Typography
            sx={{
              mb: 0,
              mt: 0.85,
              fontSize: 9,
              lineHeight: 1,
              color: theme.palette.primary.contrastText
            }}
            paragraph>
            symbol
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontSize: 12, lineHeight: 1.75, color: theme.palette.primary.contrastText }}>
            {productCode}
          </Typography>
          <Typography
            sx={{ mb: 0, mt: 1, fontSize: 9, color: theme.palette.primary.contrastText }}
            paragraph>
            W magazynie {stock > 10 ? '>10' : stock} szt.
          </Typography>
        </Box>
        <Box
          className={styles.productPrice__Wrapper}
          sx={{ bgcolor: theme.palette.secondary.main }}>
          <Typography
            paragraph
            sx={{ mb: 0, mt: 2.5, fontSize: 12, color: theme.palette.primary.highlight }}>
            cena
          </Typography>
          <Typography
            sx={{
              mb: 0,
              mt: 0.2,
              fontSize: 30,
              color: theme.palette.primary.highlight,
              fontWeight: 700
            }}
            variant="h3">
            {Math.floor(price)}
            {price % 1 === 0 ? (
              <Typography className={styles.cent} sx={{ fontWeight: 700 }} component="span">
                00
              </Typography>
            ) : (
              <Typography className={styles.cent} component="span">
                {getDecimalPart(price).toFixed(2) * 100}
              </Typography>
            )}
          </Typography>
        </Box>
        <Box className={styles.productQuantityAddButtons__Wrapper}>
          <Box className={styles.productQuantityButtons__Wrapper}>
            <Button
              className={styles.quantityButton}
              sx={{ minWidth: 0, borderRight: 2, borderRadius: 0 }}
              onClick={subtractQuantity}>
              -
            </Button>
            <Typography className={styles.quantityInfo}>{quantity}</Typography>
            <Button
              className={styles.quantityButton}
              sx={{ minWidth: 0, borderLeft: 2, borderRadius: 0 }}
              onClick={addQuantity}>
              +
            </Button>
          </Box>
          <Box
            className={styles.addButton__wrapper}
            sx={{ bgcolor: theme.palette.primary.highlight }}>
            <Button
              onClick={addProducts}
              className={styles.addButton}
              sx={{ borderLeft: 2, borderRadius: 0 }}
              fullWidth>
              Dodaj &gt;&gt;
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

SingleProduct.propTypes = {
  imageURL: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productCode: PropTypes.string.isRequired,
  stockList: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired
};

export default SingleProduct;
