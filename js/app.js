//  First functionality, give the header a darker color 
//  when page has been scrolled past 30px

const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');

// listen for scroll event
window.addEventListener('scroll',()=>{
    if (window.scrollY >= 30)
    {
        header.classList.add('dark-header');
    }
    else 
    {
        header.classList.remove('dark-header');
    }
})

//  Second functionality, toggle navbar on smaller screens
const togglebtn = document.querySelector('.toggle-btn');

const bars = togglebtn.querySelector('.fa-bars');   //  The bar icons

//  Listen for click event
togglebtn.addEventListener('click',() => {
    
    bars.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
})




//  Another functionality would be that once a link on the mobile navbar--
//  --has been clicked, the navbar should close

//So we grab the links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click',()=> {
        navbar.classList.remove('nav-toggle');
        bars.classList.remove('fa-times');
    })
})

//  Accordion
//  First we select all toggle question elements
const toggle_question_btns = document.querySelectorAll('.toggle-question');

toggle_question_btns.forEach(btn => {
    btn.addEventListener('click',(e)=> {
        const question = e.currentTarget.parentElement.parentElement;
        if (question.classList.contains('show-text'))
        {
            question.classList.remove('show-text');
            btn.textContent = '+'
        }
        else
        {
            //  Close all other open questions
            toggle_question_btns.forEach(btn => {
                btn.parentElement.parentElement.classList.remove('show-text');
            })
            question.classList.add('show-text');
            btn.textContent = '-';
            
        }
    })
})