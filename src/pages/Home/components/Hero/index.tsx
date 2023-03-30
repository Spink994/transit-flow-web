import Button from '../../../../components/Button';

function Hero() {
  return (
    <section className="h-[798px] flex w-full bg-hero-bg bg-no-repeat">
      <div className="h-full max-w-[1200px] w-full flex flex-col justify-center gap-6 mx-auto px-8">
        <h6 className="w-max px-[9px] border-l-[4px] border-primary-1 font-Rubik text-[14px] text-white bg-[rgba(4,28,55,0.5)]">
          Logistics & Supply Chain Solutions
        </h6>
        <h1 className="max-w-[571px] text-[60px] font-Rubik font-7 text-white leading-[71px]">
          Your Gateway <br /> to any Destination <br /> in the World
        </h1>
        <p className="max-w-[571px] text-white">
          In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in
          arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
          finibus, enim diam interdum nulla, sed laoreet risus lectus.{' '}
        </p>

        <Button type="button" variant="primary" label="Explore More" />
      </div>
    </section>
  );
}

export default Hero;
