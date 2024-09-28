document.addEventListener('DOMContentLoaded', function() {
    initializeCarousels();
});

const carousels = [{
        id: 0,
        products: [
            { "id": 1, "name": "chocorramo miti", "price": 3600 },
            { "id": 2, "name": "caja jet", "price": 45800 },
            { "id": 3, "name": "caja nucita", "price": 9500 },
            { "id": 4, "name": "bolsa bombombun X24", "price": 11900 },
            { "id": 5, "name": "bolsa trululu", "price": 3300 },
            { "id": 6, "name": "chocolate ferrero", "price": 35000 },
            { "id": 7, "name": "kit kat x4", "price": 29999 },
            { "id": 8, "name": "almendraz", "price": 13800 },
            { "id": 9, "name": "festables", "price": 12000 },
            { "id": 10, "name": "festables rojos", "price": 34999 },
            { "id": 11, "name": "festables mani", "price": 39999 },
            { "id": 12, "name": "festables mora", "price": 29999 },
            { "id": 13, "name": "jumbo", "price": 45999 },
            { "id": 14, "name": "caja nutella", "price": 14300 },
            { "id": 15, "name": "caja lechera", "price": 26500 },
            { "id": 16, "name": "caja pizza", "price": 12000 },
            { "id": 17, "name": "choco brack", "price": 17800 },
            { "id": 18, "name": "choco italo", "price": 9400 },
            { "id": 19, "name": "tarro nucita", "price": 21900 },
            { "id": 20, "name": "uvas chevres", "price": 36999 },
            { "id": 21, "name": "kinder bueno", "price": 31999 },
            { "id": 22, "name": "anillo barbi", "price": 26100 },
            { "id": 23, "name": "bianchi", "price": 2500 },
            { "id": 24, "name": "bolsa okaloca", "price": 17800 },
            { "id": 25, "name": "bolsa jetgol", "price": 31800 },
            { "id": 26, "name": "burbujet", "price": 4800 },
            { "id": 27, "name": "cables ácidos", "price": 17800 },
            { "id": 28, "name": "cables verdes", "price": 17800 },
            { "id": 29, "name": "caja bubaloo mora", "price": 13900 },
            { "id": 30, "name": "caja bubalu", "price": 13900 },
            { "id": 31, "name": "caja kick", "price": 20200 },
            { "id": 32, "name": "caja dr locko", "price": 39000 },
            { "id": 33, "name": "caja traident mora", "price": 24700 },
            { "id": 34, "name": "caja trident", "price": 24700 },
            { "id": 35, "name": "caja trident x60", "price": 14700 },
            { "id": 36, "name": "canelazo", "price": 11000 },
            { "id": 37, "name": "caramelo nucita", "price": 15600 },
            { "id": 38, "name": "chao fresa", "price": 11300 },
            { "id": 39, "name": "chao limón", "price": 18100 },
            { "id": 40, "name": "choco disck", "price": 18400 },
            { "id": 41, "name": "choco stop", "price": 27800 },
            { "id": 42, "name": "cintas ácidas", "price": 17900 },
            { "id": 43, "name": "dulce zandía", "price": 18700 },
            { "id": 44, "name": "espumoso blanco", "price": 21800 },
            { "id": 45, "name": "espumoso chocolate", "price": 21500 },
            { "id": 46, "name": "galletas nucita", "price": 1500 },
            { "id": 47, "name": "mentas hielo", "price": 2000 },
            { "id": 48, "name": "mix 3", "price": 73200 },
            { "id": 49, "name": "mix 4", "price": 76300 },
            { "id": 50, "name": "mix 6", "price": 15000 },
            { "id": 51, "name": "okaloca bolsa xs", "price": 2000 },
            { "id": 52, "name": "okaloca polvo caja", "price": 11500 },
            { "id": 53, "name": "ponkis", "price": 2000 },
            { "id": 54, "name": "rafael x3", "price": 6800 },
            { "id": 55, "name": "revolcón unidad", "price": 800 },
            { "id": 56, "name": "trident fresa", "price": 24700 },
            { "id": 57, "name": "trident mix 4", "price": 24700 },
            { "id": 58, "name": "trident caja", "price": 34999 },
            { "id": 59, "name": "trululu g", "price": 30999 },
            { "id": 60, "name": "almendras xl", "price": 29999 },
            { "id": 61, "name": "caja stables", "price": 31999 },
            { "id": 62, "name": "caja punch", "price": 32999 },
            { "id": 63, "name": "jumbo naranja", "price": 34999 },
            { "id": 64, "name": "festables crunch", "price": 34999 },
            { "id": 65, "name": "festables mani", "price": 39999 },
            { "id": 66, "name": "festables mora", "price": 29999 },
            { "id": 67, "name": "hair heads", "price": 31999 },
            { "id": 68, "name": "jumbo requipe", "price": 34999 },
            { "id": 69, "name": "choco bueno", "price": 30999 },
            { "id": 70, "name": "minikinder 4", "price": 31999 },
            { "id": 71, "name": "nerds redonda", "price": 45999 },
            { "id": 72, "name": "push pop", "price": 34999 },
            { "id": 73, "name": "ring pop", "price": 39999 },
            { "id": 74, "name": "tetero mora", "price": 29999 },
            { "id": 75, "name": "tetero azul", "price": 31999 },
            { "id": 76, "name": "tetero rosa", "price": 34999 },
            { "id": 77, "name": "wuba azul", "price": 36999 },
            { "id": 78, "name": "wuba fresa", "price": 29999 },
            { "id": 79, "name": "caja ancheta", "price": 89999 },
            { "id": 80, "name": "ancheta roja", "price": 34999 }

        ],
        currentPage: 0,
        productsPerPage: 12
    },
    {
        id: 1,
        products: [
            { id: 81, name: "7 cera capilar", price: 79999 },
            { id: 82, name: "labial", price: 89999 },
            { id: 83, name: "bolso tomy", price: 69999 },
            { id: 84, name: "splash body", price: 79999 },
            { id: 85, name: "cajas", price: 49999 },
            { id: 86, name: "cámara facial", price: 69999 },
            { id: 87, name: "cartera tomy", price: 39999 },
            { id: 88, name: "cera capilar", price: 59999 },
            { id: 89, name: "cera kit capilar", price: 99999 },
            { id: 90, name: "gel de ducha", price: 49999 },
            { id: 91, name: "jabón baño", price: 54999 },
            { id: 92, name: "jabón baño 2", price: 29999 },
            { id: 93, name: "jabón baño 3", price: 19999 },
            { id: 94, name: "jabón baño 5", price: 79999 },
            { id: 95, name: "jabón baño 6", price: 24999 },
            { id: 96, name: "jabón baño 7", price: 14999 },
            { id: 97, name: "jabón baño 8", price: 89999 },
            { id: 98, name: "jabón baño 9", price: 34999 },
            { id: 99, name: "kit 9 cera capilar", price: 99999 },
            { id: 100, name: "labial", price: 10999 },
            { id: 101, name: "labial rosa", price: 8999 },
            { id: 102, name: "loción body", price: 11999 },
            { id: 103, name: "masajeador capilar", price: 16999 },
            { id: 104, name: "moña 1", price: 59999 },
            { id: 105, name: "moña 10", price: 79999 },
            { id: 106, name: "moña 11", price: 19999 },
            { id: 107, name: "moña 2", price: 45999 },
            { id: 108, name: "moña 3", price: 32999 },
            { id: 109, name: "moña 4", price: 29999 },
            { id: 110, name: "moña 5", price: 26999 },
            { id: 111, name: "moña 6", price: 37999 },
            { id: 112, name: "moña 7", price: 19999 },
            { id: 113, name: "moña 9", price: 45999 },
            { id: 114, name: "moñas", price: 37999 },
            { id: 115, name: "splash body", price: 19999 },
            { id: 116, name: "splash body 2", price: 31999 },
            { id: 117, name: "splash body 3", price: 31999 },
            { id: 118, name: "splash body 4", price: 34999 },
            { id: 119, name: "splash body 5", price: 34999 },
            { id: 120, name: "splash body 6", price: 36999 },
            { id: 121, name: "toallita aironman", price: 36999 },
            { id: 122, name: "toallita capitán", price: 39999 },
            { id: 123, name: "toallita encanto", price: 39999 },
            { id: 124, name: "toallita mikie", price: 39999 },
            { id: 125, name: "toallita mini", price: 41999 },
            { id: 126, name: "toallita princesa", price: 41999 },
            { id: 127, name: "toallita spiderman", price: 43999 },
            { id: 128, name: "toallita thor", price: 43999 },
            { id: 129, name: "tomy verde", price: 45999 },
            { id: 130, name: "tomy azul", price: 45999 }
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
            { id: 139, name: "ancheta roja", price: 89999 },

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

        const message = encodeURIComponent(
            `Hola, quiero comprar ${quantity} unidades de ${productName} a un precio de ${product.price.toLocaleString()} COP cada una.`
        );

        const whatsappURL = `https://wa.me/573237342020?text=${message}`;

        window.open(whatsappURL, '_blank');
    } else {
        alert('Por favor, seleccione al menos una unidad para comprar.');
    }
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
            mainContent.style.marginTop = '60vh'; // Ajusta la altura si es necesario
        } else {
            mainContent.style.marginTop = '0';
        }
    });
});



window.addEventListener('resize', handleResize);