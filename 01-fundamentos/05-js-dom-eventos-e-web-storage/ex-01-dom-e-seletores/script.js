const header = document.getElementById('header-container');
const sectionEmergencyTasks = document.querySelector('.emergency-tasks');
const sectionNoEmergencyTasks = document.querySelector('.no-emergency-tasks');
const h3UrgenteEImportante = document.querySelector('.emergency-tasks div h3');
const h3UrgenteNaoImportante = document.querySelector('.emergency-tasks div:nth-child(2) h3');
const h3NaoUrgenteImportante = document.querySelector('.no-emergency-tasks div h3');
const h3NaoUrgenteNaoImportante = document.querySelector('.no-emergency-tasks div:nth-child(2) h3');
const footer = document.getElementById('footer-container');

header.style.backgroundColor = 'green';
sectionEmergencyTasks.style.backgroundColor = 'pink';
sectionNoEmergencyTasks.style.backgroundColor = 'yellow';
h3UrgenteEImportante.style.backgroundColor = 'purple';
h3UrgenteNaoImportante.style.backgroundColor = 'purple';
h3NaoUrgenteImportante.style.backgroundColor = 'black';
h3NaoUrgenteNaoImportante.style.backgroundColor = 'black';
footer.style.backgroundColor = 'green';
