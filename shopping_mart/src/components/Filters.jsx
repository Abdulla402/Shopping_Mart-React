
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { CartState } from '../context/Context';
import Rating from './Rating';

const Filters = () => {
  const {
    productDispatch,
    productState: { byStock, byFastDelivery, sort, byRating },
  } = CartState();

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
      <Form.Check
        inline
        label="Ascending"
        name="sort-group"
        type="radio"
        id="sort-ascending"
        onChange={() =>
          productDispatch({
            type: 'SORT_BY_PRICE',
            payload: 'lowToHigh',
          })
        }
        checked={sort === 'lowToHigh'}
      />
      </span>
      <span>
      <Form.Check
        inline
        label="Descending"
        name="sort-group"
        type="radio"
        id="sort-descending"
        onChange={() =>
          productDispatch({
            type: 'SORT_BY_PRICE',
            payload: 'highToLow',
          })
        }
        checked={sort === 'highToLow'}
      />
      </span>
      <span>
      <Form.Check
        inline
        label="Include Out of Stock"
        name="filter-group"
        type="checkbox"
        id="filter-stock"
        onChange={() =>
          productDispatch({
            type: 'FILTER_BY_STOCK',
          })
        }
        checked={byStock}
      />
      </span>
      <span>
      <Form.Check
        inline
        label="Fast Delivery Only"
        name="filter-group"
        type="checkbox"
        id="filter-delivery"
        onChange={() =>
          productDispatch({
            type: 'FILTER_BY_DELIVERY',
          })
        }
        checked={byFastDelivery}
      />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          onClick={i =>
            productDispatch({
              type: 'FILTER_BY_RATING',
              payload: i + 1,
            })
          }
          style={{ cursor: 'pointer' }}
        />
      </span>
      <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: 'CLEAR_FILTERS',
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
