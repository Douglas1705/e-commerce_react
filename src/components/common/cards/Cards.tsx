import { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

function Cards() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar os produtos:', error);
      });
  }, []);
  return (
    <div className="border-4 p-16 flex flex-col gap-12">
      {products.map((product) => (
        <article key={product.id} className="flex flex-col gap-3">
          <img src={product.image} alt={product.title} className="h-full" />
          <h2>{product.title}</h2>
          <p>Valor: ${product.price}</p>
          <input
            type="number"
            placeholder="Quantidade"
            className="rounded-xl"
          />
          <button className="border-2 border-zinc-900 rounded-2xl py-2 text-lg hover:bg-black hover:text-white hover:text-lg">
            {' '}
            Adicionar ao Carrinho
          </button>
        </article>
      ))}
    </div>
  );
}

export default Cards;
