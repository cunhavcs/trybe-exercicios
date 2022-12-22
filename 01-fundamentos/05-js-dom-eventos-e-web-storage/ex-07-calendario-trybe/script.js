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

const createHolidayButton = (string) => {
  const buttonsContainer = document.querySelector('.buttons-container');
  const holidayButton = document.createElement('button');
  
  holidayButton.innerText = string;
  holidayButton.id = 'btn-holiday';
  buttonsContainer.appendChild(holidayButton);
};

createHolidayButton('Feriados');

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

const createFridayButton = (string) => {
  const buttonsContainer = document.querySelector('.buttons-container');
  const fridayButton = document.createElement('button');
  
  fridayButton.innerText = string;
  fridayButton.id = 'btn-friday';
  buttonsContainer.appendChild(fridayButton);
};

createFridayButton('Sexta-feira');

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

const zoomIn = ({ target }) => {
  target.style.fontSize = '25px';
};

const zoomOut = ({ target }) => {
  target.style.fontSize = '20px';
};

const changeColor = ({ target }) => {
  const selectedColor = subtitleTask.style.backgroundColor;

  if (subtitleTask.className.includes('selected')) {
    if (target.style.color === selectedColor) {
      target.style.color = 'rgb(119,119,119)';
    } else {
      target.style.color = selectedColor;
    }
  }
};

const createListeners = () => {
  const decemberDays = document.querySelectorAll('.day');

  for (let i = 0; i < decemberDays.length; i += 1) {
    const currentDay = decemberDays[i];
    currentDay.addEventListener('mouseover', zoomIn);
    currentDay.addEventListener('mouseout', zoomOut);
    currentDay.addEventListener('click', changeColor);
  }
};

createListeners();

const createTask = (task) => {
  const myTasks = document.querySelector('.my-tasks');
  const newTask = document.createElement('span');

  newTask.innerText = task;
  myTasks.appendChild(newTask);
};

createTask(' - Projeto Calendário');

const createSubtitle = (color) => {
  const myTasks = document.querySelector('.my-tasks');
  const subtitle = document.createElement('div');

  subtitle.classList.add('task');
  subtitle.style.backgroundColor = color;
  myTasks.appendChild(subtitle);
};

createSubtitle('green');

const selectTask = ({ target }) => {
  if (target.className.includes('selected')) {
    target.classList.remove('selected'); 
  } else {
    target.classList.add('selected');
  }
};

const subtitleTask = document.querySelector('.task');
subtitleTask.addEventListener('click', selectTask);

const createAppointmentWithClick = ({ key }) => {
  const taskListContainer = document.querySelector('.task-list-container');
  const input = document.querySelector('#task-input');
  const newAppointment = document.createElement('li');

  if (input.value === '') {
    alert('ERRO: É obrigatório digitar um texto para adicionar');
  } else {
    newAppointment.innerText = input.value;
    newAppointment.style.listStyleType = 'none';
    taskListContainer.appendChild(newAppointment);
    input.value = '';
  }
};

const createAppointmentWithEnter = ({ key }) => {
  const taskListContainer = document.querySelector('.task-list-container');
  const newAppointment = document.createElement('li');

  if (input.value === '') {
    alert('ERRO: É obrigatório digitar um texto para adicionar');
  } else if (key === 'Enter') {
    newAppointment.innerText = input.value;
    newAppointment.style.listStyleType = 'none';
    taskListContainer.appendChild(newAppointment);
    input.value = '';
  }
};

const addAppointmentButton = document.querySelector('#btn-add');
addAppointmentButton.addEventListener('click', createAppointmentWithClick);

const input = document.querySelector('#task-input');
input.addEventListener('keyup', createAppointmentWithEnter);
