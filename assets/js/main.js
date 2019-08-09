document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            // lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });

      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Possibly fall back to a more compatible method here
    }
  });


// ------------------- Add change Added ------------------

let add_buttons = document.getElementsByClassName("add");
let btn = add_buttons.length;
for (let i = 0; i < btn; i++) {
  add_buttons[i].addEventListener('click', function() {
    this.classList.toggle('added');
      if(this.classList.contains('added')) {
        this.textContent = 'დამატებულია';
        this.style.color = 'grey';
        this.style.border = '1px solid lightgray';
      } else {
        this.textContent = 'დამატება';
        this.style.color = '#BADC58';
        this.style.border = '1px solid #BADC58';
      }
  });
}

// ------------------- changed Burger with X ------------------

function myFunction(x) {
  x.classList.toggle("change");
 }


// ------------------- open nav by burger ------------------

const brg = document.querySelector('.burger');
const menu = document.getElementById('navi');

brg.addEventListener('click', burgerClick);

function burgerClick() {
  menu.classList.toggle('open');
}


// ------------------- go down ------------------

var more = document.getElementById('down');
more.addEventListener('click', function() {
  var x = 1;
  var id = setInterval(scroll, 50);
  function  scroll(){
    if(x >= 75){ 
    clearInterval(id);
  } else {
    x += 5;
    window.scrollBy(0, x);
  }

  }
 
})

