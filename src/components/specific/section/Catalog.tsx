import Cars from '../../common/cards/Cards';

function Catalog() {
  return (
    <section className="container-global text-center mt-6 flex flex-col">
      <h2 className="text-2xl">Catalogo de Produtos</h2>
      <Cars />
    </section>
  );
}

export default Catalog;
