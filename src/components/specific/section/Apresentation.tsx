import WomamTablet from '../../../assets/img/woman-tablet.jpg';
import ELogo2 from '../../../assets/img/e-commerce-logo-2.svg';

function Apresentation() {
  return (
    <section className="flex flex-col gap-6 text-center px-6 bg-slate-50">
      <img src={ELogo2} alt="" />
      <p className="text-xl leading-relaxed">
        "Descubra a alegria de comprar com facilidade e conveniência. Bem-vindo
        ao nosso e-commerce, onde suas compras se transformam em experiências
        incríveis!"
      </p>

      <img src={WomamTablet} alt="" className="rounded-xl" />
    </section>
  );
}

export default Apresentation;
