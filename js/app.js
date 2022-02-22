var products = [
    {
        id:0,
        name:"Apples",
        price:"2.99",
        image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
        color:"red"
    },
    {
        id:1,
        name:"Bananas",
        price:"2.50",
        image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
        color:"gold"
    },
    {
        id:2,
        name:"oranges",
        price:"3.50",
        image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
        color:"orange"
    }
];





function eleMaker(val) {
    let popEle = document.createElement("div");
    let wrapperEle = document.createElement("div");
    let nameEle = document.createElement("div");
    let priceEle = document.createElement("div");
    let eleImg = document.createElement("img");
    let colorEle = document.createElement("div");
    let end = true;

    popEle.setAttribute("class", "popUp");
    wrapperEle.setAttribute("class", "product");


    document.body.appendChild(popEle);
    document.body.appendChild(wrapperEle);
    wrapperEle.appendChild(eleImg);
    wrapperEle.appendChild(nameEle);
    wrapperEle.appendChild(priceEle);
    wrapperEle.appendChild(colorEle);

    nameEle.innerHTML="Name: " +val.name;
    priceEle.innerHTML="Price: " +val.price;
    eleImg.setAttribute('src', val.image);
    popEle.style.display = "none";
    wrapperEle.setAttribute("bordercolor", val.color)



    wrapperEle.addEventListener("click", function () {
        popEle.style.display = "block"

        let namePop = document.createElement("p");
        let pricePop = document.createElement("p");
        let imgPop = document.createElement("img");

        popEle.appendChild(imgPop);
        popEle.appendChild(namePop);
        popEle.appendChild(pricePop);

        imgPop.setAttribute('src', val.image);
        namePop.innerHTML="Name: "+val.name;
        pricePop.innerHTML="Price: "+val.price;

    })



    popEle.addEventListener("click", function () {
            if (popEle.style.display === "none") {
                popEle.style.display = "block"
            } else {
                popEle.style.display = "none";
            }
        })

}


function writeItems() {
    for (let i = 0; i < products.length; i++) {
        eleMaker(products[i]);
    }
}
writeItems();


// function game(){
//     let that=this;
//     this.player=[new box(1), new box(2)];
//     this.message=document.createElement("div");
//     this.end=true;
//     document.body.appendChild(this.message);
//
//     for (let i=0; i<this.player.length; i++){
//        this.player[i].button.addEventListener("click",function (){
//            that.checkWin();
//        })
//     }
//
//     this.resetButton=document.createElement("button");
//     this.resetButton.innerHTML="Reset";
//     this.resetButton.addEventListener("click", function (){
//         document.body.innerHTML="";
//         let brandNew = new game();
//     })
//
//     // document.body.appendChild(this.resetButton);
// }
//
// game.prototype.checkWin=function (){
//     if (this.end){
//         if (this.player[0].number===3){
//             this.message.innerHTML="Player 1 Wins!";
//             document.body.appendChild(this.resetButton);
//             this.end=false;
//         }else if (this.player[1].number===3){
//             this.message.innerHTML="Player 2 Wins!"
//             document.body.appendChild(this.resetButton);
//             this.end=false;
//         }
//     }
//
// }
//
// function box(nme) {
//     let that = this;
//     this.number = 0;
//     this.ele = document.createElement("div");
//     this.eleName=document.createElement("h1");
//     this.eleName.innerHTML=nme;
//
//     this.button=document.createElement("button");
//     this.button.innerHTML="Click";
//     this.button.addEventListener("click", function(){
//         that.numberUp();
//     })
//
//     this.eleNum=document.createElement("div");
//     this.eleNum.innerHTML=this.number;
//
//     document.body.appendChild(this.ele);
//     this.ele.appendChild(this.eleName);
//     this.ele.appendChild(this.button);
//     this.ele.appendChild(this.eleNum);
//
// }
//
// box.prototype.numberUp = function(){
//     this.number=this.number+1;
//     this.eleNum.innerHTML=this.number;
// }
//
// let newGame = new game();

//
