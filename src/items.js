// items.js
export const TentData = [
    {
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?",
      price: "RM 29",
      imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?",
      price: "RM 29",
      imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    
    // Add more objects as needed
];

export const LampData = [
    {
      title: "LAMP",
      description: "If a dog chews shoes whose shoes does he choose?",
      price: "RM 29",
      imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?",
      price: "RM 29",
      imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    
    // Add more objects as needed
];

export const ChairData = [
    {
      title: "Chair",
      description: "If a dog chews shoes whose shoes does he choose?",
      price: "RM 29",
      imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?",
      price: "RM 29",
      imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    
    // Add more objects as needed
];

export const TableData = [
    {
      title: "Table",
      description: "If a dog chews shoes whose shoes does he choose?",
      price: "RM 29",
      imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?",
      price: "RM 29",
      imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    
    // Add more objects as needed
];


const TentContainer = document.getElementById("TentContainer");

TentData.forEach((card) => {
  const cardHTML = `
    <div class="scroll-ml-6 snap-start shrink-0">
      <div class="card bg-base-100 w-80 border-primary border">
        <figure>
          <img src="${card.imgSrc}" alt="${card.title}" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${card.title}</h2>
          <p>${card.description}</p>
          <div class="card-actions justify-end">
            <h1 class="font-bold sm:text-3xl text-2xl">${card.price}</h1>
            <button class="btn btn-primary rounded-t-box">Rent Now</button>
          </div>
        </div>
      </div>
    </div>
  `;
  TentContainer.innerHTML += cardHTML;
});


const LampContainer = document.getElementById("LampContainer");

LampData.forEach((card) => {
  const cardHTML = `
    <div class="scroll-ml-6 snap-start shrink-0">
      <div class="card bg-base-100 w-80 border-primary border">
        <figure>
          <img src="${card.imgSrc}" alt="${card.title}" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${card.title}</h2>
          <p>${card.description}</p>
          <div class="card-actions justify-end">
            <h1 class="font-bold sm:text-3xl text-2xl">${card.price}</h1>
            <button class="btn btn-primary rounded-t-box">Rent Now</button>
          </div>
        </div>
      </div>
    </div>
  `;
  LampContainer.innerHTML += cardHTML;
});


const ChairContainer = document.getElementById("ChairContainer");

ChairData.forEach((card) => {
  const cardHTML = `
    <div class="scroll-ml-6 snap-start shrink-0">
      <div class="card bg-base-100 w-80 border-primary border">
        <figure>
          <img src="${card.imgSrc}" alt="${card.title}" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${card.title}</h2>
          <p>${card.description}</p>
          <div class="card-actions justify-end">
            <h1 class="font-bold sm:text-3xl text-2xl">${card.price}</h1>
            <button class="btn btn-primary rounded-t-box">Rent Now</button>
          </div>
        </div>
      </div>
    </div>
  `;
  ChairContainer.innerHTML += cardHTML;
});

const TableContainer = document.getElementById("TableContainer");

TableData.forEach((card) => {
  const cardHTML = `
    <div class="scroll-ml-6 snap-start shrink-0">
      <div class="card bg-base-100 w-80 border-primary border">
        <figure>
          <img src="${card.imgSrc}" alt="${card.title}" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${card.title}</h2>
          <p>${card.description}</p>
          <div class="card-actions justify-end">
            <h1 class="font-bold sm:text-3xl text-2xl">${card.price}</h1>
            <button class="btn btn-primary rounded-t-box">Rent Now</button>
          </div>
        </div>
      </div>
    </div>
  `;
  TableContainer.innerHTML += cardHTML;
});
  