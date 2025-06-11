// -------------------------
// 1. Hamburger Menu Toggle
// -------------------------
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('active'); // Optional: animate hamburger
});

// Auto-close mobile menu on link click
const menuLinks = mobileMenu.querySelectorAll('a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open'); // was wrong: remove 'show-menu'
    hamburger.classList.remove('active');
  });
});


// -------------------------
// 2. Scroll Reveal Animation
// -------------------------
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // trigger once on load


// -------------------------
// 3. Testimonial Cards Animation (Intersection Observer)
// -------------------------
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.testimonial-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});


// -------------------------
// 4. Contact Form Success Message
// -------------------------
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('successMessage').style.display = 'block';
  this.reset();

  setTimeout(() => {
    document.getElementById('successMessage').style.display = 'none';
  }, 5000);
});


// -------------------------
// 5. Product Categories and Dynamic Display
// -------------------------
const productData = {
  gentlemen: [
    {
      name: "Classic T-Shirt",
      description: "Premium cotton t-shirt for men.",
      price: "4,000 FCFA",
      img: "images/gentlemen.jpg"
    },
    {
      name: "Blue Jeans",
      description: "Durable denim for everyday use.",
      price: "7,000 FCFA",
      img: "images/jeans.jpg"
    }
  ],
  ladies: [
    {
      name: "Floral Dress",
      description: "Beautiful dress for outings.",
      price: "8,000 FCFA",
      img: "images/ladies.jpg"
    },
    {
      name: "Heels",
      description: "Stylish heels for ladies.",
      price: "9,000 FCFA",
      img: "images/heels.jpg"
    }
  ],
  kids: [
    {
      name: "Kid's T-Shirt",
      description: "Fun cotton shirt for kids.",
      price: "3,000 FCFA",
      img: "images/kids.jpg"
    },
    {
      name: "Sandals",
      description: "Soft sandals for toddlers.",
      price: "3,500 FCFA",
      img: "images/sandals.jpg"
    }
  ],
  accessories: [
    {
      name: "Necklace",
      description: "Fashion necklace for occasions.",
      price: "3,000 FCFA",
      img: "images/accessories.jpg"
    },
    {
      name: "Sunglasses",
      description: "UV protective sunglasses.",
      price: "2,000 FCFA",
      img: "images/sunglasses.jpg"
    }
  ]
};

function showProducts(category) {
  const categorySection = document.getElementById('product-categories');
  const productSection = document.getElementById('product-display');
  const productGrid = document.getElementById('product-grid');
  const productTitle = document.getElementById('product-category-title');
  const backBtn = document.querySelector('.back-btn');

  categorySection.style.display = 'none';
  productSection.style.display = 'block';
  backBtn.style.display = 'block';

  const titles = {
    gentlemen: "Gentleman's Hub / Mode pour Hommes",
    ladies: "Elegance for Her / Élégance Féminine",
    kids: "Little Champs & Princess / Enfants",
    accessories: "Accessories & Essentials / Accessoires"
  };
  productTitle.textContent = titles[category];

  productGrid.innerHTML = '';
  productData[category].forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="price">${product.price}</p>
      <div class="button-group">
        <a href="https://wa.me/237XXXXXXXXX" target="_blank">WhatsApp</a>
        <a href="mailto:rosyglance@example.com">Email</a>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

function goBack() {
  document.getElementById('product-categories').style.display = 'block';
  document.getElementById('product-display').style.display = 'none';
  document.querySelector('.back-btn').style.display = 'none';
}
