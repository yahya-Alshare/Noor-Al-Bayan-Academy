
const toggle = document.querySelector(".toggle")
var state = false;
function toggle_password(){
 if(state){
document.getElementById("password").setAttribute("type","password");
         toggle.classList.replace("fa-lock-open","fa-lock")
     state = false;
 }else{
     
     document.getElementById("password").setAttribute("type","text");
     toggle.classList.replace("fa-lock","fa-lock-open")
     state = true;
 }
}

// const slider = document.querySelector('.slider');

// const dragging =(e) =>{
//  slider.scrollLeft = e.pageX;
// }

// slider.addEventListener('mousemove',dragging);





 const navbar = document.querySelectorAll('.ar-btn ul li');

 navbar.forEach(items => {
    items.addEventListener('click', function(){
        navbar.forEach(nav => nav.classList.remove('ar-btn-active'))
         this.classList.add('ar-btn-active');     })
 })


 
 
//  const navbarnav = document.querySelectorAll('.Find-teacher-nav ul li');

//  navbarnav.forEach(items => {
//     items.addEventListener('click', function(){
//       navbarnav.forEach(nav => nav)
//      const x = document.querySelector('.nav-vav')
//      if(x !== null){
//       x.classList.remove("nav-vav")
//      }
//       this.children[1].classList.toggle('nav-vav');  
//          })
//  })
//  navbarnav.forEach(items => {
//    items.addEventListener('dblclick', function(){
//      navbarnav.forEach(nav => nav)
//      this.children[1].classList.remove('nav-vav');  
//         })
// })

 const navbar3 = document.querySelectorAll('.pay-way ul li');

 navbar3.forEach(items => {
    items.addEventListener('click', function(){
        navbar3.forEach(nav => nav.classList.remove('pay-active'))
         this.classList.add('pay-active');     })
 })

 function antherWay(){
   document.querySelector('.bank-active').classList.remove("bank-active")
   document.querySelector('.anther-way').classList.add("bank-active")
   }

function bankAlnma(){
document.querySelector('.bank-active').classList.remove("bank-active")
document.querySelector('.bank-in').classList.add("bank-active")
}
 const navbar4 = document.querySelectorAll('.nav-level  li');

 navbar4.forEach(items => {
    items.addEventListener('click', function(){
        navbar4.forEach(nav => nav.classList.remove('active-dash-ar'))
         this.classList.add('active-dash-ar');     })
 })

 const navbar5 = document.querySelectorAll('.nav-intefac li');

 navbar5.forEach(items => {
    items.addEventListener('click', function(){
        navbar5.forEach(nav => nav.classList.remove('active-dash-ar2'))
         this.classList.add('active-dash-ar2');     })
 })
//  const navbar2 = document.querySelectorAll('.ft-nav ul li');

//  navbar2.forEach(items => {
//     items.addEventListener('click', function(){
//         navbar2.forEach(nav => nav.classList.remove('ft-about-active'))
//          this.classList.add('ft-about-active');     })
//  })
 

 function show_description(){
    document.querySelector('.ar-text-active').classList.remove('ar-text-active');
    document.querySelector('.ar-description').classList.add('ar-text-active');
    
 }
 function show_what_learn(){
    document.querySelector('.ar-text-active').classList.remove('ar-text-active');
    document.querySelector('.what-learn').classList.add('ar-text-active');
   
 }
 function show_course_instructor(){
    document.querySelector('.ar-text-active').classList.remove('ar-text-active');
    document.querySelector('.course-instructor').classList.add('ar-text-active');
    
 }



 function s_about(e){
    const x = e.parentElement.parentElement.parentElement.querySelector('.ft-tabel');
    const y = e.parentElement.parentElement.parentElement.querySelector('.ft-about');
    const s = e.parentElement.parentElement.parentElement.querySelector('.ft-vido');
    const z = e.parentElement.parentElement.querySelector('.ft-about-active');
    s.classList.remove('ft-bcn-active')
    y.classList.add('ft-bcn-active')
    x.classList.remove('ft-bcn-active')

    z.classList.remove('ft-about-active');
    e.classList.add('ft-about-active');

 }


 function s_tabel(e){
    const x = e.parentElement.parentElement.parentElement.querySelector('.ft-tabel');
    const y = e.parentElement.parentElement.parentElement.querySelector('.ft-about');
    const s = e.parentElement.parentElement.parentElement.querySelector('.ft-vido');
    const z = e.parentElement.parentElement.querySelector('.ft-about-active');
    s.classList.remove('ft-bcn-active')
    y.classList.remove('ft-bcn-active')
    x.classList.add('ft-bcn-active')
    
    z.classList.remove('ft-about-active');
    e.classList.add('ft-about-active');

    
 }
 
 function s_vido(e){
   const x = e.parentElement.parentElement.parentElement.querySelector('.ft-tabel');
   const y = e.parentElement.parentElement.parentElement.querySelector('.ft-about');
   const s = e.parentElement.parentElement.parentElement.querySelector('.ft-vido');
   const z = e.parentElement.parentElement.querySelector('.ft-about-active');
   s.classList.add('ft-bcn-active')
   y.classList.remove('ft-bcn-active')
   x.classList.remove('ft-bcn-active')
   
   z.classList.remove('ft-about-active');
   e.classList.add('ft-about-active');


 }

 function laren_unite(e){

   e.classList.toggle('active-icon')
   e.parentElement.parentElement.parentElement.classList.toggle('active-unite')
    e.parentElement.parentElement.parentElement.querySelector('ul').classList.toggle('active-ul')
    
 }
 

 function show_about(){
   document.querySelector('.mor-active').classList.remove('mor-active');
   document.querySelector('.about-me').classList.add('mor-active');
   
}
function show_courses(){
   document.querySelector('.mor-active').classList.remove('mor-active');
   document.querySelector('.educational-course').classList.add('mor-active');
   
}
function show_student(){
   document.querySelector('.mor-active').classList.remove('mor-active');
   document.querySelector('.opinions').classList.add('mor-active');
   
}

var state = true;

function show_qu(e){

   if(state){
e.classList.add('icon-active')
      e.classList.replace('fa-plus','fa-minus')
      e.parentElement.nextElementSibling.classList.add('span-active')
           state = false;
       }else{

         e.classList.remove('icon-active')
      e.classList.replace('fa-minus','fa-plus')
      e.parentElement.nextElementSibling.classList.remove('span-active')
           state = true;
       }


}
function open_menu(){
   document.querySelector('.mobil-menue').classList.add('mobile-active')
}

function close_menu(){
   document.querySelector('.mobil-menue').classList.remove('mobile-active')
}
function sidebare(e){

   document.querySelector('.sidebar').classList.toggle('sidebar-active')
   e.classList.toggle("sidebare-icon-active")
}
// *********************************


// var img = ["img/kate-oseen-CsJO144Nkkk-unsplash.png", "img/simon-lohmann-0KAEhUHvcmQ-unsplash.png","img/bac.jpg","img/simon-lohmann-0KAEhUHvcmQ-unsplash.png"];

//  var titel = ["مرحبا بكم في أكادمية البيان","مرحبا بكم في أكاديمية نور البيان2" ,"مرحبا بكم في أكاديمية نور البيان3","مرحبا بكم في أكاديمية نور البيان"]
// index = 0;
//   const slider = document.querySelector('.section-slide')
//   const slider_tittl = document.querySelector('.section-slide-content h3')
// var slideShow = function (){
//    // slider.style.backgroundImage ="url(\${img[index]})";
//    slider_tittl.innerHTML = titel[index];
   
//    console.log(`${img[index]}`)
//    //  document.slideShow.src = img[index];
   
//     if (index <img.length - 1){
//         index++;
//         ScrollReveal({
//          reset:true,
//          distance:'60px',
//          duration:2500,
//          delay:400
//        });
//        ScrollReveal().reveal(slider_tittl,{delay:300,origin:'bottom'});
//     } else {
//         index = 0;
//     }

//     setTimeout("slideShow()", 3000);
// }

// slideShow()

function firslevel(){
   document.querySelector('.first-level').classList.add('show-level');
   document.querySelector('.scend-level').classList.remove('show-level');
}
function scendlevel(){
   document.querySelector('.first-level').classList.remove('show-level');
   document.querySelector('.scend-level').classList.add('show-level');
}

function interface1(){
document.querySelector('.dash-interface-show').classList.remove('dash-interface-show')
document.querySelector('.das-descrip').classList.add('dash-interface-show')

document.querySelector('.scend-level .dash-interface-show').classList.remove('dash-interface-show')
document.querySelector('.scend-level .das-descrip').classList.add('dash-interface-show')


}
function interface2(){
   document.querySelector('.dash-interface-show').classList.remove('dash-interface-show')
   document.querySelector('.das-contents').classList.add('dash-interface-show')
   document.querySelector('.scend-level .dash-interface-show').classList.remove('dash-interface-show')
   document.querySelector('.scend-level .das-contents').classList.add('dash-interface-show')
   
   
   }
   function interface3(){
      document.querySelector('.dash-interface-show').classList.remove('dash-interface-show')
      document.querySelector('.das-course-instructor').classList.add('dash-interface-show')
      document.querySelector('.scend-level .dash-interface-show').classList.remove('dash-interface-show')
      document.querySelector('.scend-level .das-course-instructor').classList.add('dash-interface-show')
      
      
      }
      function interface4(){
         document.querySelector('.dash-interface-show').classList.remove('dash-interface-show')
         document.querySelector('.das-schedules').classList.add('dash-interface-show')
         document.querySelector('.scend-level .dash-interface-show').classList.remove('dash-interface-show')
         document.querySelector('.scend-level .das-schedules').classList.add('dash-interface-show')
         
         
         }
         function interface5(){
            document.querySelector('.dash-interface-show').classList.remove('dash-interface-show')
            document.querySelector('.das-test').classList.add('dash-interface-show')
            document.querySelector('.scend-level .dash-interface-show').classList.remove('dash-interface-show')
            document.querySelector('.scend-level .das-test').classList.add('dash-interface-show')
           
            
            }



            
            function pag_interface1(){
               document.querySelector('.dash-interface-show').classList.remove('dash-interface-show')
               document.querySelector('.das-descrip').classList.add('dash-interface-show')
               
              
               
               
               }
               function pag_interface2(){
                  document.querySelector('.dash-interface-show').classList.remove('dash-interface-show')
                  document.querySelector('.das-contents').classList.add('dash-interface-show')
                  
                  
                  }

                  function bookAR(){
                     document.querySelector('.show-book').classList.remove('show-book')
                     document.querySelector('.arbic-book').classList.add('show-book')
                     
                     }
                     function bookMA(){
                        document.querySelector('.show-book').classList.remove('show-book')
                        document.querySelector('.match-book').classList.add('show-book')
                        
                        }
                        function bookEN(){
                           document.querySelector('.show-book').classList.remove('show-book')
                           document.querySelector('.en-book').classList.add('show-book')
                           
                           }

                           function drop(){
                              document.querySelector('.drop-not').classList.toggle("close")
                           }
                           function drop_profile(){
                              document.querySelector('.drop-profile').classList.toggle("close")
                           }
                           function end_quiz(){
                              document.querySelector('.puope-quiz').classList.remove("close")
                           }
                           function close_quiz(){
                              document.querySelector('.puope-quiz').classList.add("close")
                           }
                           function mas_cou(){
                              document.querySelector('.mas-cou').classList.toggle("close")
                              document.querySelector('#i-down').classList.toggle("icon-rotat")
                              
                           }
               const dateTabel = document.querySelectorAll('.ta-tr')
               
               dateTabel.forEach(items => {
                  items.addEventListener('mouseover', function(){
                      
                       this.innerHTML = `
                       
                       <div class="dash-box-info">
                                  <table>
                                    <tbody>
                                        <tr>
                                            <td>المسار</td>
                                            <td>لغة عربية</td>
                                        </tr>
                                        
                                        
                                        <tr>
                                            <td>  المساق</td>
                                            <td>المستوى الأول</td>
                                        </tr>

                                        <tr>
                                            <td>  التاريخ</td>
                                            <td>01-04-2023</td>
                                        </tr>

                                        <tr>
                                            <td>  الوقت</td>
                                            <td>04:00-05:00 PM</td>
                                        </tr>
                                    </tbody>
                                  </table>
                            </div>
                            `   })
               })

               // document.querySelector('#i-down').addEventListener("mouseover", function disabel(){
               //    console.log(dateTabel)
               // })

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
   const header = document.querySelector('header')
   // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
   this.scrollY >= 50 ? header.classList.add('header-active') 
                      : header.classList.remove('header-active')
}
window.addEventListener('scroll', scrollHeader)

