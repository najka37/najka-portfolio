/*=========================typing animation============================ */
var typed = new Typed(".typing",{
    strings:["","Web Designer","Mobile App Developer", "Web Developer","Graphic Designer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
var typed = new Typed(".type",{
    strings:["","Web Designer","Mobile App Developer", "Web Developer","Graphic Designer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
/*=========================Aside============================ */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++)
    {
  
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            removeBackSection();
            for(let j=0; j<totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j);
                    //allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth <1200)
            {
                asideSectionTogglerBtn()
            }
        })
    }
    function removeBackSection()
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }
    }
    function addBackSection(num)
    {
        allSection[num].classList.add("back-section");
    }
    function showSection(element)
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
        
    }
    function updateNav(element)
    {
        for(let i=0; i<totalNavList; i++)
        {
            navList[i].querySelector("a").classList.remove("active")
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active")
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function()
    {
        const sectionIndex = this.getAttribute("data-section-index");
        //console.log(sectionIndex);
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
    const navTogglerBtn = document.querySelector(".nav-toggler"),
          aside = document.querySelector(".aside");
          navTogglerBtn.addEventListener("click", () =>
          {
            asideSectionTogglerBtn();
          })
          function asideSectionTogglerBtn()
          {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
          }

        //   var btn = document.getElementById('btn');
        //   btn.addEventListener('click', function(e){
        //     e.preventDefault()
        //     const name = document.getElementById('name').value;
        //     const email = document.getElementById('email').value;
        //     const subject = document.getElementById('subject').value;
        //     const message = document.getElementById('message').value;
        //     const body = 'name: ' + name + '<br/> email: ' +email + '<br/> subject: ' +subject + '<br/> message: ' +message;
        //     Email.send({
        //         Host : "smt.gmail.com",
        //         Username : "najkacade3714@gmail.com",
        //         Password : "frqzgcoawvfajtxy",
        //         To : 'najkacade3714@gmail.com',
        //         From : email,
        //         Subject : subject,
        //         Body : body
        //     }).then(
        //       message => alert(message)
        //     );
        //   })



        //   const name = document.getElementById('#name');
        //     const email = document.getElementById('#email');
        //     const subject = document.getElementById('#subject');
        //     const message = document.getElementById('#message');
        //     const btn = document.getElementsByClassName('contact-form')[0];

        //     btn.addEventListener('submit', (e)=>{
        //         e.preventDefault();
        //         console.log("clicked");
        //     })
        //     //Email code here....
        //     Email.send({
        //         SecureToken : "6bf1021f-0ab6-4a92-8adb-762aad5aad2b",
        //         To : 'Najkacade3714@gmail.com',
        //         From : "Najkacade3714@gmail.com",
        //         Subject : "testing email",
        //         Body : "test by najiib writing email code"
        //     }).then(
        //       message => alert(message)
        //     );

            







    //  var navTogglerBtn = document.querySelector(".nav-toggler");
    //  var aside = document.querySelector(".aside"); 
    // // var nav1 = document.querySelector(".nav");
    // // navTogglerBtn.addEventListener("click", function(){
    // //     this.classList.toggle("click");
    // //     aside.classList.toggle("open");
    // // });
    

    //    navTogglerBtn.addEventListener("click", () =>
    //    {
    //        asideSectionTogglerBtn();
    //    })
    //    function asideSectionTogglerBtn()
    //    {
    //        aside.classList.toggle("open");
    //        navTogglerBtn.classList.toggle("open");
    //        for(let i=0; i<totalSection; i++)
    //        {
    //            allSection[i].classList.toggle("open");
    //        }
    //    }

//     ScrollReveal().reveal('.home, .heading', {origin: 'top'});
// ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
// ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
// ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});
