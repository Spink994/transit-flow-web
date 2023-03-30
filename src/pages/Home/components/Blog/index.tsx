import Button from '../../../../components/Button';
import TitleHeader from '../../../../components/TitleHeader';

import BlogImageOne from '../../../../assets/images/latest-news-image-one.jpg';
import BlogImageTwo from '../../../../assets/images/latest-news-image-two.jpg';
import BlogImageThree from '../../../../assets/images/latest-news-image-three.jpg';

import BlogCard from './BlogCard';

function Blog() {
  return (
    <section>
      <div className="max-w-[1000px] flex flex-col items-center py-[100px] w-full mx-auto px-8">
        {/* Header */}
        <TitleHeader
          titleLabel="Our Blog"
          headerLabel="Our Latest News"
          extraStyles="bg-secondary-1 mx-auto"
        />

        {/* News container */}
        <div className="w-full flex flex-col mt-[34px]">
          {/* News */}
          <BlogCard
            blogImage={BlogImageOne}
            dateDay="08"
            dateMonth="September"
            newsBullets={[
              'Urgent transport solutions',
              'Reliable & experienced staffs',
              'Urgent transport solutions',
              'Reliable & experienced staffs',
            ]}
            newsHeader="Inland freight a worthy solution for your business"
            newSubText="   We are dedicated in creating added value for our customers by
            implementing modern technology in our work."
          />

          <BlogCard
            blogImage={BlogImageTwo}
            dateDay="12"
            dateMonth="September"
            newsBullets={[
              'Urgent transport solutions',
              'Reliable & experienced staffs',
              'Urgent transport solutions',
              'Reliable & experienced staffs',
            ]}
            newsHeader="How technology can help redraw the supply chain map"
            newSubText="We are dedicated in creating added value for our customers by implementing modern technology in our work."
          />

          <BlogCard
            blogImage={BlogImageThree}
            dateDay="25"
            dateMonth="September"
            newsBullets={[
              'Urgent transport solutions',
              'Reliable & experienced staffs',
              'Urgent transport solutions',
              'Reliable & experienced staffs',
            ]}
            newsHeader="Five things you should have ready for your broker"
            newSubText="We are dedicated in creating added value for our customers by implementing modern technology in our work."
          />
        </div>

        <div className="w-full h-4 mt-[30px]" />
        <Button label="More Blog" variant="secondary" type="button" />
      </div>
    </section>
  );
}

export default Blog;
