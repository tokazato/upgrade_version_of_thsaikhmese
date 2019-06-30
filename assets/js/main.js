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
      } else {
        this.textContent = 'დამატება';
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