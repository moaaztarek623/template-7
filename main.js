let settingBage = document.querySelector('section.setting-box')
let settingBtn = document.querySelector('.icon-setting');
let logo = document.querySelector('.logo');
let rootColorLocalstorage = localStorage.getItem('root_color')
let settingLiColor = document.querySelectorAll('.list-setting li');
let landing_page = document.querySelector('.landing-page');
let arrayImage = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg']
let options = document.querySelectorAll('.options span');
let options_2 = document.querySelectorAll('.options-2 span');

if (rootColorLocalstorage !== null) {
    document.documentElement.style.setProperty('--text-color', localStorage.getItem('root_color'));

    settingLiColor.forEach((li) => {
      if ( li.dataset.color == localStorage.getItem('root_color')) {
        li.classList.add('active');
      }
      
    })
  }
  let booleanBullets = true;
  let localStorageBackgroundImage = localStorage.getItem('local_background');
  let localBullets = localStorage.getItem('show_bullets')
  let booleanBackground = true;
  let intervalBackground;

  if (localStorageBackgroundImage !== null) {

    if (localStorageBackgroundImage === 'true') {

      options[0].classList.add('active');

      options[1].classList.remove('active');

      booleanBackground = true;
    }else {

      options[1].classList.add('active');

      options[0].classList.remove('active');

      booleanBackground = false;
    }
  }
  if (localBullets !== null) {

    if (localBullets === 'true') {

      document.querySelector('.navigation-bullets').style.display = 'block';

      options_2[0].classList.add('active');

      options_2[1].classList.remove('active');

      booleanBullets = true;
    }else {

      document.querySelector('.navigation-bullets').style.display = 'none';

      options_2[1].classList.add('active');

      options_2[0].classList.remove('active');

      booleanBullets = false;
    }
  }

  options.forEach((span) => {

    span.addEventListener('click', toggleActiveClass);

    span.addEventListener('click', (e) => {
      if (e.target.dataset.background === 'yes') {
        booleanBackground = true;

        randomaizeImage();

      }else {
        booleanBackground = false;

        clearInterval(intervalBackground);

        landing_page.style.background = 'url(../images/02.jpg)';
      }
      localStorage.setItem('local_background', booleanBackground);
    })
  })


  options_2.forEach((span) => {
    span.addEventListener('click', toggleActiveClass2)
    span.addEventListener('click', (e) => {
      if (e.target.dataset.display === 'show') {
        document.querySelector('.navigation-bullets').style.display = 'block';
        booleanBullets = true;
      }else {
        document.querySelector('.navigation-bullets').style.display = 'none';
        booleanBullets = false;
      }
      localStorage.setItem('show_bullets', booleanBullets);
    })
  })

function randomaizeImage() {
  
  if (booleanBackground === true) {
    
    intervalBackground = setInterval(() => {
      
      let randomImage = Math.floor(Math.random() * arrayImage.length);
      
      landing_page.style.background = `url(../images/${arrayImage[randomImage]})`
      
    }, 10000);
  }
}

randomaizeImage();

settingBtn.onclick = () => {
    settingBage.classList.toggle('open');

    if (settingBage.classList.contains('open')) {
        logo.style.pointerEvents = 'none';
    }else {
        logo.style.pointerEvents = 'all';
    }
}

settingLiColor.forEach((li) => {
  li.addEventListener('click', (e) => {
    document.documentElement.style.setProperty('--text-color', `${e.target.dataset.color}`);

    localStorage.setItem('root_color', e.target.dataset.color);
  });
  li.addEventListener('click', removeAndAddClass)
});

function removeAndAddClass() {
    settingLiColor.forEach((li) => {
        li.classList.remove('active');
        this.classList.add('active');
    });
}

function toggleActiveClass() {
  options.forEach((option) => {
    option.classList.remove('active');
    this.classList.add('active');
  })
}
function toggleActiveClass2() {
  options_2.forEach((option) => {
    option.classList.remove('active');
    this.classList.add('active');
  })
}

let skillSection = document.querySelector('.skill-section');
let allSkill = document.querySelectorAll('.progress-1');

window.onscroll = () => {
  let sectionTop = skillSection.offsetTop;
  let sectionHeight = skillSection.offsetHeight;
  let windowHeight = this.innerHeight;
  let pageY = this.pageYOffset;


  if (pageY > (sectionTop + sectionHeight - windowHeight) - 200) {
    allSkill.forEach((skill) => {
      skill.style.width = skill.dataset.width;
    });
  }

}

let images = document.querySelectorAll('.imgs img');

images.forEach((img) => {
  img.addEventListener('click', (e) => {
    let overlay = document.createElement('section');

    overlay.className = 'overlay-1';

    document.body.appendChild(overlay);

    let popup = document.createElement('div');

    popup.className = 'popup-1';

    popup.classList.add('op')

    document.body.appendChild(popup);

    let img_2 = document.createElement('img');

    img_2.src = img.src;

    popup.appendChild(img_2);

    let close_1 = document.createElement('span');

    close_1.className = 'close';

    popup.appendChild(close_1);

    let close_2 = document.createElement('i');

    close_2.classList.add('bi');

    close_2.classList.add('bi-x-circle');


    close_1.appendChild(close_2);

    close_1.onclick = () => {
      popup.remove();

      overlay.remove();

    }
    overlay.onclick = () => {

      popup.remove();

      overlay.remove();

    }

  });

});

let bullets = document.querySelectorAll('.bull');
function scrollInto(element) {
  
  element.forEach((ele) => {
  
    ele.addEventListener('click', (e) => {
  
     document.querySelector(e.target.dataset.section).scrollIntoView({
        
      behavior: 'smooth'
  
     });

    });

  });
  
}
scrollInto(bullets);

let res = document.querySelector('.resete');

res.onclick = () => {
  localStorage.removeItem('local_background');
  localStorage.removeItem('root_color');
  location.reload();
}

let before = document.querySelector('header .menu');
let beforeI = document.querySelector('header .menu i');
let lists = document.querySelector('header .lists');

before.onclick = () => {
  lists.classList.toggle('open');
}


document.addEventListener('click', (e) => {
  if (e.target !== lists && e.target !== beforeI) {
    if (lists.classList.contains('open')) {
      lists.classList.remove('open');
    }
  }
})

lists.onclick = function (e) {
  e.stopPropagation();
}

let copy_year = document.querySelector('#copy_year');
let y =  new Date().getFullYear();
copy_year.innerHTML = y