function showContent() {
    for(let i = 0; i < 100; i++) {
        let temp = document.getElementsByTagName("template")[0];
        let clon = temp.content.cloneNode(true);
        document.body.appendChild(clon);
    }
    
  }