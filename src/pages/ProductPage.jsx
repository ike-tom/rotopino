import Grid from '@mui/material/Grid';
import SingleProduct from '../components/SingleProduct/SingleProduct';
import styles from './ProductPage.module.css';
import Cart from '../components/Cart/Cart';

function ProductPage() {
  return (
    <>
      <Grid container>
        <Grid
          className={styles.productsGrid__wrapper}
          container
          spacing={0}
          rowSpacing={3}
          item
          sx={{ mb: 1 }}
          xs={12}
          sm={12}
          md={8}
          lg={9}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <SingleProduct
              imageURL="../assets/images/nophoto.jpg"
              productName="Nazwa"
              productCode="ONE+RWSL1801M"
              stockList={12}
              price={326.0}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <SingleProduct
              imageURL="../assets/images/nophoto.jpg"
              productName="Nazwa"
              productCode="ONE+R18JS-0"
              stockList={12}
              price={344.0}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <SingleProduct
              imageURL="../assets/images/nophoto.jpg"
              productName="Nazwa"
              productCode="ONE+RRS1801M"
              stockList={12}
              price={274.0}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <SingleProduct
              imageURL="../assets/images/nophoto.jpg"
              productName="Nazwa"
              productCode="ONE+R18MT-0"
              stockList={12}
              price={396.0}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <SingleProduct
              imageURL="../assets/images/nophoto.jpg"
              productName="Nazwa"
              productCode="ONE+R18AG7-0"
              stockList={12}
              price={559.0}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <SingleProduct
              imageURL="../assets/images/nophoto.jpg"
              productName="Nazwa"
              productCode="ONE+R18TR-0"
              stockList={12}
              price={448.99}
            />
          </Grid>
        </Grid>
        <Grid className={styles.cart__wrapper} item xs={12} sm={12} md={4} lg={3}>
          <Cart />
        </Grid>
      </Grid>
    </>
  );
}

export default ProductPage;
