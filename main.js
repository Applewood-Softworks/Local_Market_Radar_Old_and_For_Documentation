function addItem() {
    
    let temp = document.getElementsByTagName("template")[0];
    for(let i = 0; i < 100; i++) {
        let tag = document.getElementsByTagName("p");
        let itemprice_itemstock = document.createTextNode("Price: "+i+" | Stock: "+i)[0];
        
        temp.append(itemprice_itemstock);
        let clon = temp.content.cloneNode(true);
        document.body.appendChild(clon);
    }
}
window.onload = addItem;