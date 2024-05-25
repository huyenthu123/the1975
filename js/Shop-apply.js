let products = {
    data: [
        {
            id: 1,   
            name: "LIVE FROM REAL WORLD STUDIOS 7” VINYL",
            price: "USD 28.00- 30.00",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/410428-1.png",
            cost : 26.00
        },

        {
            id: 2,
            name: "AT THEIR VERY BEST LIVE FROM MSG DOUBLE VINYL",
            price: "USD 30.00-33.00",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/422621.png",
            cost : 30.00,
        },

        {
            id :3,
            name: "BEING FUNNY IN A FOREIGN LANGUAGE",
            price: "USD 25.00",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/f/l/83be9e4e-8b06-409c-994e-d6cdc9af62a9.png",
            cost : 25.00,
        },

        {
            id:4,
            name: "BEING FUNNY IN A FOREIGN LANGUAGE",
            price: "VINYL USD 25.00",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/f/l/0ef93694-88e8-4787-8589-914f8d9de766.png",
            cost : 25.00,
        },

        {
            id: 5,
            name: "BEING FUNNY IN A FOREIGN LANGUAGE BOX CASSETTE",
            price: "CASSETTE USD 17.00",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/423786.png",
            cost : 17.00,
        },

        {
            id:6,
            name: "BEING FUNNY IN A FOREIGN LANGUAGE",
            price: "VINYL USD 25.00",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/f/l/96c39734-81ec-4008-8d8e-07d39672b641.png",
            cost : 22.00,
        },

        {
            id:7,
            name: "NOTES ON A CONDITIONAL FORM CD",
            price: "CD USD 13.00",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/306640-1.png",
            cost : 13.00,
        },

        {
            id:8,
            name: "102 CASSETTE",
            price: "CASSETTE SOLD OUT",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/422758-3.png",
            cost : 650000,
        },

        {
            id:9,
            name: "PARIS AND BE MY MISTAKE (ACOUSTIC) CASSETTE",
            price: "USD 25.00-29.00",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/422757-2.png",
            cost : 25.00,
        },

        {
            id:10,
            name: "A BRIEF INQUIRY INTO ONLINE RELATIONSHIPS SIGNED CD",
            price: "CD SOLD OUT",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/422759-1.png",
            cost : 450000,
        },

        {
            id:11,
            name: "NOTES ON A CONDITIONAL FORM DOUBLE GATEFOLD CLEAR VINYL",
            price: "VINYL SOLD OUT",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/306639-1.png",
            cost : 180000,
        },

        {
            id: 12,
            name: "NOTES ON A CONDITIONAL FORM DOUBLE GATEFOLD WHITE VINYL",
            price: "VINYL SOLD OUT",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/306691.png",
            cost : 120000,
        },

        {
            id:13,
            name: "A BRIEF INQUIRY INTO ONLINE RELATIONSHIPS DOUBLE GATEFOLD VINYL",
            price: "VINYL SOLD OUT",
            image: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/306194.png",
            cost : 780000,
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
    btn.setAttribute("onclick", `addToCart('${JSON.stringify(items)}')`); 
    btn.innerHTML = "ADD TO BASKET"
    container.appendChild(btn)
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

const addToCart = (item) => {
    let productItem =JSON.parse(item); 

    let productsCart = JSON.parse(localStorage.getItem("productsCart"))  || [];
    console.log(productsCart);

    const index = productsCart.findIndex((product) => product.id === productItem.id);
    console.log(index);
    if (index === -1) {
        item["quantity"] = 1;
        productsCart.push(productItem);
    } else{
        productsCart(index).quantity += 1;
    }
    console.log(productsCart);
    localStorage.setItem('productsCart', JSON.stringify(productsCart));
    // console.log('productsCart', JSON.stringify(productsCart));
}

// for (let i of products.data){
//     let product = JSON.parse(localStorage.product)
//     product.push({
//         name: items.name,
//         price: items.price , 
//         images: items.image
//     })

//     localStorage.setItem("product", JSON.stringify(product))
// }


// const addToCart = (item) => {
//     console.log(JSON.parse(item));

//     let productsCart = JSON.parse(localStorage.getItem("productsCart")) || [];

//     const productItem =productsCart.find((product) =>product.id === item.id);
//     if (!productItem) {
//         item.quantity = 1 ;
//         productsCart.push(item);
//     }else{
//         productsItem.quantity += 1;
//     }
    
// }