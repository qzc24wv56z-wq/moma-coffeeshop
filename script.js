// ===========================
// MOMA COFFEESHOP - JAVASCRIPT
// Premium Coffee Shop Website
// ===========================

// ===========================
// PRODUCTS DATA
// ===========================
// Para agregar imagen a un producto, usa la propiedad "image" con la ruta de la imagen
// Ejemplo: image: "images/mi-producto.jpg"
// Para editar descripcion, cambia el campo "description"
// Para productos con sabores, agrega "flavors: ['Sabor1','Sabor2',...]"
// Para productos con especialidades, agrega "specialties: ['Especialidad1','Especialidad2',...]"

const products = [

    // =====================
    // BEBIDAS FRÍAS
    // =====================

    {
        id: 1,
        name: "Frappe Premium",
        description: "Frappé helado y cremoso en sabores premium a elegir. Batido a la perfección.",
        price: 3.95,
        category: "frias",
        categoryLabel: "Bebida Fría",
        image: "images/frappe.png",

        flavors: ["Mocca", "Chocolate", "Baileys", "Marshmellow", "Tostado", "Galleta"]
    },
    {
        id: 2,
        name: "Frappe Clásico",
        description: "Frappé clásico helado y cremoso. Sabores simples y deliciosos para cualquier momento.",
        price: 3.50,
        category: "frias",
        categoryLabel: "Bebida Fría",
        image: "images/Frappe Clásico.png",
        flavors: ["Caramelo", "Vainilla", "Café"]
    },
    {
        id: 3,
        name: "Orange Black",
        description: "El equilibrio perfecto entre la dulzura de la naranja y la intensidad del espresso frío.",
        price: 3.50,
        category: "frias",
        categoryLabel: "Bebida Fría",
        image: "images/orange black.png",

    },
    {
        id: 4,
        name: "Café Helado",
        description: "El sabor del café que tanto amas, servido frío y refrescante. Perfecto para el calor.",
        price: 2.75,
        category: "frias",
        categoryLabel: "Bebida Fría",
        image: "images/Café Helado.png",
    },
    {
        id: 5,
        name: "Americano Frío",
        description: "Espresso diluido en agua fría con hielo. Suave, limpio y muy refrescante.",
        price: 3.25,
        category: "frias",
        categoryLabel: "Bebida Fría",
        image: "images/Americano Frío.png", 
    },
    {
        id: 6,
        name: "Iced Latte",
        description: "Espresso con leche fría sobre hielo. Cremoso y suave, ideal para disfrutar a cualquier hora.",
        price: 3.50,
        category: "frias",
        categoryLabel: "Bebida Fría",
        image: "images/Iced Latte.png",
        flavors: ["Caramelo", "Vainilla", "Mocca", "Menta", "Avellana", "Almendra", "Lavanda", "Baileys", "Galleta", "Marshmellow Tostado"]
    },
    {
        id: 7,
        name: "Iced Latte Premium",
        description: "Iced latte con saborizantes premium de temporada. Una experiencia cremosa y sofisticada.",
        price: 3.75,
        category: "frias",
        categoryLabel: "Bebida Fría",
        image: "images/Iced Latte Premium.png",
        flavors: ["Caramelo", "Vainilla", "Mocca", "Menta", "Avellana", "Almendra", "Lavanda", "Baileys", "Galleta", "Marshmellow Tostado"]
    },
    {
        id: 8,
        name: "Frozen Frutas",
        description: "Bebida fría de frutas naturales, suave y refrescante. Disponible en base de leche o agua.",
        price: 3.50,
        category: "frias",
        categoryLabel: "Bebida Fría",
        image: "images/Frozen Frutas.png",
        flavors: ["Melocotón", "Coco"],
        specialties: ["Base de Leche", "Base de Agua"]
    },
    {
        id: 9,
        name: "Matcha",
        description: "Cremoso y refrescante matcha latte premium helado, ideal para un boost saludable y refrescante.",
        price: 3.95,
        category: "frias",
        categoryLabel: "Bebida Fría",
        image: "images/matcha.png",
    
    },
    {
        id: 10,
        name: "Matcha Strawberry",
        description: "El balance perfecto entre la intensidad del matcha y el toque dulce y frutal de la fresa.",
        price: 3.95,
        category: "frias",
        categoryLabel: "Bebida Fría",
        image: "images/matcha strawberry.png",
    
    },
    {
        id: 11,
        name: "Matcha Lavanda",
        description: "La delicadeza floral de la lavanda fusionada con la intensidad del matcha premium. Único e irresistible.",
        price: 3.95,
        category: "frias",
        categoryLabel: "Bebida Fría",
        image: "images/Matcha Lavanda.png",
    },
    {
        id: 12,
        name: "Soda Italiana",
        description: "Refrescante soda artesanal con siropes naturales. Agrega perlas explosivas por $0.50.",
        price: 3.00,
        category: "frias",
        categoryLabel: "Bebida Fría",
        image: "images/Soda Italiana.png",
        flavors: ["Manzana Verde", "Frutos Rojos"]
    },

    // =====================
    // BEBIDAS CALIENTES
    // =====================

    {
        id: 13,
        name: "Café Negro",
        description: "La esencia pura del buen café, con el balance perfecto entre aroma, cuerpo e intensidad.",
        price: 1.25,
        category: "calientes",
        categoryLabel: "Bebida Caliente",
        image: "images/Cafe Negro.png",
    
    },
    {
        id: 14,
        name: "Café Americano",
        description: "Café americano tradicional, de notas suaves y aroma reconfortante. El clásico de todos los días.",
        price: 2.75,
        category: "calientes",
        categoryLabel: "Bebida Caliente",
        image: "images/Cafe Americano.png",
    
    },
    {
        id: 15,
        name: "Espresso",
        description: "El clásico shot de café puro, fuerte y aromático. La base de todas las grandes bebidas.",
        price: 2.50,
        category: "calientes",
        categoryLabel: "Bebida Caliente",
        image: "images/Espresso.png",
    
    },
    {
        id: 16,
        name: "Cappuccino",
        description: "Espresso con leche vaporizada y espuma cremosa perfecta. Un clásico italiano imprescindible.",
        price: 2.75,
        category: "calientes",
        categoryLabel: "Bebida Caliente",
        image: "images/Cappuccino.png",
    
    },
    {
        id: 17,
        name: "Latte",
        description: "Espresso suave con abundante leche vaporizada. Cremoso, reconfortante y perfecto a cualquier hora.",
        price: 3.50,
        category: "calientes",
        categoryLabel: "Bebida Caliente",
        image: "images/Latte.png",
    },
    {
        id: 18,
        name: "Mocca",
        description: "La combinación perfecta de espresso intenso y leche cremosa con el toque dulce del chocolate.",
        price: 3.75,
        category: "calientes",
        categoryLabel: "Bebida Caliente",
        image: "images/Mocca.png",

    },
    {
        id: 19,
        name: "Dirty Chai ",
        description: "Especias del té chai con leche cremosa y un shot de espresso. Cálido, especiado e irresistible.",
        price: 3.95,
        category: "calientes",
        categoryLabel: "Bebida Caliente",
        image: "images/Dirty Chai.png",
    },
    {
        id: 20,
        name: "Milk Tea Caliente",
        description: "Té selecto mezclado con leche caliente vaporizada. Suave, reconfortante y sin café.",
        price: 3.50,
        category: "calientes",
        categoryLabel: "Bebida Caliente",
        image: "images/Milk Tea.png",
    },
    {
        id: 21,
        name: "Té Aromático",
        description: "Una selecta infusión de hierbas y flores con notas fragantes, ideal para un momento de paz y relajación.",
        price: 1.95,
        category: "calientes",
        categoryLabel: "Bebida Caliente",
        image: "images/te aromatico.png",
    },

    // =====================
    // POSTRES
    // =====================

    {
        id: 22,
        name: "Brownie",
        description: "Clásico brownie de chocolate, suave, compacto y con una textura irresistible en cada bocado.",
        price: 3.25,
        category: "postres",
        categoryLabel: "Postre",
        image: "images/brownie.png",

    },
    {
        id: 23,
        name: "Cheesecake",
        description: "Cremoso cheesecake horneado sobre una base crujiente de galleta. Pídelo del sabor del día.",
        price: 3.25,
        category: "postres",
        categoryLabel: "Postre",
        image: "images/cheesecake.png",
    
    },
    {
        id: 24,
        name: "Flan de Queso",
        description: "Flan horneado con la cremosidad única del queso crema y un toque perfecto de caramelo artesanal.",
        price: 3.25,
        category: "postres",
        categoryLabel: "Postre",
        image: "images/Flan de Queso.png",

    },
    {
        id: 25,
        name: "Tres Leches",
        description: "Exquisito pastel humedecido con un jarabe de tres leches, ligero, cremoso y con el punto perfecto de dulzura.",
        price: 3.25,
        category: "postres",
        categoryLabel: "Postre",
        image: "images/Tres Leches.png",
    
    },
    {
        id: 26,
        name: "Affogato",
        description: "Un shot de espresso caliente vertido sobre helado de vainilla. La fusión perfecta de caliente y frío.",
        price: 3.25,
        category: "postres",
        categoryLabel: "Postre",
        image: "images/Affogato.png",
    },
    {
        id: 27,
        name: "Galletas Chunky",
        description: "Galletas caseras, súper crujientes por fuera y repletas de trozos gigantes de chocolate.",
        price: 1.75,
        category: "postres",
        categoryLabel: "Postre",
        image: "images/Galletas Chunky.png",
    
    },
    {
        id: 28,
        name: "Waffles con Fruta",
        description: "Waffles esponjosos acompañados de frutas frescas de temporada. Dulce y reconfortante.",
        price: 3.95,
        category: "postres",
        categoryLabel: "Postre",
        image: "images/Waffles con Fruta.png",
    },

    // =====================
    // PLATILLOS
    // =====================

    {
        id: 29,
        name: "Tostadas",
        description: "Tostadas artesanales gourmet. Elige entre nuestras variedades: Tom & Cherry, La Verde, Cocomelo o Banaberries.",
        price: 3.25,
        category: "platillos",
        categoryLabel: "Platillo",
        image: "images/Tostadas.png",
        specialties: ["Tom & Cherry", "La Verde", "Cocomelo", "Banaberries"]
    },
    {
        id: 30,
        name: "Panini + Papas",
        description: "Panini artesanal tostado con relleno a elegir, acompañado de crujientes papas sazonadas. Incluye bebida.",
        price: 5.95,
        category: "platillos",
        categoryLabel: "Platillo",
        image: "images/Panini.png",
        specialties: ["Pechuga al Pesto", "Margarita", "Porco Verde", "Tres Quesos con Champiñones"]
    },
    {
        id: 31,
        name: "Ensalada de la Casa",
        description: "Ensalada fresca preparada con los mejores ingredientes de temporada. Ligera, nutritiva y deliciosa. Incluye bebida.",
        price: 5.95,
        category: "platillos",
        categoryLabel: "Platillo",
        image: "images/Ensalada de la Casa.png",
    },
    {
        id: 32,
        name: "Wrapp de Pechuga + Papas",
        description: "Wrap de pechuga jugosa con vegetales frescos y papas sazonadas. Ligero, sabroso y completo. Incluye bebida.",
        price: 5.95,
        category: "platillos",
        categoryLabel: "Platillo",
        image: "images/Wrapp de Pechuga + Papas.png",
    },
    {
        id: 33,
        name: "Burger + Papas",
        description: "Jugosa hamburguesa de carne con champiñones o tocino, queso y vegetales frescos. Servida con papas. Incluye bebida.",
        price: 7.50,
        category: "platillos",
        categoryLabel: "Platillo",
        image: "images/Burger + Papas.png",
        specialties: ["Con Champiñones", "Con Tocino"]
    },
    {
        id: 34,
        name: "Porción de Papas con Queso",
        description: "Crujientes papas sazonadas cubiertas con queso fundido. El acompañamiento perfecto.",
        price: 3.50,
        category: "platillos",
        categoryLabel: "Platillo",
        image: "images/Porción de Papas con Queso.png",
    },
   
];

// ===========================
// STATE MANAGEMENT
// ===========================
let cart = [];
let currentUser = null;
let deliveryOption = 'pickup';

// ===========================
// LOADER
// ===========================
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 1500);
});

// ===========================
// NAVBAR
// ===========================
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    mobileMenu.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    mobileMenu.classList.remove('active');
    menuBtn.classList.remove('active');
}

// ===========================
// HERO & MENU NAVIGATION
// ===========================
// ===========================
// PROMOCIONES DEL DÍA
// ===========================
// Días: 0=Domingo, 1=Lunes, 2=Miércoles, 3=Jueves, 4=Viernes, 5=Sábado
// Agrega o edita promociones para cada día.
// Propiedades de cada promoción:
//   name        → Nombre del producto
//   description → Descripción corta
//   originalPrice → Precio normal (null = no mostrar tachado)
//   promoPrice  → Precio de promoción
//   badge       → Etiqueta destacada (ej: "2x1", "-20%", "Gratis", "Especial")
//   image       → Ruta a la imagen (igual que en products). null = emoji
//   emoji       → Emoji de respaldo si no hay imagen
//   productId   → ID del producto en products[] para agregar al carrito (opcional)

const promociones = {
    // LUNES (1)
    1: {
        dayLabel: "Lunes",
        subtitle: "¡Arranca la semana con sabor!",
        items: [
            {
                name: "Combo Toast",
                description: "El crujido perfecto de una tostada recién hecha, la frescura de un Ice Latte con la dosis exacta de café y leche... la combinación ideal sí existe y te está esperando hoy.",
                originalPrice: 6.75,
                promoPrice: 6.00,
                badge: "Ahorras $0.75",
                image: "images/Combo Toast.png",
                emoji: "☕",
                // AJUSTA AQUÍ si el combo es otro: Tostadas (29) + Iced Latte (6)
                comboItems: [
                    { productId: 29, qty: 1 },
                    { productId: 6, qty: 1 }
                ]
            }
        ]
    },
    // MIÉRCOLES (2)
    3: {
        dayLabel: "Miércoles",
        subtitle: "Mitad de semana, doble sabor ☕",
        items: [
            {
                name: "Tarde Dulce",
                description: "​Hay combinaciones que simplemente nacieron para estar juntas. El carácter y la intensidad de un buen Café Americano caliente con el toque exacto de dulzura de un postre premium.",
                originalPrice:6.50,
                promoPrice: 5.25,
                badge: "Especial",
                image: "images/Tarde Dulce.png",
                emoji: "🥤",
                // AJUSTA AQUÍ si el postre es otro: Café Americano (14) + postre a elección
                comboItems: [
                    { productId: 14, qty: 1 },
                    { productId: 22, qty: 1, alternatives: [22, 23, 24, 25, 26, 27, 28] }
                ]
            }
        ]
    },
    // JUEVES (3)
    4: {
        dayLabel: "Jueves",
        subtitle: "¡Casi viernes, celébralo con Moma!",
        items: [
            {
                name: "Break Para 2",
                description: "​No hay nada que un buen shot de cafeína helada y algo dulce no puedan solucionar. Trae un acompañante y recarguen baterías juntos para cerrar la semana con todo el ánimo.",
                originalPrice: 13.00,
                promoPrice: 10.00,
                badge: "Promo Jueves",
                image: "images/Break Para 2.png",
                emoji: "🌶️",
                // AJUSTA AQUÍ si el combo es otro: 2x Frappe Premium (1) + postre a elección
                comboItems: [
                    { productId: 1, qty: 2 },
                    { productId: 27, qty: 1, alternatives: [22, 23, 24, 25, 26, 27, 28] }
                ]
            }
        ]
    },
    // VIERNES (4)
    5: {
        dayLabel: "Viernes",
        subtitle: "¡Empieza el finde con estilo!",
        items: [
            {
                name: "Happy Frappy",
                description: "​El sonido del hielo triturándose, el aroma a café recién hecho y ese toque de caramelo chorreando por el vaso... Sí, el viernes tiene un sabor muy específico.",
                originalPrice: 7.90,
                promoPrice: 6.75,
                badge: "2 Frappe Premium o Clasicos",
                image: "images/Happy Frappy.png",
                emoji: "🎉",
                // 2x Frappe Premium o Clásico (a elegir por unidad)
                comboItems: [
                    { productId: 1, qty: 2, alternatives: [1, 2] }
                ]
            }
        ]
    },
    // SÁBADO (5)
    6: {
        dayLabel: "Sábado",
        subtitle: "Sábado de relax y buen café ✨",
        items: [
            {
                name: "Filtrados",
                description: "​El agua caliente tocando el café fresco, la magia de la preinfusión y ese aroma inconfundible que se apodera de la barra... El fin de semana oficialmente ha comenzado.",
                originalPrice: 6.00,
                promoPrice: 3.00,
                badge: "2x1",
                image: "images/Filtrados.png",
                emoji: "☕",
                // 2x Café Americano (14) — 2x1
                comboItems: [
                    { productId: 14, qty: 2 }
                ]
            }
        ]
    },
    // DOMINGO (0)
    0: {
        dayLabel: "Domingo",
        subtitle: "Domingo especial en Moma ☕❤️",
        items: [
            {
                name: "Combo Moma",
                description: "El domingo es el día oficial de los antojos, y el Combo Moma tiene la combinación exacta para dejarte más que satisfecho. Pide tu panini favorito, acompáñalo con un refresco helado y elige el postre que más te haga ojitos hoy.",
                originalPrice: 9.20,
                promoPrice: 8.75,
                badge: "Especial",
                image: "images/Combo Moma.png",
                emoji: "🍵",
                // AJUSTA AQUÍ si el combo es otro: Panini+Papas (30) + Soda Italiana (12) + postre a elección
                comboItems: [
                    { productId: 30, qty: 1 },
                    { productId: 12, qty: 1 },
                    { productId: 23, qty: 1, alternatives: [22, 23, 24, 25, 26, 27, 28] }
                ]
            }
        ]
    }
};

function renderPromociones() {
    const section = document.getElementById('promociones');
    const grid = document.getElementById('promosGrid');
    const promoSubtitle = document.getElementById('promoSubtitle');

    const today = new Date().getDay(); // 0=Dom … 6=Sáb
    const dayData = promociones[today];

    if (!dayData || !dayData.items || dayData.items.length === 0) {
        section.classList.add('hidden');
        return;
    }

    section.classList.remove('hidden');

    // Update subtitle
    if (promoSubtitle) promoSubtitle.textContent = dayData.subtitle;

    // Update tag
    const tag = document.getElementById('promoTag');
    if (tag) tag.textContent = dayData.dayLabel;

    grid.innerHTML = dayData.items.map((promo, promoIndex) => {
        const savings = promo.originalPrice
            ? Math.round((1 - promo.promoPrice / promo.originalPrice) * 100)
            : null;

        const imageHtml = promo.image
            ? `<img src="${promo.image}" alt="${promo.name}" onerror="this.parentElement.innerHTML='<span class=\\'promo-no-img\\'>${promo.emoji || '☕'}</span>'">`
            : `<span class="promo-no-img">${promo.emoji || '☕'}</span>`;

        const oldPriceHtml = promo.originalPrice
            ? `<span class="promo-price-old">$${promo.originalPrice.toFixed(2)}</span>`
            : '';

        const savingsHtml = savings && savings > 0
            ? `<span class="promo-savings">Ahorras ${savings}%</span>`
            : '';

        // Mostrar especialidades/sabores de los productos que componen el combo
        let optionsPreviewHtml = '';
        if (promo.comboItems && promo.comboItems.length > 0) {
            const seen = new Set();
            const tags = [];
            promo.comboItems.forEach(ci => {
                const p = products.find(pr => pr.id === ci.productId);
                if (!p) return;
                (p.specialties || []).forEach(s => { if (!seen.has(s)) { seen.add(s); tags.push(s); } });
                (p.flavors || []).forEach(f => { if (!seen.has(f)) { seen.add(f); tags.push(f); } });
            });
            if (tags.length > 0) {
                optionsPreviewHtml = `<div class="product-options-preview"><span class="options-label">Especialidades:</span> ${tags.slice(0, 3).map(t => `<span class="option-tag">${t}</span>`).join('')}${tags.length > 3 ? `<span class="option-tag more">+${tags.length - 3}</span>` : ''}</div>`;
            }
        }

        return `
        <div class="promo-card">
            <span class="promo-badge">${promo.badge}</span>
            <div class="promo-image-wrap">${imageHtml}</div>
            <div class="promo-body">
                <h3 class="promo-name">${promo.name}</h3>
                <p class="promo-desc">${promo.description}</p>
                ${optionsPreviewHtml}
                <div class="promo-pricing">
                    ${oldPriceHtml}
                    <span class="promo-price-new">$${promo.promoPrice.toFixed(2)}</span>
                    ${savingsHtml}
                </div>
                ${promo.comboItems && promo.comboItems.length > 0
                    ? `<button class="promo-add-btn" onclick="handlePromoAdd(${today}, ${promoIndex})">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                            <line x1="12" y1="5" x2="12" y2="19"/>
                            <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                        Agregar al carrito
                       </button>`
                    : ''
                }
            </div>
        </div>`;
    }).join('');
}

function goToHero() {
    const heroSection = document.getElementById('hero');
    const menuSection = document.getElementById('menu');
    
    heroSection.style.display = 'flex';
    menuSection.classList.add('hidden');
    document.getElementById('promociones').classList.add('hidden');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showMenu() {
    const heroSection = document.getElementById('hero');
    const menuSection = document.getElementById('menu');
    
    // Don't hide hero, just scroll to menu
    menuSection.classList.remove('hidden');

    // Show promotions
    renderPromociones();
    
    // Render products
    renderProducts();
    
    // Scroll to promociones first
    setTimeout(() => {
        const promoSection = document.getElementById('promociones');
        if (!promoSection.classList.contains('hidden')) {
            promoSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            menuSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
}

// ===========================
// PRODUCTS
// ===========================
function renderProducts(category = 'all') {
    const grid = document.getElementById('productsGrid');
    let filteredProducts = products;
    
    if (category !== 'all') {
        filteredProducts = products.filter(p => p.category === category);
    }

    // Build a map of productId → promo for today
    const today = new Date().getDay();
    const todayPromos = {};
    const dayData = promociones[today];
    if (dayData && dayData.items) {
        dayData.items.forEach(promo => {
            if (promo.productId) todayPromos[promo.productId] = promo;
        });
    }

    grid.innerHTML = filteredProducts.map(product => {
        const promo = todayPromos[product.id];
        const hasPromo = promo && promo.promoPrice < product.price;
        const displayPrice = hasPromo ? promo.promoPrice : product.price;
        const savings = hasPromo ? Math.round((1 - promo.promoPrice / product.price) * 100) : 0;

        const promoBadgeHtml = hasPromo
            ? `<span class="product-promo-badge">${promo.badge}</span>`
            : '';

        const priceHtml = hasPromo
            ? `<div class="product-price-wrap">
                 <span class="product-price-old">$${product.price.toFixed(2)}</span>
                 <span class="product-price product-price-promo">$${displayPrice.toFixed(2)}</span>
                 <span class="product-savings-tag">Ahorras ${savings}%</span>
               </div>`
            : `<span class="product-price">$${product.price.toFixed(2)}</span>`;

        const hasOptions = (product.flavors && product.flavors.length > 0) || (product.specialties && product.specialties.length > 0);

        const addBtn = hasOptions
            ? `<button class="add-to-cart-btn personalize-btn" onclick="openProductModal(${product.id}${hasPromo ? ', ' + promo.promoPrice + ', ' + product.price : ''})">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
                </svg>
               </button>`
            : hasPromo
            ? `<button class="add-to-cart-btn" onclick="addToCart(${product.id}, ${promo.promoPrice}, ${product.price})">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
               </button>`
            : `<button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
               </button>`;

        // Show flavor/specialty preview tags on card
        const optionPreview = hasOptions ? (() => {
            let tags = '';
            if (product.specialties && product.specialties.length > 0) {
                tags += `<div class="product-options-preview"><span class="options-label">Especialidades:</span> ${product.specialties.slice(0,3).map(s => `<span class="option-tag">${s}</span>`).join('')}${product.specialties.length > 3 ? `<span class="option-tag more">+${product.specialties.length - 3}</span>` : ''}</div>`;
            }
            if (product.flavors && product.flavors.length > 0) {
                tags += `<div class="product-options-preview"><span class="options-label">Sabores:</span> ${product.flavors.slice(0,3).map(f => `<span class="option-tag">${f}</span>`).join('')}${product.flavors.length > 3 ? `<span class="option-tag more">+${product.flavors.length - 3}</span>` : ''}</div>`;
            }
            return tags;
        })() : '';

        return `
        <div class="product-card scroll-reveal${hasPromo ? ' product-card--promo' : ''}" data-category="${product.category}">
            <div class="product-image">
                ${product.image 
                    ? `<img src="${product.image}" alt="${product.name}">`
                    : `<svg class="product-placeholder" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
                        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>
                        <line x1="6" y1="2" x2="6" y2="4"/>
                        <line x1="10" y1="2" x2="10" y2="4"/>
                        <line x1="14" y1="2" x2="14" y2="4"/>
                    </svg>`
                }
                <span class="product-category-tag">${product.categoryLabel}</span>
            </div>
            <div class="product-info">
                ${hasPromo ? `<span class="product-promo-badge">${promo.badge}</span>` : ''}
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                ${optionPreview}
                <div class="product-footer">
                    ${priceHtml}
                    ${addBtn}
                </div>
            </div>
        </div>
    `}).join('');
    
    // Trigger scroll reveal animation
    setTimeout(() => {
        document.querySelectorAll('.scroll-reveal').forEach(el => {
            el.classList.add('revealed');
        });
    }, 100);
}

function filterCategory(category) {
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Re-render products
    renderProducts(category);
}

// ===========================
// SEARCH
// ===========================
function toggleSearch() {
    const dropdown = document.getElementById('searchDropdown');
    dropdown.classList.toggle('active');
    
    if (dropdown.classList.contains('active')) {
        document.getElementById('searchInput').focus();
    }
}

function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    
    if (query.length < 2) {
        resultsContainer.innerHTML = '';
        return;
    }
    
    const results = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query)
    );
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p style="padding: 12px; color: #888;">No se encontraron productos</p>';
        return;
    }
    
    resultsContainer.innerHTML = results.map(product => `
        <div class="search-result-item" onclick="goToProduct(${product.id})">
            <div class="search-result-info">
                <h4>${product.name}</h4>
                <p>$${product.price.toFixed(2)}</p>
            </div>
        </div>
    `).join('');
}

function goToProduct(productId) {
    // Show menu section
    showMenu();
    
    // Close search
    document.getElementById('searchDropdown').classList.remove('active');
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
}

// Close search when clicking outside
document.addEventListener('click', (e) => {
    const searchContainer = document.querySelector('.search-container');
    if (!searchContainer.contains(e.target)) {
        document.getElementById('searchDropdown').classList.remove('active');
    }
});

// ===========================
// CART
// ===========================
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    const chatFab = document.getElementById('momaChatFab');
    const chatWindow = document.getElementById('momaChatWindow');

    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');

    if (sidebar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
        // Ocultar chatbot mientras el carrito está abierto
        if (chatFab) chatFab.style.display = 'none';
        if (chatWindow) chatWindow.style.display = 'none';
    } else {
        document.body.style.overflow = '';
        // Restaurar chatbot al cerrar carrito
        if (chatFab) chatFab.style.display = '';
        if (chatWindow) chatWindow.style.display = '';
    }
}

// ===========================
// PRODUCT MODAL (Sabores / Especialidades)
// ===========================
function openProductModal(productId, overridePrice = null, originalPrice = null) {
    if (!currentUser) {
        showNotification('Debes iniciar sesion para agregar productos al carrito');
        openModal('loginModal');
        return;
    }
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const hasFlavors    = product.flavors    && product.flavors.length > 0;
    const hasSpecialties = product.specialties && product.specialties.length > 0;

    // If no options at all, just add directly
    if (!hasFlavors && !hasSpecialties) {
        addToCart(productId, overridePrice, originalPrice);
        return;
    }

    // Build modal content
    const displayPrice = overridePrice !== null ? overridePrice : product.price;
    const imgHtml = product.image
        ? `<img src="${product.image}" alt="${product.name}" style="width:100%;height:180px;object-fit:cover;border-radius:12px;margin-bottom:12px;">`
        : '';

    let specialtyHtml = '';
    if (hasSpecialties) {
        specialtyHtml = `
        <div class="pmodal-section">
            <p class="pmodal-label">Especialidad</p>
            <div class="pmodal-options" id="pmodalSpecialties">
                ${product.specialties.map((s, i) => `
                <button class="pmodal-option-btn${i === 0 ? ' selected' : ''}" data-type="specialty" data-value="${s}" onclick="selectModalOption(this, 'specialty')">${s}</button>
                `).join('')}
            </div>
        </div>`;
    }

    let flavorHtml = '';
    if (hasFlavors) {
        flavorHtml = `
        <div class="pmodal-section">
            <p class="pmodal-label">Sabor preferido</p>
            <div class="pmodal-options" id="pmodalFlavors">
                ${product.flavors.map((f, i) => `
                <button class="pmodal-option-btn${i === 0 ? ' selected' : ''}" data-type="flavor" data-value="${f}" onclick="selectModalOption(this, 'flavor')">${f}</button>
                `).join('')}
            </div>
        </div>`;
    }

    document.getElementById('productModalBody').innerHTML = `
        ${imgHtml}
        <h3 class="pmodal-title">${product.name}</h3>
        <p class="pmodal-desc">${product.description}</p>
        <p class="pmodal-price">$${displayPrice.toFixed(2)}</p>
        ${specialtyHtml}
        ${flavorHtml}
        <button class="pmodal-add-btn" onclick="confirmProductModal(${productId}, ${overridePrice}, ${originalPrice})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Agregar al carrito
        </button>
    `;

    openModal('productModal');
}

function selectModalOption(btn, type) {
    const parent = btn.closest('.pmodal-options');
    parent.querySelectorAll('.pmodal-option-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

function confirmProductModal(productId, overridePrice, originalPrice) {
    const selectedFlavor    = document.querySelector('#pmodalFlavors .pmodal-option-btn.selected');
    const selectedSpecialty = document.querySelector('#pmodalSpecialties .pmodal-option-btn.selected');

    const flavor    = selectedFlavor    ? selectedFlavor.dataset.value    : null;
    const specialty = selectedSpecialty ? selectedSpecialty.dataset.value : null;

    closeModal('productModal');
    addToCart(productId, overridePrice, originalPrice, flavor, specialty);
}

function addToCart(productId, overridePrice = null, originalPrice = null, flavor = null, specialty = null) {
    // Check if user is logged in
    if (!currentUser) {
        showNotification('Debes iniciar sesion para agregar productos al carrito');
        openModal('loginModal');
        return;
    }

    const product = products.find(p => p.id === productId);
    if (!product) return;

    // If product has options and none provided, open modal first
    const hasFlavors    = product.flavors    && product.flavors.length > 0;
    const hasSpecialties = product.specialties && product.specialties.length > 0;
    if ((hasFlavors || hasSpecialties) && flavor === null && specialty === null) {
        openProductModal(productId, overridePrice, originalPrice);
        return;
    }

    const finalPrice = overridePrice !== null ? overridePrice : product.price;
    const basePrice  = originalPrice !== null ? originalPrice : product.price;
    const hasPromo   = overridePrice !== null && overridePrice < basePrice;

    // Use flavor+specialty as part of cart key so same product with different options stacks separately
    const cartKey = `${productId}_${flavor || ''}_${specialty || ''}`;
    const existingItem = cart.find(item => item.cartKey === cartKey);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            cartKey,
            price: finalPrice,
            originalPrice: hasPromo ? basePrice : null,
            quantity: 1,
            flavor:    flavor    || null,
            specialty: specialty || null
        });
    }

    updateCart();
    const label = [product.name, specialty, flavor].filter(Boolean).join(' — ');
    showAddedNotification(label);
}

// Agrega todos los productos de una promo-combo al carrito,
// prorrateando el precio de promoción entre las unidades totales.
// Si un producto del combo tiene sabores/especialidades, se usa la
// primera opción por defecto (el cliente puede ajustarla luego desde el carrito).
function addComboToCart(dayKey, promoIndex) {
    if (!currentUser) {
        showNotification('Debes iniciar sesion para agregar productos al carrito');
        openModal('loginModal');
        return;
    }

    const dayData = promociones[dayKey];
    const promo = dayData && dayData.items[promoIndex];
    if (!promo || !promo.comboItems) return;

    const totalUnits = promo.comboItems.reduce((sum, ci) => sum + ci.qty, 0);
    const unitPromoPrice = promo.promoPrice / totalUnits;
    const unitOriginalPrice = (promo.originalPrice || promo.promoPrice) / totalUnits;

    promo.comboItems.forEach(ci => {
        const product = products.find(p => p.id === ci.productId);
        if (!product) return;

        const flavor    = (product.flavors    && product.flavors.length > 0)    ? product.flavors[0]    : null;
        const specialty = (product.specialties && product.specialties.length > 0) ? product.specialties[0] : null;
        const cartKey = `${product.id}_${flavor || ''}_${specialty || ''}_promo-${dayKey}-${promoIndex}`;

        const existingItem = cart.find(item => item.cartKey === cartKey);
        if (existingItem) {
            existingItem.quantity += ci.qty;
        } else {
            cart.push({
                ...product,
                cartKey,
                price: unitPromoPrice,
                originalPrice: unitOriginalPrice,
                quantity: ci.qty,
                flavor,
                specialty
            });
        }
    });

    updateCart();
    showAddedNotification(promo.name);
}

// ===========================
// PROMO CUSTOMIZATION MODAL
// (elegir producto alternativo / sabor / especialidad por cada
//  unidad del combo, antes de agregarlo al carrito)
// ===========================

// Decide si la promo necesita abrir el modal de personalización
// (tiene alternativas de producto, sabores o especialidades) o si
// se puede agregar directo al carrito (ej: Filtrados, sin opciones).
function promoNeedsCustomization(promo) {
    return promo.comboItems.some(ci => {
        if (ci.alternatives && ci.alternatives.length > 1) return true;
        const p = products.find(pr => pr.id === ci.productId);
        return p && (
            (p.flavors && p.flavors.length > 0) ||
            (p.specialties && p.specialties.length > 0)
        );
    });
}

// Punto de entrada del botón "Agregar al carrito" de cada promo
function handlePromoAdd(dayKey, promoIndex) {
    if (!currentUser) {
        showNotification('Debes iniciar sesion para agregar productos al carrito');
        openModal('loginModal');
        return;
    }

    const dayData = promociones[dayKey];
    const promo = dayData && dayData.items[promoIndex];
    if (!promo || !promo.comboItems) return;

    if (promoNeedsCustomization(promo)) {
        openPromoModal(dayKey, promoIndex);
    } else {
        addComboToCart(dayKey, promoIndex);
    }
}

// Estado temporal del modal de promo abierto actualmente
let promoSlotState = null;

// Convierte comboItems (con su qty) en "slots" individuales:
// una unidad del combo = un slot que puede tener producto alternativo,
// sabor y/o especialidad propios.
function buildPromoSlots(promo) {
    const slots = [];
    promo.comboItems.forEach((ci, ciIndex) => {
        for (let u = 0; u < ci.qty; u++) {
            const alternatives = (ci.alternatives && ci.alternatives.length > 1) ? ci.alternatives : null;
            const productId = alternatives ? alternatives[0] : ci.productId;
            slots.push({ ciIndex, unit: u, alternatives, productId, flavor: null, specialty: null });
        }
    });
    slots.forEach(s => {
        const p = products.find(pr => pr.id === s.productId);
        if (p) {
            s.flavor = (p.flavors && p.flavors.length) ? p.flavors[0] : null;
            s.specialty = (p.specialties && p.specialties.length) ? p.specialties[0] : null;
        }
    });
    return slots;
}

function openPromoModal(dayKey, promoIndex) {
    const dayData = promociones[dayKey];
    const promo = dayData.items[promoIndex];
    if (!promo) return;

    promoSlotState = { dayKey, promoIndex, slots: buildPromoSlots(promo) };
    renderPromoModalBody();
    openModal('promoModal');
}

function renderPromoModalBody() {
    if (!promoSlotState) return;
    const dayData = promociones[promoSlotState.dayKey];
    const promo = dayData.items[promoSlotState.promoIndex];

    const imgHtml = promo.image
        ? `<img src="${promo.image}" alt="${promo.name}" style="width:100%;height:180px;object-fit:cover;border-radius:12px;margin-bottom:12px;" onerror="this.style.display='none'">`
        : '';

    const slotsHtml = promoSlotState.slots.map((slot, slotIndex) => {
        const product = products.find(p => p.id === slot.productId);
        if (!product) return '';

        let switcherHtml = '';
        if (slot.alternatives) {
            switcherHtml = `
            <div class="pmodal-options">
                ${slot.alternatives.map(pid => {
                    const altP = products.find(p => p.id === pid);
                    if (!altP) return '';
                    return `<button class="pmodal-option-btn${pid === slot.productId ? ' selected' : ''}" onclick="selectPromoSlotProduct(${slotIndex}, ${pid})">${altP.name}</button>`;
                }).join('')}
            </div>`;
        }

        let flavorHtml = '';
        if (product.flavors && product.flavors.length > 0) {
            flavorHtml = `
            <p class="pmodal-label">Sabor preferido</p>
            <div class="pmodal-options">
                ${product.flavors.map(f => `<button class="pmodal-option-btn${f === slot.flavor ? ' selected' : ''}" onclick="selectPromoSlotOption(${slotIndex}, 'flavor', '${f.replace(/'/g, "\\'")}')">${f}</button>`).join('')}
            </div>`;
        }

        let specialtyHtml = '';
        if (product.specialties && product.specialties.length > 0) {
            specialtyHtml = `
            <p class="pmodal-label">Especialidad</p>
            <div class="pmodal-options">
                ${product.specialties.map(s => `<button class="pmodal-option-btn${s === slot.specialty ? ' selected' : ''}" onclick="selectPromoSlotOption(${slotIndex}, 'specialty', '${s.replace(/'/g, "\\'")}')">${s}</button>`).join('')}
            </div>`;
        }

        const slotLabel = slot.alternatives
            ? `${product.name} (opción ${slot.unit + 1})`
            : product.name;

        return `
        <div class="promo-slot">
            <p class="pmodal-label promo-slot-title">${slotLabel}</p>
            ${switcherHtml}
            ${flavorHtml}
            ${specialtyHtml}
        </div>`;
    }).join('');

    document.getElementById('promoModalBody').innerHTML = `
        ${imgHtml}
        <h3 class="pmodal-title">${promo.name}</h3>
        <p class="pmodal-desc">${promo.description}</p>
        <p class="pmodal-price">$${promo.promoPrice.toFixed(2)}</p>
        ${slotsHtml}
        <button class="pmodal-add-btn" onclick="confirmPromoModal()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Agregar al carrito
        </button>
    `;
}

// Cambia el producto elegido para un slot con alternativas
// (ej: Frappe Premium <-> Frappe Clásico, o el postre a elección)
// y reinicia su sabor/especialidad al primero disponible del nuevo producto.
function selectPromoSlotProduct(slotIndex, productId) {
    const slot = promoSlotState.slots[slotIndex];
    slot.productId = productId;
    const product = products.find(p => p.id === productId);
    slot.flavor = (product && product.flavors && product.flavors.length) ? product.flavors[0] : null;
    slot.specialty = (product && product.specialties && product.specialties.length) ? product.specialties[0] : null;
    renderPromoModalBody();
}

function selectPromoSlotOption(slotIndex, type, value) {
    promoSlotState.slots[slotIndex][type] = value;
    renderPromoModalBody();
}

function confirmPromoModal() {
    if (!promoSlotState) return;
    const { dayKey, promoIndex, slots } = promoSlotState;
    const dayData = promociones[dayKey];
    const promo = dayData.items[promoIndex];
    if (!promo) return;

    const totalUnits = slots.length;
    const unitPromoPrice = promo.promoPrice / totalUnits;
    const unitOriginalPrice = (promo.originalPrice || promo.promoPrice) / totalUnits;

    slots.forEach(slot => {
        const product = products.find(p => p.id === slot.productId);
        if (!product) return;

        const cartKey = `${product.id}_${slot.flavor || ''}_${slot.specialty || ''}_promo-${dayKey}-${promoIndex}`;
        const existingItem = cart.find(item => item.cartKey === cartKey);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                cartKey,
                price: unitPromoPrice,
                originalPrice: unitOriginalPrice,
                quantity: 1,
                flavor: slot.flavor,
                specialty: slot.specialty
            });
        }
    });

    closeModal('promoModal');
    updateCart();
    showAddedNotification(promo.name);
    promoSlotState = null;
}

function removeFromCart(cartKey) {
    cart = cart.filter(item => item.cartKey === cartKey ? false : true);
    updateCart();
}

function updateQuantity(cartKey, change) {
    const item = cart.find(item => item.cartKey === cartKey);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(cartKey);
    } else {
        updateCart();
    }
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartFooter = document.getElementById('cartFooter');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartTotal = document.getElementById('cartTotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                <p>Tu carrito está vacío</p>
            </div>
        `;
        cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => {
            const savings = item.originalPrice ? (item.originalPrice - item.price) * item.quantity : 0;
            const savingsHtml = savings > 0
                ? `<p class="cart-item-original-price">$${item.originalPrice.toFixed(2)} c/u</p>
                   <span class="cart-item-promo-badge">Ahorras $${savings.toFixed(2)}</span>`
                : '';
            const optionsHtml = [item.specialty, item.flavor].filter(Boolean).map(o => `<span class="cart-item-option">${o}</span>`).join('');
            const ck = JSON.stringify(item.cartKey).replace(/"/g, '&quot;');
            return `
            <div class="cart-item">
                <div class="cart-item-image">
                    ${item.image
                        ? `<img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;border-radius:10px;">`
                        : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
                            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>
                           </svg>`
                    }
                </div>
                <div class="cart-item-info">
                    <p class="cart-item-name">${item.name}</p>
                    ${optionsHtml ? `<div class="cart-item-options">${optionsHtml}</div>` : ''}
                    ${savingsHtml}
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateQuantity(${ck}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${ck}, 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${ck})">Eliminar</button>
            </div>
        `}).join('');
        
        cartSubtotal.textContent = `$${total.toFixed(2)}`;
        cartTotal.textContent = `$${total.toFixed(2)}`;
        
        // Show total savings if any promo items
        const totalSavings = cart.reduce((sum, item) => {
            return sum + (item.originalPrice ? (item.originalPrice - item.price) * item.quantity : 0);
        }, 0);
        let savingsRow = document.getElementById('cartSavingsRow');
        if (totalSavings > 0) {
            if (!savingsRow) {
                savingsRow = document.createElement('div');
                savingsRow.id = 'cartSavingsRow';
                savingsRow.className = 'cart-savings-total';
                cartSubtotal.parentElement.parentElement.insertBefore(savingsRow, cartSubtotal.parentElement);
            }
            savingsRow.innerHTML = `<span>🎉 Ahorras en total</span><span class="savings-amount">-$${totalSavings.toFixed(2)}</span>`;
        } else if (savingsRow) {
            savingsRow.remove();
        }
        
        cartFooter.style.display = 'block';
    }
    
    // Save to localStorage
    localStorage.setItem('momaCart', JSON.stringify(cart));
}

function showAddedNotification(productName) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        background: #5c6b4a;
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        font-size: 14px;
    `;
    notification.innerHTML = `✓ ${productName} agregado al carrito`;
    
    document.body.appendChild(notification);
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // Remove after 2 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('momaCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// ===========================
// CHECKOUT
// ===========================
function openCheckout() {
    if (cart.length === 0) return;
    
    // Check if user is logged in
    if (!currentUser) {
        showNotification('Debes iniciar sesion para realizar un pedido');
        openModal('loginModal');
        return;
    }
    
    toggleCart();
    openModal('checkoutModal');
    updateOrderSummary();
}

function selectDeliveryOption(option) {
    deliveryOption = option;
    
    // Update button styles
    document.querySelectorAll('.checkout-option').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.closest('.checkout-option').classList.add('selected');
    
    // Show/hide delivery form
    const deliveryForm = document.getElementById('deliveryForm');
    if (option === 'delivery') {
        deliveryForm.style.display = 'block';
    } else {
        deliveryForm.style.display = 'none';
    }
}

function updateOrderSummary() {
    const orderItems = document.getElementById('orderItems');
    const orderTotal = document.getElementById('orderTotal');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    orderItems.innerHTML = cart.map(item => {
        const opts = [item.specialty, item.flavor].filter(Boolean).join(' · ');
        return `
        <div class="order-item">
            <span>${item.quantity}x ${item.name}${opts ? `<br><small style="opacity:.7">${opts}</small>` : ''}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `}).join('');
    
    orderTotal.textContent = `$${total.toFixed(2)}`;
}

function sendToWhatsApp() {
    if (cart.length === 0) return;
    
    // Check if user is logged in
    if (!currentUser) {
        showNotification('Debes iniciar sesion para enviar tu pedido');
        openModal('loginModal');
        return;
    }
    
    // Validate delivery address if delivery option selected
    if (deliveryOption === 'delivery') {
        const address = document.getElementById('deliveryAddress').value.trim();
        if (!address) {
            showNotification('Por favor ingresa tu direccion de entrega');
            return;
        }
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    let message = "🌿 *NUEVO PEDIDO - MOMA COFFEESHOP* 🌿\n\n";
    message += "📋 *Detalle del pedido:*\n";
    message += "━━━━━━━━━━━━━━━\n";
    
    cart.forEach(item => {
        let line = `• ${item.quantity}x ${item.name}`;
        if (item.specialty) line += ` (${item.specialty})`;
        if (item.flavor)    line += ` — Sabor: ${item.flavor}`;
        line += ` - $${(item.price * item.quantity).toFixed(2)}`;
        message += line + '\n';
    });
    
    message += "━━━━━━━━━━━━━━━\n";
    message += `💰 *TOTAL: $${total.toFixed(2)}*\n\n`;
    
    if (deliveryOption === 'pickup') {
        message += "📍 *Metodo:* Recoger en local\n";
    } else {
        const address = document.getElementById('deliveryAddress').value || currentUser.address;
        message += `🚗 *Metodo:* Delivery\n`;
        message += `📍 *Direccion:* ${address}\n`;
    }
    
    message += `\n👤 *Cliente:* ${currentUser.name}\n`;
    message += `📧 *Correo:* ${currentUser.email}\n`;
    message += `📞 *Celular:* ${currentUser.phone}\n`;
    message += `🏠 *Direccion registrada:* ${currentUser.address}\n`;
    
    message += "\n✨ ¡Gracias por su preferencia!";
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=50374338506&text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Save order to history
    const orderRecord = {
        id: Date.now(),
        date: new Date().toISOString(),
        items: cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            flavor: item.flavor || null,
            specialty: item.specialty || null
        })),
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        method: deliveryOption === 'pickup' ? 'Recoger en local' : 'Delivery',
        address: deliveryOption === 'delivery' ? (document.getElementById('deliveryAddress').value || currentUser.address) : null,
        userEmail: currentUser.email
    };
    const allOrders = JSON.parse(localStorage.getItem('momaOrders') || '[]');
    allOrders.push(orderRecord);
    localStorage.setItem('momaOrders', JSON.stringify(allOrders));

    // Clear cart after sending
    cart = [];
    updateCart();
    closeModal('checkoutModal');
}

// ===========================
// MODALS
// ===========================
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = '';
}

function switchModal(closeId, openId) {
    closeModal(closeId);
    setTimeout(() => openModal(openId), 200);
}

// Close modal when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// ===========================
// AUTHENTICATION
// ===========================
function handleRegister(e) {
    e.preventDefault();
    
    // Clear previous errors
    clearErrors();
    
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const phone = document.getElementById('registerPhone').value.trim();
    const address = document.getElementById('registerAddress').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    let hasError = false;
    
    // Validations
    if (!name) {
        showError('registerNameError', 'El nombre es obligatorio');
        hasError = true;
    } else if (name.length < 3) {
        showError('registerNameError', 'El nombre debe tener al menos 3 caracteres');
        hasError = true;
    }
    
    if (!email) {
        showError('registerEmailError', 'El correo es obligatorio');
        hasError = true;
    } else if (!isValidEmail(email)) {
        showError('registerEmailError', 'Ingresa un correo valido (ejemplo@dominio.com)');
        hasError = true;
    }
    
    if (!phone) {
        showError('registerPhoneError', 'El celular es obligatorio');
        hasError = true;
    } else if (phone.length < 8) {
        showError('registerPhoneError', 'Ingresa un numero de celular valido');
        hasError = true;
    }
    
    if (!address) {
        showError('registerAddressError', 'La direccion es obligatoria');
        hasError = true;
    } else if (address.length < 10) {
        showError('registerAddressError', 'Por favor ingresa una direccion mas detallada');
        hasError = true;
    }
    
    if (!password) {
        showError('registerPasswordError', 'La contrasena es obligatoria');
        hasError = true;
    } else if (password.length < 8) {
        showError('registerPasswordError', 'La contrasena debe tener minimo 8 caracteres');
        hasError = true;
    }
    
    if (!confirmPassword) {
        showError('registerConfirmPasswordError', 'Debes confirmar tu contrasena');
        hasError = true;
    } else if (password !== confirmPassword) {
        showError('registerConfirmPasswordError', 'Las contrasenas no coinciden');
        hasError = true;
    }
    
    if (hasError) return;

    // Check for duplicate email
    const existingUsers = JSON.parse(localStorage.getItem('momaUsers') || '[]');
    if (existingUsers.find(u => u.email.toLowerCase() === email.toLowerCase())) {
        showError('registerEmailError', 'Este correo ya está registrado. Inicia sesión.');
        return;
    }

    // Save user in multi-user store
    const user = { name, email, phone, address, password };
    existingUsers.push(user);
    localStorage.setItem('momaUsers', JSON.stringify(existingUsers));
    // Also keep momaUser for backwards compatibility with auto-login
    localStorage.setItem('momaUser', JSON.stringify(user));

    // Login user
    loginUser(user);
    closeModal('registerModal');

    showNotification('¡Cuenta creada exitosamente! Bienvenido ' + name);
}

// Get location for registration
function getLocationForRegister() {
    if (!navigator.geolocation) {
        showNotification('Tu navegador no soporta geolocalizacion');
        return;
    }
    
    showNotification('Obteniendo tu ubicacion...');
    
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            
            // Try to get address from coordinates using reverse geocoding
            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`);
                const data = await response.json();
                
                if (data.display_name) {
                    document.getElementById('registerAddress').value = data.display_name;
                    showNotification('Ubicacion obtenida correctamente');
                } else {
                    document.getElementById('registerAddress').value = `Latitud: ${lat}, Longitud: ${lng}`;
                    showNotification('Ubicacion obtenida (coordenadas)');
                }
            } catch (error) {
                document.getElementById('registerAddress').value = `Latitud: ${lat}, Longitud: ${lng}`;
                showNotification('Ubicacion obtenida (coordenadas)');
            }
        },
        (error) => {
            let errorMsg = 'No se pudo obtener tu ubicacion';
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMsg = 'Permiso de ubicacion denegado. Activa el GPS y permite el acceso.';
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMsg = 'Ubicacion no disponible';
                    break;
                case error.TIMEOUT:
                    errorMsg = 'Tiempo de espera agotado';
                    break;
            }
            showNotification(errorMsg);
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}

function handleLogin(e) {
    e.preventDefault();
    
    clearErrors();
    
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    
    let hasError = false;
    
    if (!email) {
        showError('loginEmailError', 'El correo es obligatorio');
        hasError = true;
    }
    
    if (!password) {
        showError('loginPasswordError', 'La contraseña es obligatoria');
        hasError = true;
    }
    
    if (hasError) return;
    
    // Check credentials in multi-user store
    const allUsers = JSON.parse(localStorage.getItem('momaUsers') || '[]');
    const user = allUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
        showError('loginEmailError', 'No existe una cuenta con este correo');
        return;
    }
    if (user.password !== password) {
        showError('loginPasswordError', 'Contraseña incorrecta');
        return;
    }
    
    loginUser(user);
    closeModal('loginModal');
    
    showNotification(`¡Bienvenido, ${user.name}!`);
}

function loginUser(user) {
    currentUser = user;
    
    // Update UI - Show user name in navbar
    const userNameEl = document.getElementById('userName');
    const userWelcomeEl = document.getElementById('userWelcome');
    
    if (userNameEl) {
        userNameEl.textContent = user.name.split(' ')[0]; // First name only
    }
    if (userWelcomeEl) {
        userWelcomeEl.style.display = 'flex';
    }
    
    // Hide login/register buttons on desktop
    document.querySelectorAll('.nav-btn').forEach(btn => {
        if (btn.textContent.includes('Registro') || btn.textContent.includes('Iniciar')) {
            btn.style.display = 'none';
        }
    });
    
    // Also hide in mobile menu
    document.querySelectorAll('.mobile-menu .nav-btn').forEach(btn => {
        if (btn.textContent.includes('Registro') || btn.textContent.includes('Iniciar')) {
            btn.style.display = 'none';
        }
    });

    // Update auth-gated sections
    updateResenaFormVisibility();
    if (typeof updateMuralUploadVisibility === 'function') updateMuralUploadVisibility();
}

function logout() {
    currentUser = null;
    
    const userWelcomeEl = document.getElementById('userWelcome');
    if (userWelcomeEl) {
        userWelcomeEl.style.display = 'none';
    }
    
    // Show login/register buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.style.display = '';
    });
    
    // Clear cart
    cart = [];
    updateCart();

    // Update auth-gated sections
    updateResenaFormVisibility();
    if (typeof updateMuralUploadVisibility === 'function') updateMuralUploadVisibility();
    
    showNotification('Has cerrado sesion');
}

// ===========================
// MIS PEDIDOS
// ===========================
function openMyOrders() {
    if (!currentUser) {
        showNotification('Debes iniciar sesión para ver tus pedidos');
        openModal('loginModal');
        return;
    }

    const allOrders = JSON.parse(localStorage.getItem('momaOrders') || '[]');
    const myOrders = allOrders.filter(o => o.userEmail === currentUser.email);

    const container = document.getElementById('myOrdersList');
    if (!container) return;

    if (myOrders.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; padding:40px 0; color:#888;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:48px;height:48px;margin-bottom:12px;opacity:.4;">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                <p style="font-size:15px;">Aún no tienes pedidos realizados.</p>
            </div>`;
    } else {
        const months = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
        container.innerHTML = [...myOrders].reverse().map((order, idx) => {
            const d = new Date(order.date);
            const dateStr = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()} — ${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}`;
            const itemsList = order.items.map(item => {
                let label = `${item.quantity}x ${item.name}`;
                if (item.specialty) label += ` (${item.specialty})`;
                if (item.flavor) label += ` — ${item.flavor}`;
                return `<div class="myorder-item-row"><span>${label}</span><span>$${(item.price * item.quantity).toFixed(2)}</span></div>`;
            }).join('');
            const methodIcon = order.method === 'Delivery' ? '🚗' : '🏠';
            return `
            <div class="myorder-card">
                <div class="myorder-header">
                    <div>
                        <span class="myorder-num">Pedido #${myOrders.length - idx}</span>
                        <span class="myorder-date">${dateStr}</span>
                    </div>
                    <span class="myorder-method">${methodIcon} ${order.method}</span>
                </div>
                <div class="myorder-items">${itemsList}</div>
                ${order.address ? `<div class="myorder-address">📍 ${order.address}</div>` : ''}
                <div class="myorder-total">Total: <strong>$${order.total.toFixed(2)}</strong></div>
            </div>`;
        }).join('');
    }

    openModal('myOrdersModal');
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(elementId, message) {
    const errorEl = document.getElementById(elementId);
    if (errorEl) {
        errorEl.textContent = message;
        errorEl.previousElementSibling.classList.add('error');
    }
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('input.error').forEach(el => el.classList.remove('error'));
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: #5c6b4a;
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        font-size: 14px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===========================
// SCROLL REVEAL ANIMATION
// ===========================
function handleScrollReveal() {
    const elements = document.querySelectorAll('.scroll-reveal:not(.revealed)');
    
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
            el.classList.add('revealed');
        }
    });
}

window.addEventListener('scroll', handleScrollReveal);

// ===========================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===========================
// INITIALIZE
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    
    // Check for logged in user
    const savedUser = localStorage.getItem('momaUser');
    if (savedUser) {
        const user = JSON.parse(savedUser);
        // Don't auto-login, just keep the data
    }
});
document.querySelector('.hero-scroll-indicator').addEventListener('click', function() {
    const target = document.getElementById('historia');
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1500; // milisegundos, súbelo para más lento
    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const ease = Math.min(progress / duration, 1);
        window.scrollTo(0, startPosition + distance * ease);
        if (progress < duration) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
});

// ===========================
// RESEÑAS / REVIEWS
// ===========================
(function() {
    const avatarColors = ['av1','av2','av3','av4','av5'];
    const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    let selectedStars = 0;

    function initStars() {
        const starsEl = document.querySelectorAll('.star-btn');
        if (!starsEl.length) return;

        starsEl.forEach(s => {
            s.addEventListener('click', () => {
                selectedStars = parseInt(s.dataset.v);
                updateStarDisplay(starsEl, selectedStars);
            });
            s.addEventListener('mouseenter', () => {
                updateStarDisplay(starsEl, parseInt(s.dataset.v));
            });
        });

        document.getElementById('starInput')?.addEventListener('mouseleave', () => {
            updateStarDisplay(starsEl, selectedStars);
        });
    }

    function updateStarDisplay(starsEl, val) {
        starsEl.forEach(b => b.classList.toggle('active', parseInt(b.dataset.v) <= val));
    }

    function updateRatingSummary() {
        const cards = document.querySelectorAll('#resenasGrid .resena-card');
        const counts = {1:0, 2:0, 3:0, 4:0, 5:0};
        let total = 0;

        cards.forEach(card => {
            const starsEl = card.querySelector('.resena-stars');
            if (!starsEl) return;
            const filled = (starsEl.textContent.match(/★/g) || []).length;
            if (filled >= 1 && filled <= 5) {
                counts[filled]++;
                total++;
            }
        });

        if (total === 0) return;

        const sum = Object.entries(counts).reduce((acc, [k,v]) => acc + parseInt(k)*v, 0);
        const avg = (sum / total).toFixed(1);

        const ratingNum = document.getElementById('ratingNumber');
        const ratingCount = document.getElementById('ratingCount');
        if (ratingNum) ratingNum.textContent = avg;
        if (ratingCount) ratingCount.textContent = total + (total === 1 ? ' reseña' : ' reseñas');

        [1,2,3,4,5].forEach(n => {
            const pct = total > 0 ? Math.round((counts[n] / total) * 100) : 0;
            const bar = document.getElementById('bar' + n);
            const label = document.getElementById('pct' + n);
            if (bar) bar.style.width = pct + '%';
            if (label) label.textContent = pct + '%';
        });
    }

    window.submitResena = function() {
        // Check if user is logged in
        if (!currentUser) {
            openModal('loginModal');
            showNotification('Debes iniciar sesión para publicar una reseña');
            return;
        }

        const name = (document.getElementById('rev-name').value.trim()) || currentUser.name;
        const cat  = document.getElementById('rev-cat').value;
        const text = document.getElementById('rev-text').value.trim();

        if (!name || !cat || !text || selectedStars === 0) {
            alert('Por favor completa todos los campos y selecciona una calificación.');
            return;
        }

        const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
        const avClass  = avatarColors[Math.floor(Math.random() * avatarColors.length)];
        const starStr  = '★'.repeat(selectedStars) + '☆'.repeat(5 - selectedStars);
        const now      = new Date();
        const dateStr  = months[now.getMonth()] + ' ' + now.getFullYear();

        // Save review to localStorage
        const reviewData = { name, cat, text, stars: selectedStars, date: dateStr, avClass, initials, userEmail: currentUser.email };
        const savedReviews = JSON.parse(localStorage.getItem('momaResenas') || '[]');
        savedReviews.push(reviewData);
        localStorage.setItem('momaResenas', JSON.stringify(savedReviews));

        addResenaCard(reviewData, true);

        updateRatingSummary();

        document.getElementById('rev-name').value  = '';
        document.getElementById('rev-cat').value   = '';
        document.getElementById('rev-text').value  = '';
        selectedStars = 0;
        updateStarDisplay(document.querySelectorAll('.star-btn'), 0);

        const msg = document.getElementById('resenaSuccess');
        msg.style.display = 'block';
        setTimeout(() => { msg.style.display = 'none'; }, 3500);
    };

    function addResenaCard(data, prepend) {
        const { name, cat, text, stars, date, avClass, initials } = data;
        const starStr = '★'.repeat(stars) + '☆'.repeat(5 - stars);
        const card = document.createElement('div');
        card.className = 'resena-card';
        card.innerHTML = `
            <div class="resena-top">
                <div class="resena-avatar ${avClass}">${initials}</div>
                <div>
                    <div class="resena-name">${name}</div>
                    <div class="resena-date">${date}</div>
                </div>
            </div>
            <div class="resena-stars">${starStr}</div>
            <span class="resena-category">${cat}</span>
            <span class="resena-quote">"</span>
            <p class="resena-text">${text}</p>
        `;
        const grid = document.getElementById('resenasGrid');
        if (prepend) grid.prepend(card);
        else grid.appendChild(card);
    }

    function loadSavedResenas() {
        const savedReviews = JSON.parse(localStorage.getItem('momaResenas') || '[]');
        savedReviews.forEach(r => addResenaCard(r, false));
        updateRatingSummary();
    }

    document.addEventListener('DOMContentLoaded', () => {
        initStars();
        loadSavedResenas();
        updateResenaFormVisibility();
    });
})();

// ===========================
// REVIEW FORM AUTH VISIBILITY
// ===========================
function updateResenaFormVisibility() {
    const gate = document.getElementById('resenaAuthGate');
    const body = document.getElementById('resenaFormBody');
    if (!gate || !body) return;
    if (currentUser) {
        gate.style.display = 'none';
        body.style.display = 'block';
        // Pre-fill name if empty
        const nameField = document.getElementById('rev-name');
        if (nameField && !nameField.value) nameField.value = currentUser.name;
    } else {
        gate.style.display = 'flex';
        body.style.display = 'none';
    }
}

// ===========================
// MURAL DE FOTOS
// ===========================
(function() {
    let pendingPhotoDataUrl = null;

    // Drag & drop
    document.addEventListener('DOMContentLoaded', () => {
        const dropZone = document.getElementById('muralDropZone');
        if (!dropZone) return;

        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.classList.add('drag-over');
        });
        dropZone.addEventListener('dragleave', () => {
            dropZone.classList.remove('drag-over');
        });
        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('drag-over');
            if (!currentUser) { showMuralAuthPrompt(); return; }
            const file = e.dataTransfer.files[0];
            if (file) processMuralFile(file);
        });

        // Show/hide auth prompt based on login state
        updateMuralUploadVisibility();
        loadSavedMural();
    });

    function updateMuralUploadVisibility() {
        const box = document.getElementById('muralDropZone');
        const authPrompt = document.getElementById('muralAuthPrompt');
        if (!box || !authPrompt) return;
        if (currentUser) {
            box.style.display = 'flex';
            authPrompt.style.display = 'none';
        } else {
            box.style.display = 'none';
            authPrompt.style.display = 'flex';
        }
    }

    function showMuralAuthPrompt() {
        document.getElementById('muralDropZone').style.display = 'none';
        document.getElementById('muralAuthPrompt').style.display = 'flex';
    }

    function processMuralFile(file) {
        if (!file.type.startsWith('image/')) {
            showNotification('Solo se permiten imágenes (JPG, PNG, WEBP)');
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            showNotification('La imagen no puede superar los 5MB');
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            pendingPhotoDataUrl = e.target.result;
            document.getElementById('muralPreviewImg').src = pendingPhotoDataUrl;
            document.getElementById('muralDropZone').style.display = 'none';
            document.getElementById('muralPreviewArea').style.display = 'flex';
        };
        reader.readAsDataURL(file);
    }

    window.handleMuralUpload = function(event) {
        if (!currentUser) { showMuralAuthPrompt(); return; }
        const file = event.target.files[0];
        if (file) processMuralFile(file);
        event.target.value = '';
    };

    window.cancelMuralPreview = function() {
        pendingPhotoDataUrl = null;
        document.getElementById('muralPreviewArea').style.display = 'none';
        document.getElementById('muralCaption').value = '';
        document.getElementById('muralDropZone').style.display = currentUser ? 'flex' : 'none';
    };

    window.publishMuralPhoto = function() {
        if (!pendingPhotoDataUrl || !currentUser) return;
        const caption = document.getElementById('muralCaption').value.trim();
        const username = '@' + currentUser.name.split(' ')[0].toLowerCase();

        // Save to localStorage
        const muralData = { src: pendingPhotoDataUrl, caption, username, userEmail: currentUser.email };
        const savedMural = JSON.parse(localStorage.getItem('momaMural') || '[]');
        savedMural.push(muralData);
        localStorage.setItem('momaMural', JSON.stringify(savedMural));

        addMuralCard(muralData, true);

        cancelMuralPreview();
        showNotification('¡Tu foto fue publicada en el mural! 📸');

        const grid = document.getElementById('muralGrid');
        setTimeout(() => grid.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
    };

    function addMuralCard(data, prepend) {
        const { src, caption, username } = data;
        const card = document.createElement('div');
        card.className = 'mural-photo-card mural-new';
        card.style.setProperty('--photo-delay', '0s');
        card.innerHTML = `
            <div class="mural-photo-wrap">
                <img src="${src}" alt="Foto de ${username}">
                <div class="mural-photo-overlay">
                    <span class="mural-photo-user">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        ${username}
                    </span>
                </div>
            </div>
            ${caption ? `<p class="mural-photo-caption">${caption}</p>` : ''}
        `;
        const grid = document.getElementById('muralGrid');
        if (prepend) grid.prepend(card);
        else grid.appendChild(card);
        setTimeout(() => card.classList.add('mural-visible'), 50);
    }

    function loadSavedMural() {
        const saved = JSON.parse(localStorage.getItem('momaMural') || '[]');
        saved.forEach(item => addMuralCard(item, false));
    }

    // Expose for login/logout events
    window.updateMuralUploadVisibility = updateMuralUploadVisibility;
})();

// ===========================
// MOMA CHATBOT
// ===========================
(function () {

    // --- Contexto completo del negocio para la IA ---
    const MOMA_SYSTEM = `Eres el asistente virtual de Moma CoffeeShop, una cafetería premium ubicada en Ahuachapán, El Salvador. Tu nombre es "Momita". Respondes siempre en español, con un tono amable, cálido y profesional, usando emojis con moderación.

INFORMACIÓN DEL NEGOCIO:
- Nombre: Moma CoffeeShop
- Dirección: Ahuachapán, Ahuachapán, El Salvador
- Teléfono/WhatsApp: +503 7433 8506
- Horario: Lunes, Miércoles a Domingo: 11:00 AM – 8:30 PM. MARTES: CERRADO.
- Redes sociales: Instagram @moma_sv_ | Facebook: Moma CoffeeShop | TikTok @moma_sv_

MENÚ COMPLETO CON PRECIOS:

BEBIDAS FRÍAS:
- Frappe Premium $3.95 — Sabores: Mocca, Chocolate, Baileys, Marshmellow, Tostado, Galleta
- Frappe Clásico $3.50 — Sabores: Caramelo, Vainilla, Café
- Orange Black $3.50 — Naranja con espresso frío
- Café Helado $2.75
- Americano Frío $3.25
- Iced Latte $3.50 — Saborizantes a elegir (Caramelo, Vainilla, Mocca, Menta, Avellana, Almendra, Lavanda, Baileys, Galleta, Marshmellow Tostado)
- Iced Latte Premium $3.75 — Saborizantes premium a elegir
- Frozen Frutas $3.50 — Melocotón o Coco, base leche o agua
- Matcha $3.95 — Matcha latte helado
- Matcha Strawberry $3.95 — Matcha con fresa
- Matcha Lavanda $3.95
- Milk Tea 16oz $3.95 — Especialidades: Taro, Honey Dew, Milk Tea, Blue Chai, Mango, Matcha
- Dirty Chai $3.95 — Té chai con espresso
- Soda Italiana $3.00 — Manzana Verde o Frutos Rojos (perlas explosivas +$0.50)

BEBIDAS CALIENTES:
- Café Negro $1.25
- Café Americano $2.75
- Espresso $2.50
- Cappuccino $2.75
- Latte $3.50
- Mocca $3.75
- Dirty Chai caliente $3.95
- Milk Tea caliente $3.50
- Té Aromático $1.95
- Saborizante extra $0.50

POSTRES:
- Brownie $3.25
- Cheesecake $3.25
- Flan de Queso $3.25
- Tres Leches $3.25
- Postre del Día $3.25
- Affogato $3.25
- Galletas Chunky $1.75
- Waffles con Fruta $3.95
- (Postres completos se agendan con 48hrs de anticipación)

PLATILLOS:
- Tostadas $3.25 — Tom & Cherry, La Verde, Cocomelo o Banaberries
- Panini + Papas $5.95 — Pechuga al Pesto, Margarita, Porco Verde, Tres Quesos con Champiñones. Incluye bebida.
- Ensalada de la Casa — Incluye bebida
- Wrapp de Pechuga + Papas — Incluye bebida
- Burger + Papas $7.50 — Con Champiñones o Tocino. Incluye bebida.
- Porción de Papas con Queso $3.50
- Combo Toast $6.00 — Tostada artesanal + iced latte

PEDIDOS:
- Los clientes pueden ordenar en el sitio web usando el carrito de compras.
- También pueden contactar por WhatsApp al +503 7433 8506 para hacer su pedido.
- Se ofrece delivery y opción de recoger en el local.

REGLAS IMPORTANTES:
- Si alguien pregunta por un producto que no está en el menú, indícalo amablemente.
- Si alguien quiere hacer un pedido, dirígelo al carrito del sitio web o al WhatsApp.
- Respuestas cortas y directas. Máximo 3-4 oraciones por respuesta.
- No inventes precios ni productos que no estén en el menú.`;

    const chatHistory = [];
    let chatOpen = false;

    // --- Toggle ventana ---
    window.toggleMomaChat = function () {
        const win = document.getElementById('momaChatWindow');
        chatOpen = !chatOpen;
        win.classList.toggle('open', chatOpen);
        document.getElementById('fabBadge').style.display = 'none';
        if (chatOpen) {
            document.getElementById('momaChatInput').focus();
            scrollToBottom();
        }
    };

    // --- Botones rápidos ---
    window.sendQuick = function (text) {
        document.getElementById('momaChatInput').value = text;
        sendMomaMessage();
        const qb = document.getElementById('quickBtns');
        if (qb) qb.remove();
    };

    // --- Enviar mensaje ---
    window.sendMomaMessage = function () {
        const input = document.getElementById('momaChatInput');
        const text = input.value.trim();
        if (!text) return;

        input.value = '';
        appendMessage('user', text);

        const qb = document.getElementById('quickBtns');
        if (qb) qb.remove();

        showTyping(true);
        scrollToBottom();

        setTimeout(function () {
            showTyping(false);
            const reply = momaResponder(text);
            const addWA = reply.addWA || false;
            appendMessage('bot', reply.text, addWA);
            scrollToBottom();
        }, 800);
    };

    function momaResponder(msg) {
        const m = msg.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        // Saludos
        if (/^(hola|buenas|buenos|buen dia|good|hi|hey|saludos|que tal|como estan)/.test(m)) {
            return { text: '¡Hola! ☕ ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre nuestro menú, horarios, ubicación o cómo hacer tu pedido.', addWA: false };
        }

        // Menú general
        if (/menu|carta|que tienen|que venden|que ofrecen|productos|bebidas/.test(m)) {
            return { text: '¡Con gusto! ☕ Tenemos:\n\n🧊 <b>Frías:</b> Frappe Premium $3.95, Frappe Clásico $3.50, Orange Black $3.50, Iced Latte $3.50, Matcha $3.95, Milk Tea $3.95, Dirty Chai $3.95, Soda Italiana $3.00 y más.\n\n🔥 <b>Calientes:</b> Café Negro $1.25, Cappuccino $2.75, Americano $2.75, Latte $3.50, Mocca $3.75, Espresso $2.50\n\n🍰 <b>Postres:</b> Cheesecake $3.25, Brownie $3.25, Tres Leches $3.25, Affogato $3.25, Waffles $3.95, Galletas $1.75\n\n🍔 <b>Platillos:</b> Tostadas $3.25, Panini+Papas $5.95, Burger+Papas $7.50, Combo Toast $6.00', addWA: false };
        }

        // Bebidas frías
        if (/fria|frias|helada|frappe|matcha|milk tea|chai|orange black|cold|iced|soda/.test(m)) {
            return { text: '🧊 <b>Bebidas Frías:</b>\n• Frappe Premium $3.95 (Mocca, Chocolate, Baileys, Marshmellow, Tostado, Galleta)\n• Frappe Clásico $3.50 (Caramelo, Vainilla, Café)\n• Café Helado $2.75\n• Americano Frío $3.25\n• Iced Latte $3.50 / Premium $3.75\n• Frozen Frutas $3.50\n• Matcha / Matcha Strawberry / Matcha Lavanda $3.95\n• Milk Tea 16oz $3.95 (Taro, Honey Dew, Blue Chai, Mango, Matcha)\n• Dirty Chai $3.95\n• Soda Italiana $3.00', addWA: false };
        }

        // Bebidas calientes
        if (/caliente|calientes|cappuccino|capuccino|americano|espresso|cafe negro|mocca|te aromatico|te |latte/.test(m)) {
            return { text: '🔥 <b>Bebidas Calientes:</b>\n• Café Negro $1.25\n• Café Americano $2.75\n• Espresso $2.50\n• Cappuccino $2.75\n• Latte $3.50\n• Mocca $3.75\n• Dirty Chai $3.95\n• Milk Tea caliente $3.50\n• Té Aromático $1.95\n\n*Saborizante extra +$0.50', addWA: false };
        }

        // Postres
        if (/postre|postres|cheesecake|brownie|flan|galleta|tres leches|dulce|torta|pastel|affogato|waffle/.test(m)) {
            return { text: '🍰 <b>Postres:</b>\n• Brownie $3.25\n• Cheesecake $3.25\n• Flan de Queso $3.25\n• Tres Leches $3.25\n• Postre del Día $3.25\n• Affogato $3.25\n• Galletas Chunky $1.75\n• Waffles con Fruta $3.95\n\n*Postres completos con 48hrs de anticipación ☕', addWA: false };
        }

        // Platillos / comida
        if (/platillo|comida|comer|hamburgues|burguer|burger|toast|panini|tostada|ensalada|wrapp|wrap|papas/.test(m)) {
            return { text: '🍔 <b>Platillos:</b>\n• Tostadas $3.25 (Tom & Cherry, La Verde, Cocomelo, Banaberries)\n• Panini + Papas $5.95 (Pesto, Margarita, Porco Verde, Tres Quesos) — incluye bebida\n• Ensalada de la Casa — incluye bebida\n• Wrapp de Pechuga + Papas — incluye bebida\n• Burger + Papas $7.50 (Champiñones o Tocino) — incluye bebida\n• Porción Papas con Queso $3.50\n• Combo Toast $6.00', addWA: false };
        }

        // Precios
        if (/precio|cuanto cuesta|cuanto vale|cuanto es|costo|vale/.test(m)) {
            return { text: 'Nuestros precios van desde $1.25 (Café Negro) hasta $7.50 (Burguer). ¿Quieres que te diga el precio de algún producto en especial? ☕', addWA: false };
        }

        // Horarios
        if (/horario|hora|abren|cierran|cuando abren|cuando cierran|abierto|cerrado|atienden/.test(m)) {
            return { text: '🕐 <b>Nuestros horarios:</b>\n• Lun, Mié–Dom: 11:00 AM – 8:30 PM\n• <b>Martes: CERRADO</b> 😴\n\n¡Te esperamos! ☕', addWA: false };
        }

        // Ubicación
        if (/donde estan|ubicacion|direccion|donde queda|como llego|mapa|donde/.test(m)) {
            return { text: '📍 Estamos en <b>Ahuachapán, El Salvador</b>. Puedes ver nuestra ubicación exacta en la sección "Ubicación" del sitio web. ¡Te esperamos con un café! ☕', addWA: false };
        }

        // Redes sociales
        if (/instagram|facebook|tiktok|redes|sigueme|seguir|social/.test(m)) {
            return { text: '📱 <b>Síguenos:</b>\n• Instagram: @moma_sv_\n• Facebook: Moma CoffeeShop\n• TikTok: @moma_sv_\n\n¡Nos vemos por allá! ✨', addWA: false };
        }

        // Pedido / ordenar
        if (/pedido|ordenar|orden|quiero pedir|como pido|comprar|delivery|domicilio|llevar|recoger/.test(m)) {
            return { text: '🛒 Puedes hacer tu pedido directo aquí en el sitio usando el carrito 🛍️, o escribirnos por WhatsApp y te atendemos al instante.', addWA: true };
        }

        // WhatsApp / contacto
        if (/whatsapp|contacto|telefono|numero|llamar|escribir/.test(m)) {
            return { text: '📞 Puedes contactarnos por WhatsApp al <b>+503 7433 8506</b>. ¡Te respondemos rápido! ☕', addWA: true };
        }

        // Promociones
        if (/promo|promocion|descuento|oferta|especial/.test(m)) {
            return { text: '🎉 ¡Tenemos promociones especiales! Revisa la sección <b>"Promociones"</b> en el menú del sitio para ver las ofertas del día. ☕', addWA: false };
        }

        // Gracias
        if (/gracias|thank|perfecto|excelente|genial|listo|ok|dale/.test(m)) {
            return { text: '¡Con mucho gusto! ☕ Si necesitas algo más, aquí estoy. ¡Que disfrutes tu café! 😊', addWA: false };
        }

        // Despedida
        if (/adios|bye|hasta luego|nos vemos|chao|chau/.test(m)) {
            return { text: '¡Hasta pronto! ☕ Fue un placer atenderte. ¡Te esperamos en Moma! 😊', addWA: false };
        }

        // Default
        return { text: 'Hmm, no estoy segura de entenderte bien. 😊 Puedo ayudarte con:\n• 📋 Menú y precios\n• 🕐 Horarios\n• 📍 Ubicación\n• 🛒 Cómo hacer un pedido\n• 📱 Redes sociales\n\n¿Sobre qué te gustaría saber?', addWA: false };
    }

    function appendMessage(role, text, addWhatsApp = false) {
        const container = document.getElementById('momaChatMessages');
        const wrap = document.createElement('div');
        wrap.className = `chat-msg ${role}`;

        const bubble = document.createElement('div');
        bubble.className = 'msg-bubble';
        bubble.innerHTML = text.replace(/\n/g, '<br>');
        wrap.appendChild(bubble);

        if (addWhatsApp && role === 'bot') {
            const waLink = document.createElement('a');
            waLink.href = 'https://api.whatsapp.com/send?phone=50374338506&text=Hola%20Moma%2C%20quisiera%20hacer%20un%20pedido%20%E2%98%95';
            waLink.target = '_blank';
            waLink.className = 'chat-wa-link';
            waLink.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> Escribir al WhatsApp`;
            wrap.appendChild(waLink);
        }

        container.appendChild(wrap);
        scrollToBottom();
    }

    function showTyping(show) {
        document.getElementById('momaChatTyping').style.display = show ? 'flex' : 'none';
    }

    function scrollToBottom() {
        const c = document.getElementById('momaChatMessages');
        if (c) c.scrollTop = c.scrollHeight;
    }

    // Cerrar chat al hacer clic fuera
    document.addEventListener('click', function (e) {
        if (!chatOpen) return;
        const win = document.getElementById('momaChatWindow');
        const fab = document.getElementById('momaChatFab');
        if (!win.contains(e.target) && !fab.contains(e.target)) {
            chatOpen = false;
            win.classList.remove('open');
        }
    });

})();
