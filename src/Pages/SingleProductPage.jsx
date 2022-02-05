import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductsContext } from '../Context/products_context';
import { single_product_url as url } from '../Utils/constants';
import { formatPrice } from '../Utils/helpers';
import {
   Loading,
   Error,
   ProductImages,
   AddToCart,
   Stars,
   PageHero,
} from '../Components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SingleProductPage = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const {
      single_product_loading: loading,
      single_product_error: error,
      single_product: product,
      fetchSingleProduct,
   } = useProductsContext();

   useEffect(() => {
      fetchSingleProduct(`s${url}${id}`);
   }, [id]);

   useEffect(() => {
      if (error) {
         setTimeout(() => {
            navigate('/');
         }, 3000);
      }
   }, [error]);

   if (loading) {
      return <Loading />;
   }

   if (error) {
      return <Error />;
   }

   return <h4>single product page</h4>;
};

const Wrapper = styled.main`
   .product-center {
      display: grid;
      gap: 4rem;
      margin-top: 2rem;
   }
   .price {
      color: var(--clr-primary-5);
   }
   .desc {
      line-height: 2;
      max-width: 45em;
   }
   .info {
      text-transform: capitalize;
      width: 300px;
      display: grid;
      grid-template-columns: 125px 1fr;
      span {
         font-weight: 700;
      }
   }

   @media (min-width: 992px) {
      .product-center {
         grid-template-columns: 1fr 1fr;
         align-items: center;
      }
      .price {
         font-size: 1.25rem;
      }
   }
`;

export default SingleProductPage;
