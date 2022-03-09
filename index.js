// header-section

const clickBurgerIcon = document.querySelector('#burgerIcon');
const clickSection = document.querySelectorAll('.click');
const clickCrossIcon = document.querySelector('#cross1');

clickBurgerIcon.addEventListener('click', () => {
    console.log("burger icon clicked");
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

const teachers = document.querySelector('#staff');

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
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum.",
    },
  ];
  



