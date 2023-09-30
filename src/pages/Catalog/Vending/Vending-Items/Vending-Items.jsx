import React, { useEffect } from "react";
import rating from "../../../../assets/Catalog/Coffee/Filters/rating.svg";
import { useState } from "react";
import axios from "axios";
import CustomContext from "../../../utils/Context.js"
import { Link } from "react-router-dom";

const VendingItems = () => {
  const [cards, setCards] = useState([]);
  const [modal, setModal] = useState("showC");
  const [sorting, setSorting] = useState("Сортировка");
  const {types} = useContext(CustomContext)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const url = `https://gospodin-rusan.onrender.com/Products-for-vending-${types.type}?`;
    axios
      .get(
        url +
          `${
            sorting == "По убыванию цены"
              ? "_sort=price&_order=desc"
              : sorting == "По возрастанию цены"
              ? "_sort=price&_order=asc"
              : sorting == "По рейтингу"
              ? "_sort=rating&_order=desc"
              : ""
          }`
      )
      .then((resp) => {
        setCards(resp.data);
      })
      .catch((error) => {
        if (error.resp) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error: ", error.messege);
        }
        console.log(error.config);
      });
  }, [sorting, types]);
  const closeSorting = () => {
    document.body.children[1].childNodes[5].addEventListener(
      "click",
      showSorting
    );
    setModal("closeC");
  };
  const showSorting = () => {
    setModal("showC");
  };
  return (
    <div className="tea-cards-back cun">
      <div className="coffee__cards">
        <div className="container">
          <div className="coffee__cards-inner">
            <h4 className={`cortirovka siuu ${modal}`}>Тебе с пенкой?</h4>
            <h4 className={`cortirovka ${modal}`} onClick={closeSorting}>
              {sorting}
            </h4>
            <div
              className={`c-sorting-modal-window ${modal}`}
              style={{ height: "99px" }}
            >
              <ul>
                <div className="sorting-title">
                  {sorting} <span>&times;</span>
                </div>
                <li
                  className="sorting-item"
                  onClick={(e) => setSorting(e.target.innerHTML)}
                >
                  По возрастанию цены
                </li>
                <li
                  className="sorting-item"
                  onClick={(e) => setSorting(e.target.innerHTML)}
                >
                  По рейтингу
                </li>
              </ul>
            </div>
            <div className="coffee__cards-inner-row">
              {cards.map((item) => (
                <div key={item.id} className="coffee__cards-inner-row-card">
                  <div className="tea__cards-inner-row-card-top">
                    <div className="tea__cards-inner-row-card-top-right forDF">
                      <div className="tea__cards-inner-row-card-center-right-rating">
                        <div
                          className="rating"
                          style={{
                            backgroundImage: `url(${rating})`,
                            height: "12px",
                            width: `${
                              Math.floor(item.rating[0]) + item.rating[2]
                            }px`,
                            backgroundSize: "50px",
                            backgroundRepeat: "no-repeat",
                            position: "relative",
                          }}
                        ></div>
                        <div className="forDF kkdwe">
                          <h4>{item.rating}</h4>
                          <small>({item.review} отзыва)</small>
                        </div>
                      </div>
                      <div className="coffee__cards-inner-row-card-top-right">
                        <select>
                          <option value="100g">100г</option>
                          <option value="300g">300г</option>
                          <option value="500g">500г</option>
                          <option value="1000g">1000г</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="coffee__cards-inner-row-card-center tocenter chtbtipvcntr">
                    <Link to="/catalog/wanding" className="tea-img-block">
                      <img
                        src={item.image}
                        className="card-image"
                        height="221px"
                        alt=""
                      />
                    </Link>
                    <p></p>
                  </div>
                  <div className="coffee__cards-inner-row-card-bottom">
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                    <Link to="/catalog/wanding" className="treedots">
                      Больше
                    </Link>
                    <>...</>
                    <div className="coffee__cards-inner-row-card-bottom-bottom tocenter">
                      <button
                        style={{
                          width: "230px",
                          height: "34px",
                          marginTop: "25px",
                        }}
                      >
                        Оставить заявку
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <br />
            <br />
            <button>Показать еще</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendingItems;
