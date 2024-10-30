import WomamTablet from '../../../assets/img/woman-tablet.jpg';
import ELogo2 from '../../../assets/img/e-commerce-logo-2.svg';

function Apresentation() {
  return (
    <section
      className="container-global flex flex-col gap-10 text-center px-6 bg-slate-50 pt-16 md:flex-row md:items-center
    "
    >
      <article className="md:w-6/12 flex flex-col gap-10">
        <h1>
          <img src={ELogo2} alt="" />
          <p>Seja Bem vindo ao meu E-commerce</p>
        </h1>
        <p className="text-xl leading-relaxed">
          "Descubra a alegria de comprar com facilidade e conveniência.
          Bem-vindo ao nosso e-commerce, onde suas compras se transformam em
          experiências incríveis!"
        </p>
      </article>

      <img src={WomamTablet} alt="" className="rounded-xl md:w-5/12" />
    </section>
  );
}

export default Apresentation;
