import React, { useEffect, useState } from 'react';
import Bar from '../components/Bar';
import { LayoutContent } from '../components/Containers';
import { gql, useQuery } from '@apollo/client';
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Table, Container, Breadcrumbs, Typography, Button } from '@material-ui/core';
import { Add } from '@material-ui/icons'

const GET_DISH = gql`
  {
    getDishes{
      name
      id
      detail
      price{
        now_price
        offer_price
      }
    }
  }
`;

const Dish = () => {
  const { loading, error, data } = useQuery(GET_DISH);
  const [ dishes, setDishes ] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      setDishes(data.getDishes);
    }
  }, [loading, error, data, dishes]);

  return (
    <>
      <Bar/>
      <LayoutContent>
        <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="textPrimary">Gustov</Typography>
          <Typography color="textPrimary">Dish</Typography>
          <Typography color="textPrimary">List</Typography>
        </Breadcrumbs>
          <Button variant="outlined" color="primary">
            <Add/>
          </Button>
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Nº</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Detail</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Price offer</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  (loading) ? 
                    (<h3>"Cargando..."</h3>)
                    :
                    (
                      dishes.map((dish, i) => (
                        <TableRow key={dish.id}>
                          <TableCell component="th" scope="row">
                            {i+1}
                          </TableCell>
                          <TableCell align="right">{dish.name}</TableCell>
                          <TableCell align="right">{dish.detail}</TableCell>
                          <TableCell align="right">{dish.price.now_price}</TableCell>
                          <TableCell align="right">{dish.price.offer_price}</TableCell>
                        </TableRow>
                      ))
                    )
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </LayoutContent>
    </>
  );
}

export default Dish;