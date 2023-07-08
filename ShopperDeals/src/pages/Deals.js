import React, { useState, useEffect } from 'react';
import Nav from '../Nav';
import Header from '../Header';
import Footer from '../Footer';
import Image1 from '../imageComponents/Image1';
import Image2 from '../imageComponents/Image2';
import Image3 from '../imageComponents/Image3';
import Image4 from '../imageComponents/Image4';
import Image5 from '../imageComponents/Image5';
import Image6 from '../imageComponents/Image6';
import { Link } from 'react-router-dom';

const Deals = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/data1.json');
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <div className="screen_bg">
      <Nav />
      <Header />

      <article>
        <section>
          <div className="introduction">
            <p>Explore our website, shop with confidence, and elevate your wardrobe with our premium selection of men's clothing.</p>
          </div>

          <ul className="cards">
            {data &&
              data.map((item, index) => (
                <li key={index}>
                  {index === 0 && <Image1 />}
                  {index === 1 && <Image2 />}
                  {index === 2 && <Image3 />}
                  {index === 3 && <Image4 />}
                  {index === 4 && <Image5 />}
                  {index === 5 && <Image6 />}

                  <div className="card__header-text">
                    <h3 className="card__title">{item.title}</h3>
                    <span className="card__status">{item.subTitle}</span>
                  </div>

                  <div className="button-container">
                    <Link to={`/product${index + 1}`}>
                      <button className="horizontal-button">View</button>
                    </Link>
                    <button className="horizontal-button">Update</button>
                    <button className="horizontal-button">Delete</button>
                  </div>
                </li>
              ))}
          </ul>
        </section>

        <Footer />
      </article>

      <Footer />
    </div>
  );
};

export default Deals;
