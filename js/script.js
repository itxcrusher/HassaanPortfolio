// Typing Animation
var typed = new Typed(".typing", {
    strings:["", "Blockchain Instructor", "Blockchain Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// Aside
const nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        totalNavList = navList.length,
        allSection = document.querySelectorAll(".section"),
        totalSection = allSection.length
        for(let i=0; i<totalNavList; i++){
            const a = navList[i].querySelector("a");
            a.addEventListener("click", function(){
                removeBackSection()
                for(let j=0; j<totalNavList; j++){
                    if(navList[j].querySelector("a").classList.contains("active")){
                        addBackSection(j);
                        // allSection[j].classList.add("back-section")
                    }
                    navList[j].querySelector("a").classList.remove("active")
                }
                this.classList.add("active")
                showSelection(this)
                if(window.innerWidth < 1200){
                    asideSelectionTogglerBtn()
                }
            })
        }
        function removeBackSection(){
            for(let i=0; i<totalSection; i++){
                allSection[i].classList.remove("back-section")
            }
        }
        function addBackSection(j){
            allSection[j].classList.add("back-section")
        }
        function showSelection(element){
            for(let i=0; i<totalSection; i++){
                allSection[i].classList.remove("active")
            }
            const target = element.getAttribute("href").split("#")[1]
            document.querySelector("#" + target).classList.add("active")
        }
        function updateNav(element){
            for(let i=0; i<totalNavList; i++){
                navList[i].querySelector("a").classList.remove("active")
                const target = element.getAttribute("href").split("#")[1]
                if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                    navList[i].querySelector("a").classList.add("active")
                }
            }
        }
        document.querySelector(".hire-me").addEventListener("click", function(){
            const sectionIndex = this.getAttribute("data-section-index")

            showSelection(this);
            updateNav(this);
            removeBackSection()
            addBackSection(sectionIndex)
        })
        const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside")
            navTogglerBtn.addEventListener("click", () => {
                asideSelectionTogglerBtn();
            })
            function asideSelectionTogglerBtn(){
                aside.classList.toggle("open")
                navTogglerBtn.classList.toggle("open")
                for(let i=0; i<totalSection; i++){
                    allSection[i].classList.toggle("open")
                }
            }


// Modal
const body = document.querySelector("body"),
            item = document.querySelector("#journal-item"),
            overlay = document.querySelector(".overlay"),
            modal = document.querySelector(".modal-box"),
            showBtn = document.querySelector(".show-details"),
            closeBtn = document.querySelector(".close-modal");

            showBtn.addEventListener("click", () => body.classList.add("clicked"));
            overlay.addEventListener("click", () => body.classList.add("clicked"));
            closeBtn.addEventListener("click", () => body.classList.remove("clicked"));
            

            document.addEventListener("click", function(event){
                const element = event.target
                // console.log(element.id)
                if(body.classList.contains("clicked") && !modal.contains(element) && !item.contains(element)){
                    body.classList.remove("clicked")
                }
            })