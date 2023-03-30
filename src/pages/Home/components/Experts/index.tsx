import TitleHeader from '../../../../components/TitleHeader';

import ExpertImageOne from '../../../../assets/images/expert-one.jpg';
import ExpertImageTwo from '../../../../assets/images/expert-two.jpg';
import ExpertImageThree from '../../../../assets/images/expert-three.jpg';

import Twitter from '../../../../assets/icons/twitter-colored.svg';
import Linkedin from '../../../../assets/icons/linkedin-colored.svg';
import Facebook from '../../../../assets/icons/facebook-colored.svg';
import Instagram from '../../../../assets/icons/instagram-colored.svg';
import ExpertCard from './ExpertCard';

function Experts() {
  return (
    <section>
      <div className="max-w-[1200px] flex flex-col items-center py-[100px] w-full mx-auto px-8">
        {/* Header */}
        <TitleHeader
          titleLabel="The Transporters"
          headerLabel="Meet Expert Team"
          extraStyles="bg-secondary-1 mx-auto"
        />

        {/* Expert images */}
        <div className="w-full flex gap-[54px] mt-[34px]">
          <ExpertCard
            socials={[Twitter, Facebook, Instagram]}
            profession="Designer"
            name="Jessca Arow"
            expertImage={ExpertImageOne}
          />

          <ExpertCard
            socials={[Linkedin, Twitter, Facebook, Instagram]}
            profession="Designer"
            name="Kathleen Smith"
            expertImage={ExpertImageTwo}
          />

          <ExpertCard
            socials={[Facebook, Instagram]}
            profession="Designer"
            name="Rebecca Tylor"
            expertImage={ExpertImageThree}
          />
        </div>
      </div>
    </section>
  );
}

export default Experts;
