//******************************************************************/
let count = 0

function handler(e) {
    count += 1
    if (constraint()) {
        alert("Congratulations!! your answer is 'Kindle is Awesome'");
        e.stopImmediatePropagation();
        this.removeEventListener("click", handler)
    }

}

function constraint() {
    if (count === 25)
        return true
    else
        return false
}
document.getElementsByClassName("logo")[0].addEventListener('click', handler)

//  dark mode
console.log("Made with love by IT and Computer Department :)");

function darkFunction() {
    let toggle = sessionStorage.getItem("darkMode") === "false" ? "true" : "false"
    sessionStorage.setItem('darkMode', toggle)
    document.querySelector("html").classList.toggle("dark")
}
$(document).ready(function() {
    if (sessionStorage.getItem("darkMode") === null)
        darkFunction()
    if (sessionStorage.getItem("darkMode") === "false" && !document.querySelector("html").classList.contains("dark"))
        document.querySelector("html").classList.toggle("dark")
})





// animation aos 
AOS.init({
    offset: 60,

    duration: 1000


});

// back to top

//Get the button
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

    $("html, body").animate({
        scrollTop: "0"
    }, 800);
}



// back to top ENDDD

// SMOOTH SCROLLING
$('.smooth').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 800

        );
    }
});
//ENDD

// FILTER CODE
var selectedDepartment = null;
$(document).ready(function() {
    var dept = sessionStorage.getItem('filter') === null ? null : $("#" + sessionStorage.getItem('filter')).attr('id')
    if (dept === "ALL")
        filterAll()
    else if (dept != null)
        filterDepartment(dept)

    $('.category_item').click(function() {
        var category = $(this).attr('id')
        console.log(category)
        if (category == 'ALL') {
            filterAll()
        } else {
            filterDepartment(category)
        }
        selectedDepartment = category;
        //adding filters to session storage
        sessionStorage.setItem('filter', category);
    })
})

function filterAll() {
    $('.event_item').addClass('hide');
    $('.event_item').addClass('show');

    $('.event_item').removeClass('hide');
    setTimeout(function() {
        $('.event_item').removeClass('show');
    }, 350);
}

function filterDepartment(dept) {
    $('.event_item').addClass('hide');
    $('.' + dept).addClass('show');
    $('.' + dept).removeClass('hide');
    setTimeout(function() {
        $('.' + dept).removeClass('show');
    }, 350);
}



// accordion
var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open ';
    }
}

console.log('%c Mystery Hunter!!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)')
console.log("%cHint: trust mystify function because it promised us to solve your mystery.Also, be a little patient with it", "color: blue; font-family:serif; font-size: 20px")

function mystify() {
    console.log("Congrats!! almost there. Now let's test your patience. If you did everything right, you should get your answer in ...")
    return promise()
}

let promise = () => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve("github"), 5000)
    })
}

$(document).ready(function() {
    $("#icon").click(function() {
        $("#icon").toggleClass("animate-spin");
        setTimeout(function() {
            $("#icon").toggleClass("animate-spin");
        }, 330);
    });
});


   // Get all blocks on the website.
   const blocks = document.querySelectorAll('.event_item');

   // Get all day buttons.
   const dayButtons = document.querySelectorAll('.day-button');

   // Get all type buttons.
   const typeButtons = document.querySelectorAll('.type-button');

   // Add a click event listener to each day button.
   for (const dayButton of dayButtons) {
     dayButton.addEventListener('click', () => {
       // Get the day of the clicked button.
       const day = dayButton.textContent;

       // Hide all blocks.
       blocks.forEach((block) => {
         block.style.display = 'none';
       });

       // Display the blocks that match the selected day.
       blocks.forEach((block) => {
         if (block.classList.contains(day)) {
           block.style.display = 'block';
         }
       });
     });
   }

   // Add a click event listener to each type button.
   for (const typeButton of typeButtons) {
     typeButton.addEventListener('click', () => {
       // Get the type of the clicked button.
       const type = typeButton.textContent;

       // Hide all blocks.
       blocks.forEach((block) => {
         block.style.display = 'none';
       });

       // Display the blocks that match the selected type.
       blocks.forEach((block) => {
         if (block.classList.contains(type)) {
           block.style.display = 'block';
         }
       });
     });
   }
