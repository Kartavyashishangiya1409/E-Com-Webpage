const products = [
  {
    Image: "./assets/img1.png",
    title: "Men's Cotton T-Shirt",
    price: 599,
    gender: "male",
    Type: "cloth",
  },
  {
    Image: "./assets/img2.png",
    title: "Women's Printed Kurti",
    price: 899,
    gender: "female",
    Type: "cloth",
  },
  {
    Image: "./assets/img3.png",
    title: "Unisex Hoodie",
    price: 1199,
    gender: "unisex",
    Type: "cloth",
  },
  {
    Image: "./assets/img4.png",
    title: "Men's Formal Shirt",
    price: 799,
    gender: "male",
    Type: "cloth",
  },
  {
    Image: "./assets/img5.png",
    title: "Women's Casual Top",
    price: 699,
    gender: "female",
    Type: "cloth",
  },
  {
    Image: "./assets/img6.png",
    title: "Unisex Cardigan",
    price: 1499,
    gender: "unisex",
    Type: "cloth",
  },
  {
    Image: "./assets/img7.png",
    title: "Men's Slim Fit Jeans",
    price: 1399,
    gender: "male",
    Type: "cloth",
  },
  {
    Image: "./assets/img8.png",
    title: "Women's High Rise Jeans",
    price: 1299,
    gender: "female",
    Type: "cloth",
  },
  {
    Image: "./assets/img9.png",
    title: "Unisex Distressed Jeans",
    price: 1499,
    gender: "unisex",
    Type: "cloth",
  },
  {
    Image: "./assets/img10.png",
    title: "Men's Casual Sneakers",
    price: 2199,
    gender: "male",
    Type: "footwear",
  },
  {
    Image: "./assets/img11.png",
    title: "Women's Block Heels",
    price: 1699,
    gender: "female",
    Type: "footwear",
  },
  {
    Image: "./assets/img12.png",
    title: "Unisex Running Shoes",
    price: 1999,
    gender: "unisex",
    Type: "footwear",
  },
  {
    Image: "./assets/img13.png",
    title: "Men's Formal Loafers",
    price: 2499,
    gender: "male",
    Type: "footwear",
  },
  {
    Image: "./assets/img14.png",
    title: "Women's Ballet Flats",
    price: 1199,
    gender: "female",
    Type: "footwear",
  },
  {
    Image: "./assets/img15.png",
    title: "Unisex Sandals",
    price: 999,
    gender: "unisex",
    Type: "footwear",
  },
  {
    Image: "./assets/img16.png",
    title: "Men's Leather Wallet",
    price: 799,
    gender: "male",
    Type: "wallet",
  },
  {
    Image: "./assets/img17.png",
    title: "Women's Zip Wallet",
    price: 699,
    gender: "female",
    Type: "wallet",
  },
  {
    Image: "./assets/img18.png",
    title: "Unisex Sling Bag",
    price: 1099,
    gender: "unisex",
    Type: "wallet",
  },
];

let container = document.querySelector(".container");
let select = document.getElementById("select");
console.log(select.value);

products.forEach((e) => {
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  card.setAttribute("data-aos", "zoom-in");
  card.setAttribute("data-aos-duration", "1500");

  let cardImg = document.createElement("img");
  cardImg.setAttribute("src", e.Image);

  let cardTitle = document.createElement("h1");
  cardTitle.innerText = e.title;

  let cardGender = document.createElement("h2");
  cardGender.innerText = e.gender;

  let cardPrice = document.createElement("p");
  cardPrice.innerText = "₹ " + Math.floor(e.price).toLocaleString("en-IN");

  card.appendChild(cardImg);
  card.appendChild(cardTitle);
  card.appendChild(cardGender);
  card.appendChild(cardPrice);

  container.appendChild(card);
});

select.addEventListener("change", function () {
  let selectValue = select.value;

  switch (selectValue) {
    case "opt1":
      container.innerHTML = "";
      products.forEach((e) => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let cardImg = document.createElement("img");
        cardImg.setAttribute("src", e.Image);

        let cardTitle = document.createElement("h1");
        cardTitle.innerText = e.title;

        let cardGender = document.createElement("h2");
        cardGender.innerText = e.gender;

        let cardPrice = document.createElement("p");
        cardPrice.innerText =
          "₹ " + Math.floor(e.price).toLocaleString("en-IN");

        card.appendChild(cardImg);
        card.appendChild(cardTitle);
        card.appendChild(cardGender);
        card.appendChild(cardPrice);

        container.appendChild(card);
      });
      break;

    case "opt2":
      container.innerHTML = "";
      let male = products.filter((e) => e.gender == "male");
      male.forEach((e) => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let cardImg = document.createElement("img");
        cardImg.setAttribute("src", e.Image);

        let cardTitle = document.createElement("h1");
        cardTitle.innerText = e.title;

        let cardGender = document.createElement("h2");
        cardGender.innerText = e.gender;

        let cardPrice = document.createElement("p");
        cardPrice.innerText =
          "₹ " + Math.floor(e.price).toLocaleString("en-IN");

        card.appendChild(cardImg);
        card.appendChild(cardTitle);
        card.appendChild(cardGender);
        card.appendChild(cardPrice);

        container.appendChild(card);
      });
      break;

    case "opt3":
      container.innerHTML = "";
      let female = products.filter((e) => e.gender == "female");
      female.forEach((e) => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let cardImg = document.createElement("img");
        cardImg.setAttribute("src", e.Image);

        let cardTitle = document.createElement("h1");
        cardTitle.innerText = e.title;

        let cardGender = document.createElement("h2");
        cardGender.innerText = e.gender;

        let cardPrice = document.createElement("p");
        cardPrice.innerText =
          "₹ " + Math.floor(e.price).toLocaleString("en-IN");

        card.appendChild(cardImg);
        card.appendChild(cardTitle);
        card.appendChild(cardGender);
        card.appendChild(cardPrice);

        container.appendChild(card);
      });
      break;

    case "opt4":
      container.innerHTML = "";
      let unisex = products.filter((e) => e.gender == "unisex");
      unisex.forEach((e) => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let cardImg = document.createElement("img");
        cardImg.setAttribute("src", e.Image);

        let cardTitle = document.createElement("h1");
        cardTitle.innerText = e.title;

        let cardGender = document.createElement("h2");
        cardGender.innerText = e.gender;

        let cardPrice = document.createElement("p");
        cardPrice.innerText =
          "₹ " + Math.floor(e.price).toLocaleString("en-IN");

        card.appendChild(cardImg);
        card.appendChild(cardTitle);
        card.appendChild(cardGender);
        card.appendChild(cardPrice);

        container.appendChild(card);
      });
      break;

    case "opt5":
      container.innerHTML = "";
      let cloth = products.filter((e) => e.Type == "cloth");
      cloth.forEach((e) => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let cardImg = document.createElement("img");
        cardImg.setAttribute("src", e.Image);

        let cardTitle = document.createElement("h1");
        cardTitle.innerText = e.title;

        let cardGender = document.createElement("h2");
        cardGender.innerText = e.gender;

        let cardPrice = document.createElement("p");
        cardPrice.innerText =
          "₹ " + Math.floor(e.price).toLocaleString("en-IN");

        card.appendChild(cardImg);
        card.appendChild(cardTitle);
        card.appendChild(cardGender);
        card.appendChild(cardPrice);

        container.appendChild(card);
      });
      break;

    case "opt6":
      container.innerHTML = "";
      let footwear = products.filter((e) => e.Type == "footwear");
      footwear.forEach((e) => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let cardImg = document.createElement("img");
        cardImg.setAttribute("src", e.Image);

        let cardTitle = document.createElement("h1");
        cardTitle.innerText = e.title;

        let cardGender = document.createElement("h2");
        cardGender.innerText = e.gender;

        let cardPrice = document.createElement("p");
        cardPrice.innerText =
          "₹ " + Math.floor(e.price).toLocaleString("en-IN");

        card.appendChild(cardImg);
        card.appendChild(cardTitle);
        card.appendChild(cardGender);
        card.appendChild(cardPrice);

        container.appendChild(card);
      });
      break;

    case "opt7":
      container.innerHTML = "";
      let wallet = products.filter((e) => e.Type == "wallet");
      wallet.forEach((e) => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let cardImg = document.createElement("img");
        cardImg.setAttribute("src", e.Image);

        let cardTitle = document.createElement("h1");
        cardTitle.innerText = e.title;

        let cardGender = document.createElement("h2");
        cardGender.innerText = e.gender;

        let cardPrice = document.createElement("p");
        cardPrice.innerText =
          "₹ " + Math.floor(e.price).toLocaleString("en-IN");

        card.appendChild(cardImg);
        card.appendChild(cardTitle);
        card.appendChild(cardGender);
        card.appendChild(cardPrice);

        container.appendChild(card);
      });
      break;
  }
});
