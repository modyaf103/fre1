// بيانات المنتجات
const products = [

    // فريسكا
      
          {
        id: 15,
        name: "فريسكا كلاسيك",
        des: " ",
        image: "image/heee.jpg",
        weights: ["ساده","عسل ابيض","عسل اسود"],
        prices: [10,15,15],
        category: "الفريسكا"
    },
          {
        id: 16,
        name: "فريسكا",
        des: " ",
        image: "image/feres.jpg",
        weights: ["كراميل","نوتيلا","وايت","لوتس","كيندر","فريرو روشيه","رفايلو","بيستاشيو"],
        prices: [25,25,30,30,35,40,40,50],
        category: "الفريسكا"
    },
          {
        id: 17,
        name: "فريسكا حلو (Normal)",
        des: " ",
        image: "image/hal.jpg",
        weights: ["تورتا","مارشميللو","كاو بوي","نيو كراميلو","بيمبو","ترافل","رولانا","تيبو","لارش","كتاكيتو"],
        prices: [20,20,20,20,20,25,25,25,30,30],
        category: "الفريسكا"
    },
          {
        id: 18,
        name: "فريسكا حلو (Extra)",
        des: " ",
        image: "image/hal.jpg",
        weights: ["تورتا","مارشميللو","كاو بوي","نيو كراميلو","بيمبو","ترافل","رولانا","تيبو","لارش","كتاكيتو"],
        prices: [50,50,50,50,50,60,60,60,60,60  ],
        category: "الفريسكا"
    },
          {
        id: 19,
        name: "فريسكا ميكس (Normal)",
        des: " ",
        image: "image/mee.jpg",
        weights: ["موف اون (مارشميللو صوص فاكهة) ","شوجر مامي (مارشميللو صوص فاكهة تورتا)","دوبامين (موز + كراميل + نوتيلا) ","فانتازيا (وايت شوكلت + صوص فاكهة)","المشقوطة (رولانا - نيو كراميلو - كيندر )","المؤدبة (تورتا + رولانا + صوص فاكهة)","باربي (مارشميللو + رولانا + صوص فاكهة)","شوجر دادي (تورتا + بيمبو + نوتيلا)","دبي (كنافة بستاشيو)"],
        prices: [25,35,35,35,35,40,40,40,50],
        category: "الفريسكا"
    },
          {
        id: 20,
        name: "فريسكا ميكس (Extra)",
        des: " ",
        image: "image/mee.jpg",
        weights: ["موف اون (مارشميللو صوص فاكهة) ","شوجر مامي (مارشميللو صوص فاكهة تورتا)","دوبامين (موز + كراميل + نوتيلا) ","فانتازيا (وايت شوكلت + صوص فاكهة)","المشقوطة (رولانا - نيو كراميلو - كيندر ))","بامبينو (بيمبو + صوص الفاكهة)","(فيتنس (بيمبو + مارشميلو + صوص فاكهة","(كافيين (الكريمة قهوة ","مالديف (موز + وايت شوكلت + صوص فاكهة)","المؤدبة (تورتا + رولانا + صوص فاكهة)","باربي (مارشميللو + رولانا + صوص فاكهة)","شوجر دادي (تورتا + بيمبو + نوتيلا)","دبي (كنافة بستاشيو)","5G (كيندر + موز)","13 (ميكس تورتا كيندر كارميل)"],
        prices: [30,40,40,40,50,35,40,40,40,50 ,50 ,60 ,60,60,60 ],
        category: "الفريسكا"
    },




    // وافل


    {
        id: 4,
        name: "وافل حلو (Round)",
        des: "",
        image: "image/wa.jpg",
        weights: ["نوتيلا","كراميل","وايت شوكلت","لوتس", "نوتيلا مارشميللوو ", "بينا كولادا","كيندر","نايت موود","الشديدة","فور سيزون","بيستاشيو","الملظلظ","دبي",],
        prices: [80,80,90,90, 100, 100, 120, 100, 150, 130, 150, 150, 170],
        category: "الوافل"
    },



    {
        id: 5,
        name: "وافل حلو (Half)",
        des: "",
        image: "image/wa2.jpg",
        weights: ["نوتيلا","كراميل","وايت شوكلت","لوتس", "نوتيلا مارشميللوو ", "بينا كولادا","كيندر","نايت موود","الشديدة","فور سيزون","بيستاشيو","الملظلظ","دبي",],
        prices: [50,50,60,60, 60, 60, 70, 70, 80, 90, 100, 80, 100],
        category: "الوافل"
    },
    {
        id: 6,
        name: "وافل حادق",
        des: "شيدر + لانشون + بيج تيستي",
        image: "image/wa3.jpg",
        weights: ["Round","Half"],
        prices: [100,65],
        category: "الوافل"
    },



    {
        id: 7,
        name: "وافل حادق",
        des: "تركي + لانشون + بسطرمة + شيدر ",
        image: "image/wa4.jpg",
        weights: ["Round","Half"],
        prices: [150,90],
        category: "الوافل"
    },


    // بان كيك

    {
        id: 8,
        name: "بان كيك نوتيلا ",
        des: " ",
        image: "image/ba1.jpg",
        weights: ["6 قطع"," 15 قطع"," 20 قطع"," 25 قطع"],
        prices: [35,70,80,90],
        category: "بان كيك"
    },
    {
        id: 9,
        name: "بان كيك لوتس ",
        des: " ",
        image: "image/ba2.jpg",
        weights: ["6 قطع"," 15 قطع"," 20 قطع"," 25 قطع"],
        prices: [35,70,80,90],
        category: "بان كيك"
    },
    {
        id: 10,
        name: "بان كيك وايت ",
        des: " ",
        image: "image/ba4.jpg",
        weights: ["6 قطع"," 15 قطع"," 20 قطع"," 25 قطع"],
        prices: [35,70,80,90],
        category: "بان كيك"
    },
    {
        id: 11,
        name: "بان كيك فراولة ",
        des: " ",
        image: "image/ba6.jpg",
        weights: ["6 قطع"," 15 قطع"," 20 قطع"," 25 قطع"],
        prices: [35,70,80,90],
        category: "بان كيك"
    },
    {
        id: 12,
        name: "بان كيك توت ",
        des: " ",
        image: "image/ba7.jpg",
        weights: ["6 قطع"," 15 قطع"," 20 قطع"," 25 قطع"],
        prices: [35,70,80,90],
        category: "بان كيك"
    },
    {
        id: 13,
        name: "بان كيك كيندر ",
        des: " ",
        image: "image/ba9.jpg",
        weights: ["6 قطع"," 15 قطع"," 20 قطع"," 25 قطع"],
        prices: [50,100,110,120],
        category: "بان كيك"
    },
    {
        id: 14,
        name: "بان كيك بستاشيو ",
        des: " ",
        image: "image/ba8.jpg",
        weights: ["8 قطع"," 15 قطع"],
        prices: [80,130],
        category: "بان كيك"
    },











        {
        id: 1,
        name: "ice cofee",
        des: "ملهوش وصف",
        image: "image/ice.jpg",
        weights: ["نوتيلا", "كراميل", "كلاسيك"],
        prices: [75, 75, 65],
        category: "المشروبات"
    },
    {
        id: 2,
        name: "Milk Shake",
        des: " احلي حاجة ممكن تشربها",
        image: "image/milk.jpg",
        weights: ["فراولة","بلوبيري","بطيخ","مانجو","نوتيلا","لوتس", "كراميل","كيندر","باشون فروت","بستاشيو", "ريمونتادا (مانجو - فراولة)"],
        prices: [65,65,65,65, 70, 75 ,75,90,75,120,75],
        category: "المشروبات"
    },
    {
        id: 3,
        name: "Mojito",
        des: "طعم الانتعاش",
        image: "image/moji.jpg",
        weights: ["ليمون نعناع ","بلوبيري","فراولة","بطيخ", "باشون فروت", "فلوريدا (بطيخ - نعناع - ليمون)"],
        prices: [30,40,40,40, 45, 45],
        category: "المشروبات"
    },



];





let cart = [];

// عرض المنتجات (المعدلة لتشمل الوصف)
function displayFilteredProducts(filteredProducts) {
    const productsDiv = document.getElementById("products");
    productsDiv.innerHTML = "";

    if (filteredProducts.length === 0) {
        productsDiv.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>لا توجد نتائج مطابقة للبحث</p>
            </div>
        `;
        return;
    }

    filteredProducts.forEach(product => {
        let weightsHTML = product.weights.map((weight, index) => 
            // `<option value="${index}">${weight} - ${product.prices[index]} </option>`
            `<option value="${index}">${weight} - ${product.prices[index]} جنيه</option>`
        ).join('');

        productsDiv.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" class="product-img" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    ${product.des ? `<p class="product-des">${product.des}</p>` : ""}
                    <select id="weight-${product.id}">
                        ${weightsHTML}
                    </select>
                    <button onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> أضف للسلة
                    </button>
                </div>
            </div>
        `;
    });
}

// دالة عرض المنتجات الرئيسية
function displayProducts(productsToShow = products) {
    displayFilteredProducts(productsToShow);
}

// تصفية المنتجات حسب القسم
function filterProducts(category) {
    if (!category || category === "الكل") {
        displayCategoriesGrid();
        return;
    }

    if (category === "كل المنتجات") {
        displayProducts(products);
        return;
    }

    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);

    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
}

// عرض الأقسام
function getCategoryImage(category) {
    const catProduct = products.find(p => p.category === category);
    return catProduct ? catProduct.image : 'default-image.jpg';
}

function displayCategoriesGrid() {
    const productsDiv = document.getElementById("products");
    const uniqueCategories = [...new Set(products.map(p => p.category))];

    productsDiv.innerHTML = `
        <div class="modern-categories">
            ${uniqueCategories.map(category => `
                <div class="category-box" onclick="filterProducts('${category}')">
                    <div class="category-overlay"></div>
                    <img src="${getCategoryImage(category)}" alt="${category}">
                    <h3>${category}</h3>
                    <div class="category-products-count">
                        ${products.filter(p => p.category === category).length} منتجات
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// البحث الفوري
function liveSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    displayFilteredProducts(filteredProducts);
}

// مسح البحث
function clearSearch() {
    document.getElementById('searchInput').value = '';
    displayProducts(products);
}

// إضافة للسلة
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const weightSelect = document.getElementById(`weight-${productId}`);
    const selectedIndex = weightSelect.value;

    cart.push({
        id: product.id,
        name: product.name,
        weight: product.weights[selectedIndex],
        price: product.prices[selectedIndex]
    });

    updateCart();

    const button = weightSelect.nextElementSibling;
    button.innerHTML = '<i class="fas fa-check"></i> تمت الإضافة';
    button.style.backgroundColor = '#4CAF50';

    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-cart-plus"></i> أضف للسلة';
        button.style.backgroundColor = '';
    }, 1500);
}

// تحديث السلة
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <li>
                <span>${item.name} (${item.weight})</span>
                <span>
                    ${item.price} جنيه 
                    <button onclick="removeItem(${index})" class="remove-btn">
                        <i class="fas fa-trash"></i>
                    </button>
                </span>
            </li>
        `;
        total += item.price;
    });

    cartTotal.textContent = total;
    cartCount.textContent = cart.length;
}

// حذف عنصر من السلة
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// فتح/إغلاق السلة
function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
    document.getElementById('cart-overlay').classList.toggle('active');
}

// إرسال الطلب
function sendOrder() {
    if (cart.length === 0) {
        alert("السلة فارغة! أضف منتجات أولاً");
        return;
    }

    document.getElementById('customer-modal').classList.add('active');
}

function closeModal() {
    document.getElementById('customer-modal').classList.remove('active');
}

// إرسال الطلب إلى واتساب
function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const notes = document.getElementById('notes').value;

    if (!/^01[0-9]{9}$/.test(phone)) {
        alert("رقم الهاتف يجب أن يكون 11 رقماً ويبدأ بـ 01");
        return;
    }

    let orderText = "🎉 طلبية جديدة من متجر المكسرات 🎉\n\n";
    orderText += `👤 العميل: ${name}\n`;
    orderText += `📱 الهاتف: ${phone}\n`;
    orderText += `📍 العنوان: ${address}\n\n`;
    orderText += "🛒 المنتجات:\n";

    cart.forEach(item => {
        orderText += `- ${item.name} (${item.weight}): ${item.price} جنيه\n`;
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    orderText += `\n💰 الإجمالي: ${total} جنيه\n`;

    if (notes) {
        orderText += `\n📝 الملاحظات: ${notes}\n`;
    }

    orderText += "\nشكراً لثقتكم بنا ❤️";

    const phoneNumber = "201108585906";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(orderText)}`;

    window.open(whatsappUrl, "_blank");

    closeModal();
    cart = [];
    updateCart();
    alert("تم إرسال طلبك بنجاح! سنتصل بك قريباً لتأكيد التفاصيل.");
}

// تشغيل الموقع
window.onload = function () {
    displayCategoriesGrid();

    document.getElementById('cart-overlay').addEventListener('click', toggleCart);
};

// القائمة الجانبية للموبايل
const menuBtn = document.getElementById('menuBtn');
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

function toggleMenu() {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
}

menuBtn.addEventListener('click', toggleMenu);

document.addEventListener('click', function (event) {
    if (window.innerWidth <= 992 &&
        !event.target.closest('.nav-container') &&
        !event.target.closest('.menu-btn') &&
        navLinks.classList.contains('active')) {
        toggleMenu();
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
            toggleMenu();
        }
    });
});
