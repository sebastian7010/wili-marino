document.addEventListener('DOMContentLoaded', function() {
    initializeCarousels();
});

const carousels = [{
        id: 0,
        products: [
            { "id": 1, "name": "chocolate ferrero rocher", "price": 3600 },
            { "id": 2, "name": "caja jumbo", "price": 45800 },
            { "id": 3, "name": "caja jet", "price": 9500 },
            { "id": 4, "name": "choco breack", "price": 11900 },
            { "id": 5, "name": "bon bon bum ", "price": 3300 },
            { "id": 6, "name": "bolsa trululu", "price": 35000 },
            { "id": 7, "name": "caja festables", "price": 29999 },
            { "id": 8, "name": "festables milk chocolate", "price": 13800 },
            { "id": 9, "name": "festables penut", "price": 12000 },
            { "id": 10, "name": "festables milk", "price": 34999 },
            { "id": 11, "name": "festables crunch", "price": 39999 },
            { "id": 12, "name": "almendraz", "price": 29999 },
            { "id": 13, "name": "bianchi", "price": 45999 },
            { "id": 14, "name": "jet gol", "price": 14300 },
            { "id": 15, "name": "burbu jet", "price": 26500 },
            { "id": 16, "name": "bubaloo mora", "price": 12000 },
            { "id": 17, "name": "caja nucita", "price": 17800 },
            { "id": 18, "name": "jumbo arequipe", "price": 9400 },
            { "id": 19, "name": "jumbo mani", "price": 21900 },
            { "id": 20, "name": "almenras xs", "price": 36999 },
            { "id": 21, "name": "caja lechera", "price": 31999 },
            { "id": 22, "name": "chocorramo mini", "price": 26100 },
            { "id": 23, "name": "caramelo nucita", "price": 2500 },
            { "id": 24, "name": "chocoramo miti", "price": 17800 },
            { "id": 25, "name": "mentas de hielo", "price": 31800 },
            { "id": 26, "name": "bolsa okaloca", "price": 4800 },
            { "id": 27, "name": "kit kat 4", "price": 17800 },
            { "id": 28, "name": "anillos de barbi", "price": 17800 },
            { "id": 29, "name": "cable acido rojo", "price": 13900 },
            { "id": 30, "name": "cable acido verde", "price": 13900 },
            { "id": 31, "name": "boobalo verde", "price": 20200 },
            { "id": 32, "name": "kick mani", "price": 39000 },
            { "id": 33, "name": "dr loco", "price": 24700 },
            { "id": 34, "name": "mani la especial", "price": 24700 },
            { "id": 35, "name": "bon bon bum surtido", "price": 14700 },
            { "id": 36, "name": "caja nucita avellana", "price": 11000 },
            { "id": 37, "name": "caja nutella", "price": 15600 },
            { "id": 38, "name": "caja piazza", "price": 11300 },
            { "id": 39, "name": "caja sour punch", "price": 18100 },
            { "id": 40, "name": "caja rafaello", "price": 18400 },
            { "id": 41, "name": "splot acido", "price": 27800 },
            { "id": 42, "name": "splot acido varios ", "price": 17900 },
            { "id": 43, "name": "caja traident mora", "price": 18700 },
            { "id": 44, "name": "caja traident surtido", "price": 21800 },
            { "id": 45, "name": "bolsa anisadas", "price": 21500 },
            { "id": 46, "name": "caja mora traident", "price": 1500 },
            { "id": 47, "name": "caja canelazo", "price": 2000 },
            { "id": 48, "name": "tarro nucita", "price": 73200 },
            { "id": 49, "name": "caja trident tutifruti", "price": 76300 },
            { "id": 50, "name": "chao fresa", "price": 15000 },
            { "id": 51, "name": "chao limon", "price": 2000 },
            { "id": 52, "name": "chocobreack frutal", "price": 11500 },
            { "id": 53, "name": "choco Disk", "price": 2000 },
            { "id": 54, "name": "italo choco baby", "price": 6800 },
            { "id": 55, "name": "choco stop", "price": 800 },
            { "id": 56, "name": "cintas acidas", "price": 24700 },
            { "id": 57, "name": "melancia zandia", "price": 24700 },
            { "id": 58, "name": "espumoso xs", "price": 34999 },
            { "id": 59, "name": "espumoso chocolate blanck", "price": 30999 },
            { "id": 60, "name": "espumoso chocolate blanck rose", "price": 29999 },
            { "id": 61, "name": "gallete nucita", "price": 31999 },
            { "id": 62, "name": "air heads", "price": 32999 },
            { "id": 63, "name": "kinder bueno", "price": 34999 },
            { "id": 64, "name": "bolsa moritas", "price": 34999 },
            { "id": 65, "name": "mini kinder x4", "price": 39999 },
            { "id": 66, "name": "kit mix chocolates", "price": 29999 },
            { "id": 67, "name": "espumoso chocolate blanck + mix chocolates y gomitas", "price": 31999 },
            { "id": 68, "name": "mix 6 bolsas de dulces", "price": 34999 },
            { "id": 69, "name": "lechera x3", "price": 30999 },
            { "id": 70, "name": "gomitas grisley", "price": 31999 },
            { "id": 71, "name": "dulce snow", "price": 45999 },
            { "id": 72, "name": "nerds caja", "price": 34999 },
            { "id": 73, "name": "okaloca bolsa", "price": 39999 },
            { "id": 74, "name": "chicle en polvo", "price": 29999 },
            { "id": 75, "name": "peluche tigrillo", "price": 31999 },
            { "id": 76, "name": "tira de ponkis", "price": 34999 },
            { "id": 77, "name": "push poop azul", "price": 36999 },
            { "id": 78, "name": "kit rafaello x3", "price": 29999 },
            { "id": 79, "name": "bolsa revolcon", "price": 89999 },
            { "id": 80, "name": "anillo ring pop", "price": 34999 },
            { "id": 81, "name": "tetero morado", "price": 31999 },
            { "id": 82, "name": "tetero azul", "price": 34999 },
            { "id": 82, "name": "tetero rosa", "price": 36999 },
            { "id": 83, "name": "trident mix4", "price": 29999 },
            { "id": 84, "name": "trid caja ", "price": 89999 },
            { "id": 85, "name": "trululu karol g", "price": 34999 },
            { "id": 86, "name": "tetero morado", "price": 31999 },
            { "id": 87, "name": "uvas chevres", "price": 34999 },
            { "id": 88, "name": "chicle azul", "price": 36999 },
            { "id": 89, "name": "chicle rosa", "price": 29999 }

        ],
        currentPage: 0,
        productsPerPage: 12
    },
    {
        id: 1,
        products: [
            { id: 90, name: "bolso tomy veerde", price: 0 },
            { id: 91, name: "bolso tomy blanco", price: 0 },
            { id: 92, name: "bolso tomy azul", price: 0 },
            { id: 93, name: "caja rosa o blanca", price: 0 },
            { id: 94, name: "facial", price: 0 },
            { id: 125, name: "moñas", price: 0 },
            { id: 126, name: "spray 1", price: 0 },
            { id: 127, name: "spray 2", price: 0 },
            { id: 128, name: "spray 3", price: 0 },
            { id: 129, name: "spray 4", price: 0 },
            { id: 130, name: "spray 5", price: 0 },
            { id: 96, name: "bolso xs tomy azul", price: 0 },
            { id: 97, name: "cera capilar", price: 0 },
            { id: 98, name: "cera capilar +", price: 0 },
            { id: 99, name: "", price: 0 },
            { id: 100, name: "", price: 0 },
            { id: 101, name: "", price: 0 },
            { id: 102, name: "", price: 0 },
            { id: 103, name: "", price: 0 },
            { id: 104, name: "", price: 0 },
            { id: 105, name: "", price: 0 },
            { id: 106, name: "", price: 0 },
            { id: 109, name: "", price: 0 },
            { id: 110, name: "", price: 0 },
            { id: 111, name: "", price: 0 },
            { id: 112, name: "", price: 0 },
            { id: 113, name: "", price: 0 },
            { id: 114, name: "", price: 0 },
            { id: 115, name: "", price: 0 },
            { id: 116, name: "", price: 0 },
            { id: 117, name: "", price: 0 },
            { id: 118, name: "", price: 0 },
            { id: 119, name: "", price: 0 },
            { id: 120, name: "", price: 0 },
            { id: 121, name: "", price: 0 },
            { id: 122, name: "", price: 0 },
            { id: 123, name: "", price: 0 },
            { id: 124, name: "", price: 0 },


        ],

        currentPage: 0,
        productsPerPage: 12
    },
    {
        id: 2,
        products: [
            { id: 131, name: "ancheta grande", price: 89999 },
            { id: 132, name: "mix 4 gomas", price: 79999 },
            { id: 133, name: "ancheta de caja", price: 89999 },
            { id: 134, name: "ancheta xs", price: 69999 },
            { id: 135, name: "ancheta baso 1", price: 79999 },
            { id: 136, name: "ancheta baso 2", price: 89999 },
            { id: 137, name: "ancheta baso 3", price: 69999 },
            { id: 138, name: "ancheta baso 4", price: 89999 },

        ],
        currentPage: 0,
        productsPerPage: 12
    }
];
let cart = {};


function createProductCard(product) {
    const card = document.createElement('div');
    card.className = `product product-${product.id}`;
    card.innerHTML = `
        <div class="product-image"></div>
        <p class="price price-${product.id}">${product.price.toLocaleString()}</p>
        <div class="quantity">
            <button onclick="changeQuantity(this, -1)">-</button>
            <span>0</span>
            <button onclick="changeQuantity(this, 1)">+</button>
        </div>
        <button class="buy-btn" onclick="buyProduct('${product.name}', this)">Comprar</button>
    `;
    return card;
}

function buyProduct(productName, button) {
    const quantitySpan = button.parentElement.querySelector('.quantity span');
    const quantity = parseInt(quantitySpan.textContent);

    if (quantity > 0) {
        const productCard = button.closest('.product');
        const productId = productCard.className.split('-')[1];

        const carouselId = productCard.closest('.carousel').id.split('-')[1];
        const product = carousels[carouselId].products.find(p => p.id == productId);

        if (!cart[carouselId]) {
            cart[carouselId] = {};
        }

        cart[carouselId][productId] = { name: product.name, quantity: quantity, price: product.price };
        updateCartItemCount();

        sendCombinedWhatsAppMessage();
    } else {
        alert('Por favor, seleccione al menos una unidad para comprar.');
    }
}

function sendCombinedWhatsAppMessage() {
    if (Object.keys(cart).length === 0) {
        alert("El carrito está vacío. Agrega productos antes de realizar una compra.");
        return;
    }

    let message = "Hola, quiero comprar los siguientes productos:\n";
    let totalPrice = 0;

    for (let carouselId in cart) {
        for (let productId in cart[carouselId]) {
            const product = cart[carouselId][productId];
            message += `- ${product.name}: ${product.quantity} unidades, Precio: ${product.price}\n`;
            totalPrice += product.quantity * product.price;
        }
    }

    message += `\nPrecio total: ${totalPrice.toLocaleString()} COP`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/573237342020?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
}



function renderCarousel(carousel) {
    const carouselRow1 = document.getElementById(`carousel-row-1-${carousel.id}`);
    const carouselRow2 = document.getElementById(`carousel-row-2-${carousel.id}`);
    if (!carouselRow1 || !carouselRow2) {
        console.error(`Carousel rows not found for carousel ${carousel.id}`);
        return;
    }
    carouselRow1.innerHTML = '';
    carouselRow2.innerHTML = '';

    const startIndex = carousel.currentPage * carousel.productsPerPage;
    const endIndex = startIndex + carousel.productsPerPage;
    const pageProducts = carousel.products.slice(startIndex, endIndex);

    const width = window.innerWidth;

    pageProducts.forEach((product, index) => {
        const productCard = createProductCard(product);

        if (width < 768) {
            carouselRow1.appendChild(productCard);
        } else {
            if (index < 6) {
                carouselRow1.appendChild(productCard);
            } else {
                carouselRow2.appendChild(productCard);
            }
        }
    });
}

function nextPage(carouselId) {
    const carousel = carousels.find(c => c.id === carouselId);
    const totalPages = Math.ceil(carousel.products.length / carousel.productsPerPage);
    carousel.currentPage = (carousel.currentPage + 1) % totalPages;
    renderCarousel(carousel);
}

function prevPage(carouselId) {
    const carousel = carousels.find(c => c.id === carouselId);
    const totalPages = Math.ceil(carousel.products.length / carousel.productsPerPage);
    carousel.currentPage = (carousel.currentPage - 1 + totalPages) % totalPages;
    renderCarousel(carousel);
}

function changeQuantity(button, change) {
    const quantitySpan = button.parentElement.querySelector('span');
    let quantity = parseInt(quantitySpan.textContent);
    quantity = Math.max(0, quantity + change);
    quantitySpan.textContent = quantity;

    const productCard = button.closest('.product');
    const productId = productCard.className.split('-')[1];
    const carouselId = productCard.closest('.carousel').id.split('-')[1];
    const product = carousels[carouselId].products.find(p => p.id == productId);

    if (!cart[carouselId]) {
        cart[carouselId] = {};
    }

    if (quantity > 0) {
        cart[carouselId][productId] = { name: product.name, quantity: quantity, price: product.price };
    } else {
        delete cart[carouselId][productId];
        if (Object.keys(cart[carouselId]).length === 0) {
            delete cart[carouselId];
        }
    }

    updateCartItemCount();
    console.log(cart);
}

function updateCartItemCount() {
    const totalItems = Object.values(cart).reduce((total, carouselProducts) =>
        total + Object.values(carouselProducts).reduce((sum, product) => sum + product.quantity, 0), 0
    );
    document.getElementById('cartItemCount').textContent = totalItems;
}

function sendCombinedWhatsAppMessage() {
    if (Object.keys(cart).length === 0) {
        alert("El carrito está vacío. Agrega productos antes de realizar una compra.");
        return;
    }

    let message = "Hola, quiero comprar los siguientes productos:\n";
    for (let carouselId in cart) {
        for (let productId in cart[carouselId]) {
            const product = cart[carouselId][productId];
            message += `- ${product.name}: ${product.quantity} unidades, Precio: ${product.price}\n`;
        }
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/573237342020?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
}

function handleResize() {
    const width = window.innerWidth;
    let newProductsPerPage;
    if (width < 576) {
        newProductsPerPage = 4;
    } else if (width < 768) {
        newProductsPerPage = 8;
    } else if (width < 992) {
        newProductsPerPage = 12;
    } else if (width < 1200) {
        newProductsPerPage = 12;
    } else {
        newProductsPerPage = 14;
    }

    carousels.forEach(carousel => {
        carousel.productsPerPage = newProductsPerPage;
        renderCarousel(carousel);
    });
}

function initializeCarousels() {
    handleResize();
    carousels.forEach(carousel => renderCarousel(carousel));
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const navbarMenu = document.querySelector('.navbar-menu');
    const mainContent = document.querySelector('main');

    hamburgerButton.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
        if (navbarMenu.classList.contains('active')) {
            mainContent.style.marginTop = '60vh';
        } else {
            mainContent.style.marginTop = '0';
        }
    });
});



window.addEventListener('resize', handleResize);