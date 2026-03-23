const productsData = [
    {
        id: "1",
        name: "Exterior Paint Set",
        category: "Paint & Coatings",
        price: 45.99,
        img: "img/product_1.jfif",
        description: "Professional-grade exterior paint set designed to withstand harsh weather conditions. This premium paint offers excellent coverage, durability, and color retention. Perfect for residential and commercial exterior surfaces."
    },
    {
        id: "2",
        name: "Plywood Sheets",
        category: "Wood & Lumber",
        price: 52.99,
        img: "img/product_2.jfif",
        description: "Versatile construction-grade plywood sheets suitable for a wide range of applications. These sheets are engineered for strength and dimensional stability, perfect for subfloors, roofing, walls, and general construction."
    }
];


function loadProduct() {
    const id = new URLSearchParams(window.location.search).get("id");
    const product = productsData.find(p => p.id === id);
    if (!product) return;
    document.getElementById("productImg").src = product.img;
    document.getElementById("productImg1").src = product.img;
    document.getElementById("productImg2").src = product.img;
    document.getElementById("productImg3").src = product.img;
    document.getElementById("productName").textContent = product.name;
    document.getElementById("productName1").textContent = product.name;
    document.getElementById("productPrice").textContent = "$" + product.price;
    document.getElementById("productDescription").textContent = product.description;
    document.getElementById("productCategory").textContent = product.category;
    
    
}

loadProduct();