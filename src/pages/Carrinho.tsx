import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Produto {
  id: number;
  title: string;
  price: number;
  image: string;
  quantidade: number;
}

function Carrinho() {
  const [carrinho, setCarrinho] = useState<Produto[]>([]);
  const [mensagem, setMensagem] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const carrinhoLocal = JSON.parse(localStorage.getItem('carrinho') || '[]');
    setCarrinho(carrinhoLocal);
  }, []);

  const handleRemoverProduto = (produtoId: number) => {
    const novoCarrinho = carrinho.filter((produto) => produto.id !== produtoId);
    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  const handleAtualizarQuantidade = (produtoId: number, quantidade: number) => {
    const novoCarrinho = carrinho.map((produto) =>
      produto.id === produtoId ? { ...produto, quantidade } : produto,
    );
    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  const handleFinalizarCompra = () => {
    if (totalValor === 0) {
      setMensagem('Nenhum produto selecionado');
    } else {
      localStorage.removeItem('carrinho'); // Limpa o localStorage
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    navigate('/'); // Redireciona para a página inicial
  };

  const totalQuantidade = carrinho.reduce(
    (acc, produto) => acc + produto.quantidade,
    0,
  );

  const totalValor = carrinho.reduce(
    (acc, produto) => acc + produto.price * produto.quantidade,
    0,
  );

  return (
    <section className="container-global flex flex-col gap-5 px-5 pt-16 ">
      <h2 className="text-center text-3xl">Carrinho de Compras</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {carrinho.map((produto) => (
          <div
            key={produto.id}
            className="text-center flex flex-col gap-4 border-2 border-gray-400 rounded-xl p-2 "
          >
            <img
              src={produto.image}
              alt={produto.title}
              className="h-full w-10 mx-auto"
            />
            <h2>{produto.title}</h2>
            <p>Valor: R${produto.price}</p>
            <input
              type="number"
              value={produto.quantidade}
              // eslint-disable-next-line react/jsx-no-bind
              onChange={(e) =>
                handleAtualizarQuantidade(produto.id, Number(e.target.value))
              }
              className="text-center w-3/4 mx-auto text-2xl"
            />
            <button
              // eslint-disable-next-line react/jsx-no-bind
              onClick={() => handleRemoverProduto(produto.id)}
              className="border-2 border-black rounded-xl text-2xl hover:bg-red-600 hover:text-white hover:border-red-500"
            >
              Remover
            </button>
          </div>
        ))}
      </div>
      <article className="flex flex-col py-5 gap-5 md:text-center">
        <div className="flex flex-col gap-3 text-2xl">
          <p>Total de Itens: {totalQuantidade}</p>
          <p>Valor Total: R${totalValor.toFixed(2)}</p>
        </div>
        <button
          className="bg-green-600 text-white p-3 rounded-2xl text-2xl hover:bg-green-400 md:w-4/12 md:m-auto"
          // eslint-disable-next-line react/jsx-no-bind
          onClick={handleFinalizarCompra}
        >
          Finalizar Compra
        </button>
        {mensagem && <p className="text-red-500">{mensagem}</p>}
      </article>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-md shadow-lg text-center w-2/3">
            <h2 className="text-2xl font-bold mb-4">Parabéns pela Compra!</h2>
            <p>
              Sua compra foi realizada com sucesso. Agradecemos a sua
              preferência e esperamos vê-lo novamente em breve!
            </p>
            <button
              // eslint-disable-next-line react/jsx-no-bind
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 md:w-1/12"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Carrinho;
