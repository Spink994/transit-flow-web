import LiquidTransportaion from '../../../../assets/images/liquid-transportation.jpg';
import PackagingSolutions from '../../../../assets/images/packaging-solutions.jpg';
import ContractLogistics from '../../../../assets/images/contract-logistics.jpg';
import WareHouse from '../../../../assets/images/warehouse-distribution.jpg';
import SpecialisedTransport from '../../../../assets/images/specialised-transport.jpg';

import  Button  from '../../../../components/Button';

function Transporting() {
  return (
    <main className="-translate-y-[200px]">
      <section>
        <div className="flex max-w-[1672px] w-full gap-[52px] z-10 mx-auto px-8 translate-y-[125px]">
          <div className="w-full justify-center">
            <h1 className="font-Rubik font-6 text-[35px] text-center text-primary-2 mb-[35px]">
              Transporting Across The World
            </h1>

            <div className="grid grid-cols-5 gap-[18px]">
              <img
                className="max-h-[408px]"
                src={LiquidTransportaion}
                alt="liquid-transportation"
              />
              <img
                className="max-h-[408px]"
                src={PackagingSolutions}
                alt="packaging-solutions"
              />
              <img
                className="max-h-[408px]"
                src={ContractLogistics}
                alt="contract-logistics"
              />
              <img className="max-h-[408px]" src={WareHouse} alt="warehouse" />
              <img
                className="max-h-[408px]"
                src={SpecialisedTransport}
                alt="specialised-transport"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gradient-1 h-[400px] flex flex-col justify-center items-center  w-full">
        <div className="mt-4 w-full h-4" />
        <Button variant="secondary" label="More Work" type="button" />
      </div>
    </main>
  );
}

export default Transporting;
