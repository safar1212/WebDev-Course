// header-section

const clickBurgerIcon = document.querySelector('#burgerIcon');
const clickSection = document.querySelectorAll('.click');
const clickCrossIcon = document.querySelector('#cross1');

clickBurgerIcon.addEventListener('click', () => {
  document.getElementById('cross').style.cssText = 'width: 100%; height: 100%;';
  document.getElementById('cross1').style.cssText = 'display:block; z-index: 2;';
  document.getElementById('menu').style.cssText = 'display: flex; z-index: 2;';
});

clickSection.forEach((e) => {
  e.addEventListener('click', () => {
    document.getElementById('cross').style.cssText = 'display: none;';
    document.getElementById('cross1').style.cssText = 'display: none;';
    document.getElementById('menu').style.cssText = 'display: none;';
  });
});

clickCrossIcon.addEventListener('click', () => {
  document.getElementById('cross').style.cssText = ' width: 0%; height: 0%; display: none;';
  document.getElementById('cross1').style.cssText = 'display: none;';
  document.getElementById('menu').style.cssText = 'display: none;';
});

//   teachers section

const teachersObject = [
  {
    image: './images/staff1.jpg',
    name: 'Zahra',
    expertise: 'CEO of the company',
    paragraph:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad.',
  },
  {
    image: './images/staff2.jpg',
    name: 'Sakina',
    expertise: 'HTML expert',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem.',
  },
  {
    image: './images/staff3.jpg',
    name: 'Safar Ali',
    expertise: 'A CSS expert',
    paragraph:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem.',
  },
  {
    image: './images/staff4.jpg',
    name: 'Jenny',
    expertise: 'Javascript Teacher',
    paragraph:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis.',
  },
  {
    image: './images/staff5.jpg',
    name: 'Steven',
    expertise: 'Ruby and Python expert',
    paragraph:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In!',
  },
  {
    image: './images/staff6.jpg',
    name: 'Machelle',
    expertise: 'Ruby and Rails expert',
    paragraph:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum.',
  },
];

function teachersList() {
  let renderAll = '';
  const teachersSection = document.querySelector('.grid-container1');
  teachersObject.forEach((teacher) => {
    const featuredStaff = `
    <div class="grid-item1">
      <div class="staffImage">
          <img src=${teacher.image} alt="staffMember">
      </div>
      <div class="details">
          <h2>${teacher.name}</h2>
          <p class="expertise">${teacher.expertise}</p>
          <p>${teacher.paragraph}</p>
      </div>
    </div>
  `;
    renderAll += featuredStaff;
  });
  teachersSection.innerHTML = renderAll;
}
teachersList();
