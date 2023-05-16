//Navigation
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
    links.classList.toggle('show-links')
});

//Random Backgrounds
const btn = document.getElementById('btn');
const colour = document.querySelector('.colour');
const span = document.querySelector('#bgcolour')

btn.addEventListener('click', function() {
    const randomHex = getRandomHex();
    span.style.backgroundColor = '#'+randomHex;
    colour.textContent = '#'+randomHex;
});

function getRandomHex() {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16);
    return hex.padStart(6, '0');
};


//Reviews
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const NextBtn = document.querySelector('.next-btn');

//starting item
let currentItem = 0;
let index = reviews.length;

//initial item
window.addEventListener('DOMContentLoaded', function() {
  populateFields(currentItem);
});

function populateFields(reviewID){
  const item = reviews[reviewID];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

prevBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0){
      currentItem = index - 1
    }
    populateFields(currentItem);
});

NextBtn.addEventListener('click', function(){
  currentItem++;
  if (currentItem > index - 1){
    currentItem = 0;
  }
  populateFields(currentItem);
  
});