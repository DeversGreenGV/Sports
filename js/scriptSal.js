let salCont = document.querySelectorAll('.sal-cont');
console.log(salCont);
salCont.forEach(function(item, index, array) {
   let salContItem = item.querySelectorAll('.item');
   let salFooterContItem = item.querySelectorAll('.items');
   console.log(salContItem);
   console.log(salFooterContItem);
   function salAttrSet(list) {
        for (let i = 0; i < list.length; i++) {
            list[i].setAttribute('data-sal', 'slide-right');
            list[i].setAttribute('data-sal-easing', 'ease-out-back');
            list[i].setAttribute('data-sal-delay', 200+(i*100));
        }
   }
   salAttrSet(salContItem);
   salAttrSet(salFooterContItem);
});
let salTitle = document.querySelectorAll('.sal-title');
console.log(salTitle);
salTitle.forEach(function(item, index, array) {
    console.log(item);
    let salTitleH2 = item.querySelector('h2');
    let salTitleP = item.querySelector('p');

    console.log(salTitleH2);
    console.log(salTitleP);

    salTitleH2.setAttribute('data-sal', 'flip-up');
    salTitleH2.setAttribute('data-sal-easing', 'ease-in-out-cubic');
    salTitleH2.setAttribute('data-sal-delay', 700);

    salTitleP.setAttribute('data-sal', 'slide-right');
    salTitleP.setAttribute('data-sal-easing', 'ease-in-out-cubic');
    salTitleP.setAttribute('data-sal-delay', 700);

});

let salQuote = document.querySelectorAll('.sal-quote .container');
console.log(salQuote);
salQuote.forEach(function(item, index, array) {
    item.setAttribute('data-sal', 'fade');
    item.setAttribute('data-sal-easing', 'ease-in-out-cubic');
    item.setAttribute('data-sal-delay', 450);
});
let salPriortitlesItem = document.querySelectorAll('.Priorities .item');
console.log(salQuote);
salPriortitlesItem.forEach(function(item, index, array) {
    item.setAttribute('data-sal', 'fade');
    item.setAttribute('data-sal-easing', 'ease-in-out-cubic');
    item.setAttribute('data-sal-delay', 200);
});

    let ExactlyControl = document.querySelector('.control');
    ExactlyControl.setAttribute('data-sal', 'slide-up');
    ExactlyControl.setAttribute('data-sal-easing', 'ease-in-out-cubic');
    ExactlyControl.setAttribute('data-sal-delay', 700);

    // let footerSocials = document.querySelector('footer .socials');
    // footerSocials.setAttribute('data-sal', 'slide-right');
    // footerSocials.setAttribute('data-sal-easing', 'ease-out-back');
    // footerSocials.setAttribute('data-sal-delay', 200);
// class="container" data-sal="slide-right"
//             data-sal-delay="1000"
//             data-sal-easing="ease-out-back"
// data-sal="flip-up"
//                 data-sal-delay="700"
//                 data-sal-easing="easeInOutCubic"
// data-sal="slide-up"
//                 data-sal-delay="500"
//                 data-sal-easing="easeInOutCubic"
const AnimateSal = sal({
    threshold: 0.8,
    // once : true,
    // rootMargin : '0% 40%',
    // rootMargin : '00% 0%',
});

window.addEventListener('load',AnimateSal)
// console.log(AnimateSal);
