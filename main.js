function addItem() {
    //let name = document.getElementsByTagName("template")[0];
    let price_and_stock = document.getElementsByTagName("template")[0];
    //let description = document.getElementsByTagName("template")[2];
    for(let i = 0; i < 100; i++) {
        let clon = price_and_stock.content.cloneNode(true);
        let itemprice_itemstock = clon.querySelector("p");
        itemprice_itemstock.textContent = "Price: " + i + " | Stock: " + i; 
        
        document.body.appendChild(clon);
    }
}
window.onload = addItem;