/* ////////////////////////////////////////// Pre - loaders */

// window.STORAGE = {}
// STORAGE.mask  = document.querySelector('#mask');
// STORAGE.stop = false;
// STORAGE.maskTelefon = document.querySelector('.maskTelefon');
// STORAGE.maskContPulse = document.querySelector('.maskContPulse');
// function AnimationPulse() {
//     if (STORAGE.stop) {
//         setTimeout(() => {
//             STORAGE.maskTelefon.style.transform = "scale(1)"
//             STORAGE.maskContPulse.style.transform = "scale(1)"
//         },100);
    


//         STORAGE.maskPulse = STORAGE.maskContPulse.querySelector('.maskPulse');
//         STORAGE.maskPulse.classList.remove('active');
//         console.log(STORAGE.maskPulse," "+1);
//         STORAGE.maskPulseCopy =STORAGE.maskPulse;
//         console.log(STORAGE.maskPulseCopy," "+2 );
//         setTimeout(() => {
//             STORAGE.maskPulse.classList.add('active');
//         },10);

//         setTimeout(() => {
//             STORAGE.maskPulse.remove();
//             STORAGE.maskPulseCopy.classList.remove('active');
//             console.log(STORAGE.maskPulseCopy," "+3  );

//             let NewContPulse = STORAGE.maskContPulse.insertAdjacentElement("afterbegin", STORAGE.maskPulseCopy);
//             setTimeout(() => {
//                 STORAGE.maskTelefon.style.transform = "scale(1.1)"
//                 STORAGE.maskContPulse.style.transform = "scale(1.1)"
//                 AnimationPulse();  
//             },30);
        
//         },2000);
//     }
// }
// AnimationPulse();


// window.addEventListener('load', () => {
//     STORAGE.stop = true;
//     STORAGE.mask.classList.add("hide");
// })
/* ////////////////////////////////////////// Pre - loaders */