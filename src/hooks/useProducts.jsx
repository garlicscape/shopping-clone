import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getProductsData, addNewProduct } from '../api/firebase';

export default function useProducts() {
  const QueryClient = useQueryClient();
  const productsQuery = useQuery(['products'], getProductsData, {
    staleTime: 1000 * 60,
  });
  const addProduct = useMutation(
    ({ product, url }) => addNewProduct(product, url),
    {
      onSuccess: () => QueryClient.invalidateQueries(['products']),
    }
  );

  return { productsQuery, addProduct };
}
