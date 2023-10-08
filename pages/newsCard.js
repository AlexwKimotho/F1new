import Link from 'next/link';

const NewsCard = ({ title, image, description }) => (
  <div className="col-md-3 h-700 mb-4">
    <div className="card2 h-700">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
);

const BigCard = ({ title, children }) => (
  <div className="card2 mb-23 col-xl-6">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <div className="row">{children}</div>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="container">
      <BigCard title="News">
        <NewsCard
          title="News Title 1"
          image="image_url_1.jpg"
          description="Description for News 1"
        />
        <NewsCard
          title="News Title 2"
          image="image_url_2.jpg"
          description="Description for News 2"
        />
        <NewsCard
          title="News Title 3"
          image="image_url_3.jpg"
          description="Description for News 3"
        />
      </BigCard>

     
    </div>
  );
};

export default Home;
