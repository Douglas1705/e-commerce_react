import Cars from '../../common/cards/Cards';

function Catalog() {
  return (
    <section className="container-global text-center mt-6 ">
      <h2 className="text-2xl sm:text-4xl sm:mt-14">Catalogo de Produtos</h2>
      <Cars />
    </section>
  );
}

export default Catalog;
