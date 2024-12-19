const searchBtn = document.querySelector("#search-btn");
const searchInput = document.querySelector(".search__group input");
const cardWrapper = document.querySelector(".content__main-list");

const cardsArray = [
  {
    id: 0,
    title: "Первый товар",
    price: "170 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./assets/images/card-img.png",
  },
  {
    id: 1,
    title: "Второй товар",
    price: "171 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./assets/images/card-img.png",
  },
  {
    id: 2,
    title: "Третий товар",
    price: "172 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./assets/images/card-img.png",
  },
  {
    id: 3,
    title: "Четвертый товар",
    price: "173 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./assets/images/card-img.png",
  },
  {
    id: 4,
    title: "Пятый товар",
    price: "174 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./assets/images/card-img.png",
  },
  {
    id: 5,
    title: "Шестой товар",
    price: "175 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./assets/images/card-img.png",
  },
];

const renderCards = (cardList) => {
    cardWrapper.innerHTML = ''
  cardList.forEach((item, index) => {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
            <a href="./product.html" class="content__main-list-item">
                <div class="content__main-list-item--img">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <h5 class="content__main-list-item--title">
                    ${item.title}
                </h5>
                <strong class="content__main-list-item--price">${item.price}
                </strong>
                <div class="content__main-list-item--descr">
                    <span class="content__main-list-item--text">
                        ${item.address}
                    </span>
                    <span class="content__main-list-item--text">
                         ${item.date}
                    </span>
                </div>
            </a>
            `
    );
  });
};

renderCards(cardsArray)

const filteredArray = (array, value) => {
    return array.filter(item => {
        return item.title.toLowerCase().includes(value.toLowerCase()) 
        || item.price.includes(value)
    })
}

function handleSearch() {
 renderCards(filteredArray(cardsArray, searchInput.value))
}

searchBtn.addEventListener("click", handleSearch);
searchInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        handleSearch()
    }
})
