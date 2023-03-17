import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CheckPhoto from "./Check-photo/Check.svg";
import DeleteBtn from "./Check-photo/Close.svg";
import Master from "./Check-photo/MasterCard.svg";
import Visa from "./Check-photo/Visa.svg";
import { CustomContext } from "../../utils/Context";

const Cart = () => {
  const { cart, plusOneCart, minusOneCart, delCart } =
    useContext(CustomContext);
  // const total = cart.reduce(
  //     (prev, curr) =>
  //     prev + curr.count * curr.price,
  //     0
  // )
  return (
    <div className="back-cart">
      <div className="Cart">
        <div className="container">
          <div className="Cart-inner">
            <div className="Cart-left">
              <ul className="Cart-ul">
                <li>Главная</li>
                <li>Корзина</li>
              </ul>
            </div>
            {/* Карточка товара в корзине */}
            <div className="Cart-product">
              <div className="Cart-inside">
                <div className="Cart-product-up">
                  <h2>Товара в корзине</h2>
                  <button className="Product-delete">Удалить все</button>
                </div>
                <div className="Cart-product-middle">
                  <ul className="Cart-product-mid-left">
                    <li>Удалить товар</li>
                    <li>Наименование товара</li>
                  </ul>
                  <ul className="Cart-product-mid-right">
                    <li>Цена</li>
                    <li>Количество</li>
                    <li>Скидка(%10)</li>
                    <li>Итого</li>
                  </ul>
                </div>
                <div className="Cart-card">
                  <div className="Card-left">
                    <button className="Card-close">
                      <img src={DeleteBtn} alt="" />
                    </button>
                    <img src={CheckPhoto} alt="" />
                    <div className="columbia">
                      <h3>Columbia Supremo</h3>
                      <p>мытая, натуральная, смесь</p>
                      <p>250 г.</p>
                    </div>
                  </div>
                  <div className="Card-right">
                    <p>270 ₽</p>
                    <div className="Card-click">
                      <button>-</button>
                      <p>1</p>
                      <button>+</button>
                    </div>
                    <p>27 ₽</p>
                    <p>243 ₽</p>
                  </div>
                </div>
                <div className="Cart-card">
                  <div className="Card-left">
                    <button className="Card-close">
                      <img src={DeleteBtn} alt="" />
                    </button>
                    <img src={CheckPhoto} alt="" />
                    <div className="columbia">
                      <h3>Columbia Supremo</h3>
                      <p>мытая, натуральная, смесь</p>
                      <p>250 г.</p>
                    </div>
                  </div>
                  <div className="Card-right">
                    <p>270 ₽</p>
                    <div className="Card-click">
                      <button>-</button>8<p>1</p>
                      <button>+</button>
                    </div>
                    <p>27 ₽</p>
                    <p>243 ₽</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Карточка товара в корзине */}
            {/* Карточка доставки */}
            <div className="Cart-delivery">
              <div className="Delivery-inside">
                <div className="Delivery-head">
                  <h2>Доставка</h2>
                </div>
                <div className="Delivery-input">
                  <div className="Delivery-left">
                    <input type="text" placeholder="Имя"></input>
                    <input type="text" placeholder="Фамилия"></input>
                    <input type="number" placeholder="Телефон"></input>
                    <input type="email" placeholder="Email"></input>
                    <input type="text" placeholder="Название компании"></input>
                  </div>
                  <div className="Delivery-right">
                    <input type="text" placeholder="Страна"></input>
                    <input type="text" placeholder="Город"></input>
                    <input type="text" placeholder="Улица, дом"></input>
                    <input type="number" placeholder="Почтовый индекс"></input>
                    <input
                      type="text"
                      placeholder="Комментарий к заказу (необязательно)"
                    ></input>
                  </div>
                </div>
                <div>
                  <button className="Delivery-btn">Рассчитать доставку</button>
                </div>
              </div>
            </div>
            {/* Карточка доставки */}
            {/* Карточка промокода */}
            <div className="Cart-down">
              <div className="Cart-promo">
                <div className="Promo-inside">
                  <div className="Promo-head">
                    <h2>Промокод</h2>
                    <p>
                      Введите подарочный промокод в поле ниже и получите скидку
                      на заказ до 20%. Скидка не распространяется на доставку
                    </p>
                  </div>
                  <input
                    type="text"
                    className="Promo-inp"
                    placeholder="Введите промокод"
                  ></input>
                  <button className="Promo-btn">Ввести промокод</button>
                </div>
              </div>
              <div className="Cart-total">
                <div className="Total-inside">
                  <div className="Total-head">
                    <h2>Итог: 486 ₽</h2>
                    <img src={Master} alt="" />
                    <img src={Visa} alt="" />
                  </div>
                  <div className="Total-skidka">
                    <p>Подытог: 540 ₽</p>
                    <p>Скидка: 54 ₽ (10%)</p>
                  </div>
                  <div className="dostavka">
                    <div className="Dostavka-p">
                      <p>Доставка:</p>
                    </div>
                    <div className="Dostavka-vid">
                      <button className="Btne" />
                      <p>СДЭК - до двери 390 ₽</p>
                      <button className="Btne" />
                      <p>Почта России 300 ₽</p>
                      <button className="Btne" />
                      <p>DPD - курьер, 3 дн 427 ₽</p>
                    </div>
                  </div>
                  <div className="Total-down">
                    <button className="Total-btn">Оплатить заказ</button>
                    <p>
                      Ваши персональные данные будут использоваться для
                      управления доступом к вашей учетной записи и для других
                      целей, описанных в нашем документе политика
                      конфиденциальности.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Карточка промокода */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;