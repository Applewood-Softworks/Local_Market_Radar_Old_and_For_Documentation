function addItem() {
    let temp = document.getElementsByTagName("template")[0];
    for(let i = 0; i < 100; i++) {
        let itemprice_itemstock = clon.querySelector("p");
        itemprice_itemstock.textContent = "Price: " + i + " | Stock: " + i; 
        let clon = temp.content.cloneNode(true);
        document.body.appendChild(clon);
    }
}
window.onload = addItem;