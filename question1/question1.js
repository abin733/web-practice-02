window.addEventListener("load", function () {
    // TODO 1C) Your JS code here
    
    const cards = document.querySelectorAll(".card-body");
    console.log(cards);

    for (let index = 0; index < cards.length; index++) {
        const element = cards[index];
        element.addEventListener("click",function(event){
            cards.forEach(element => {
                element.classList.remove("animated");
            });
            element.classList.toggle("animated");
        })
    }


});