let products = {
    data: [
        {
            name: "LIVE FROM REAL WORLD STUDIOS 7” VINYL",
            price: "VINYL SOLD OUT",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/410428-1.png"
        },

        {
            name: "AT THEIR VERY BEST LIVE FROM MSG DOUBLE VINYL",
            price: "VINYL SOLD OUT",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/422621.png"
        },

        {
            name: "BEING FUNNY IN A FOREIGN LANGUAGE",
            price: "VINYL USD 25.00",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/f/l/83be9e4e-8b06-409c-994e-d6cdc9af62a9.png"
        },

        {
            name: "BEING FUNNY IN A FOREIGN LANGUAGE",
            price: "VINYL USD 25.00",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/f/l/0ef93694-88e8-4787-8589-914f8d9de766.png"
        },

        {
            name: "BEING FUNNY IN A FOREIGN LANGUAGE BOX CASSETTE",
            price: "CASSETTE USD 17.00",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/423786.png"
        },

        {
            name: "BEING FUNNY IN A FOREIGN LANGUAGE",
            price: "VINYL USD 25.00",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/f/l/96c39734-81ec-4008-8d8e-07d39672b641.png"
        },

        {
            name: "BFIAFL T-SHIRT",
            price: "USD 40.00",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/54934e16-ae9d-40fc-ab88-93c1c2d0cfda.png"
        },

        {
            name: "102 CASSETTE",
            price: "CASSETTE SOLD OUT",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/422758-3.png"
        },

        {
            name: "PARIS AND BE MY MISTAKE (ACOUSTIC) CASSETTE",
            price: "CASSETTE SOLD OUT",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/422757-2.png"
        },

        {
            name: "A BRIEF INQUIRY INTO ONLINE RELATIONSHIPS SIGNED CD",
            price: "CD SOLD OUT",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/422759-1.png"
        },

        {
            name: "NOTES ON A CONDITIONAL FORM DOUBLE GATEFOLD CLEAR VINYL",
            price: "VINYL SOLD OUT",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/306639-1.png"
        },

        {
            name: "NOTES ON A CONDITIONAL FORM DOUBLE GATEFOLD WHITE VINYL",
            price: "VINYL SOLD OUT",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/306691.png"
        },

        {
            name: "A BRIEF INQUIRY INTO ONLINE RELATIONSHIPS DOUBLE GATEFOLD VINYL",
            price: "VINYL SOLD OUT",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/306194.png"
        },
    ]
}

for (let items of products.data) {

    let card = document.createElement("div")
    card.classList.add("card")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", items.image)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = items.name.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerHTML = "<b>Price:</b> " + items.price;
    container.appendChild(price);

    let btn = document.createElement("button")
    btn.setAttribute("onclick", "addToCart()")
    btn.innerHTML = "Thêm vào giỏ hàng"
    container.appendChild(btn)
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

for (let i of products.data){
    let product = JSON.parse(localStorage.product)
    product.push({
        name: items.name,
        price: items.price , 
        images: items.image
    })

    localStorage.setItem("product", JSON.stringify(product))
}


const addToCart = () => {
    
}