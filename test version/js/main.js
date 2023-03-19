// fixing the links of the services section in the nav bar
// let theNavSystemLinks = document.querySelectorAll(".sub-links li")

// theNavSystemLinks.forEach((item) => {
//    item.addEventListener("click", (e) => {
      
//       const theSelectedSystemContainer = document.querySelector("." + item.dataset.select);

//       console.log(theSelectedSystemContainer);

//       theSystemContainer.forEach((container) => {

//          container.classList.remove("active")
//      })
//      theSelectedSystemContainer.classList.add("active")
//    })
// })

// the services section 

window.onload = function() {
   let theNavSystemLinks = document.querySelectorAll(".header .side-menu .sub-links li a");

   theNavSystemLinks.forEach((item) => {
     item.addEventListener("click" ,(e) => {
       console.log(item);
     }) 
   });
 };
let systemlinks = document.querySelectorAll(".system-titles li ");

    
 systemlinks.forEach((item) => {
      
      item.addEventListener("click", (e) => {
        
         let theSelectedSystemContainer = document.querySelector("." + item.dataset.select);

         let theSystemContainer = document.querySelectorAll(".system-detailes");

         item.classList.add("active");

         theSystemContainer.forEach((container) => {

          container.classList.remove("active");

        });

         theSelectedSystemContainer.classList.add("active")

      });
 });

//  multi lang functionality 
import translations from "./translations.js";

const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

// 


const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";          
};



   
    
