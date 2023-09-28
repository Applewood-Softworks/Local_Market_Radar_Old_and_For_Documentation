function addItem() {
    
    let temp = document.getElementsByTagName("template")[0];
    for(let i = 0; i < 100; i++) {
        let itemprice_itemstock = document.createTextNode("Price: "+i+" | Stock: "+i)
        temp.append("")
        let clon = temp.content.cloneNode(true);
        document.body.appendChild(clon);
    }
}
window.onload = addItem;