const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// PARTE 01
const createDaysOfTheMonth = () => {
  const decemberDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const decemberDaysList = document.querySelector('#days');

  for (let i = 0; i < decemberDays.length; i += 1) {
    const currentDay = decemberDays[i];
    const decemberDay = document.createElement('li');
    decemberDay.innerText = currentDay;
    decemberDay.classList.add('day');

    if (currentDay === 24 || currentDay === 25 || currentDay === 31) {
      decemberDay.classList.add('holiday');
    }

    if (currentDay % 7 === 4) {
      decemberDay.classList.add('friday');
    }

    decemberDaysList.appendChild(decemberDay);
  }
};

createDaysOfTheMonth();

// PARTE 02
const createHolidayButton = (string) => {
  const buttonsContainer = document.querySelector('.buttons-container');
  const holidayButton = document.createElement('button');
  
  holidayButton.innerText = string;
  holidayButton.id = 'btn-holiday';
  buttonsContainer.appendChild(holidayButton);
};

createHolidayButton('Feriados');

// PARTE 03
const changeBackgroundColor = () => {
  const holidays = document.querySelectorAll('.holiday');

  for (let i = 0; i < holidays.length; i += 1) {
    const currentHoliday = holidays[i];
    if (currentHoliday.style.backgroundColor === 'white') {
      currentHoliday.style.backgroundColor = 'rgb(238,238,238)';
    } else {
      currentHoliday.style.backgroundColor = 'white';
    }
  }
};

const holidayButton = document.querySelector('#btn-holiday');
holidayButton.addEventListener('click', changeBackgroundColor);

// PARTE 04
const createFridayButton = (string) => {
  const buttonsContainer = document.querySelector('.buttons-container');
  const fridayButton = document.createElement('button');
  
  fridayButton.innerText = string;
  fridayButton.id = 'btn-friday';
  buttonsContainer.appendChild(fridayButton);
};

createFridayButton('Sexta-feira');

// PARTE 05
const changeText = () => {
  const fridays = document.querySelectorAll('.friday');
  const fridaysArray = [4, 11, 18, 25]

  for (let i = 0; i < fridays.length; i += 1) {
    const currentFriday = fridays[i];

    if (currentFriday.innerText === 'SEXTOU!') {
      currentFriday.innerText = fridaysArray[i];
    } else {
      currentFriday.innerText = 'SEXTOU!';
    }
  }
};

const fridayButton = document.querySelector('#btn-friday');
fridayButton.addEventListener('click', changeText);
