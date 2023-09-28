function addItem() {
    
    let temp = document.getElementsByTagName("template")[0];
    for(let i = 0; i < 100; i++) {
        let clon = temp.content.cloneNode(true);
        document.body.appendChild(clon);
    }
}
window.onload = addItem;