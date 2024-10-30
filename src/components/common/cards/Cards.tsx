import { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

function Cards() {
  const [produtos, setProdutos] = useState<Product[]>([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  const handleAdicionarAoCarrinho = (produtoId: number) => {
    const inputQuantidade = document.getElementById(
      `quantidade-${produtoId}`,
    ) as HTMLInputElement;
    const valorQuantidade = inputQuantidade ? inputQuantidade.value : '';

    if (
      inputQuantidade &&
      valorQuantidade.trim() !== '' &&
      !isNaN(Number(valorQuantidade)) &&
      Number(valorQuantidade) > 0
    ) {
      const produto = produtos.find((produto) => produto.id === produtoId);
      const carrinhoAtual = JSON.parse(
        localStorage.getItem('carrinho') || '[]',
      );

      const produtoNoCarrinho = carrinhoAtual.find(
        (item: any) => item.id === produtoId,
      );

      if (produtoNoCarrinho) {
        produtoNoCarrinho.quantidade += Number(valorQuantidade);
      } else {
        carrinhoAtual.push({ ...produto, quantidade: Number(valorQuantidade) });
      }

      localStorage.setItem('carrinho', JSON.stringify(carrinhoAtual));

      setMostrarModal(true);
      setTimeout(() => setMostrarModal(false), 2000); // Fecha o modal após 2 segundos
    } else {
      inputQuantidade.value = '';
      alert(
        'Por favor, insira uma quantidade válida antes de adicionar ao carrinho.',
      );
    }
  };

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar os produtos:', error);
      });
  }, []);
  return (
    <div className="p-16 flex flex-col gap-12 scroll-smooth sm:flex-row  sm:flex-wrap sm:justify-between lg:gap-24">
      {produtos.map((product) => (
        <article
          key={product.id}
          className="flex flex-col gap-3 sm:w-3/12 lg:w-2/12"
        >
          <img
            src={product.image}
            alt={product.title}
            className="object-contain  m-auto"
          />

          <h2>{product.title}</h2>
          <p>Valor: ${product.price}</p>
          <input
            id={`quantidade-${product.id}`}
            type="number"
            placeholder="Quantidade"
            className="rounded-xl text-center"
          />

          <button
            className="border-2 border-zinc-900 rounded-2xl py-2 text-lg hover:bg-black hover:text-white hover:text-lg"
            onClick={() => handleAdicionarAoCarrinho(product.id)}
          >
            Adicionar ao Carrinho
          </button>
        </article>
      ))}
      {mostrarModal && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 mt-4 border-2 border-black bg-white text-black p-4 rounded z-50">
          <p>Produto inserido ao carrinho!</p>
        </div>
      )}
    </div>
  );
}

export default Cards;
