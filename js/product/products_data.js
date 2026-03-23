const productsData = [
    {
        id: "1",
        name: "Exterior Paint Set",
        category: "Paint & Coatings",
        price: 45.99,
        img: "img/product_1.jfif",
        description: "Professional-grade exterior paint set designed to withstand harsh weather conditions. This premium paint offers excellent coverage, durability, and color retention. Perfect for residential and commercial exterior surfaces.",
        spec_t1: "VOLUME",
        spec_d1: "5 gallons total",
        spec_t2: "TYPE", 
        spec_d2: "100% Acrylic Latex",
        spec_t3: "COVERAGE",
        spec_d3: "400 sq ft per gallon",
        spec_t4: "FINISH",
        spec_d4: "Satin",
        spec_t5: "DRY TIME",
        spec_d5: "2-4 hours",
        spec_t6: "COLORS",
        spec_d6: "Assorted neutral tones",
    },
    {
        id: "2",
        name: "Plywood Sheets",
        category: "Wood & Lumber",
        price: 52.99,
        img: "img/product_2.jfif",
        description: "Versatile construction-grade plywood sheets suitable for a wide range of applications. These sheets are engineered for strength and dimensional stability, perfect for subfloors, roofing, walls, and general construction.",
        spec_t1: "DIMENSIONS",
        spec_d1: "4' x 8'",
        spec_t2: "THICKNESS", 
        spec_d2: "3/4 inch",
        spec_t3: "GRADE",
        spec_d3: "CDX",
        spec_t4: "PLIES",
        spec_d4: "7-ply construction",
        spec_t5: "EXPOSURE",
        spec_d5: "Exterior grade",
        spec_t6: "VENEER",
        spec_d6: "Softwood",
    },
    {
        id: "3",
        name: "Premium Cement Bags",
        category: "Cement & Concrete",
        price: 24.99,
        img: "img/product_3.jfif",
        description: "High-quality Portland cement bags designed for heavy-duty construction projects. Our premium cement offers exceptional strength, durability, and workability. Ideal for foundations, structural work, and general concrete applications. Each bag contains precisely measured and tested cement that meets international quality standards.",
        spec_t1: "Weight",
        spec_d1: "50 lbs per bag",
        spec_t2: "TYPE",
        spec_d2: "Portland Cement Type I/II",
        spec_t3: "COMPRESSIVE STRENGTH",
        spec_d3: "3500 PSI at 28 days",
        spec_t4: "SETTING TIME",
        spec_d4: "2-4 hours initial set",
        spec_t5: "COVERAGE",
        spec_d5: "Approximately 0.45 cubic feet",
        spec_t6: "STORAGE LIFE",
        spec_d6: "6 months in sealed bag"
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
    for (let i=1; i <= 6; i++) {
        document.getElementById(`spec_t${i}`).textContent = product[`spec_t${i}`];
        document.getElementById(`spec_d${i}`).textContent = product[`spec_d${i}`];
    }
    
}

loadProduct();