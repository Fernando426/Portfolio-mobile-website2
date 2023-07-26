const opneNave = () => {
  document.getElementById('mobileNave').style.width = '100%';
};
const closeNave = () => {
  document.getElementById('mobileNave').style.width = '0';
};

opneNave();
closeNave();

// ________________Insertar Contenido__________________//
const works = [
  {
    title: 'Profesional Art Printing Data More',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featuredImage: 'path/to/featured-image-1.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://example.com/live-link-1',
    sourceLink: 'https://example.com/source-link-1',
  },
  {
    title: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featuredImage: 'path/to/featured-image-2.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://example.com/live-link-2',
    sourceLink: 'https://example.com/source-link-2',
  },
  {
    title: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featuredImage: 'path/to/featured-image-3.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://example.com/live-link-3',
    sourceLink: 'https://example.com/source-link-3',
  },
  {
    title: 'Profesional Art Printing Data More',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featuredImage: 'path/to/featured-image-4.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://example.com/live-link-4',
    sourceLink: 'https://example.com/source-link-4',
  },
  {
    title: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featuredImage: 'path/to/featured-image-5.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://example.com/live-link-5',
    sourceLink: 'https://example.com/source-link-5',
  },
  {
    title: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    featuredImage: 'path/to/featured-image-6.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://example.com/live-link-6',
    sourceLink: 'https://example.com/source-link-6',
  },
];

const worksContainer = document.querySelector('.works-conteiner2');

const worksHTML = works.map((project) => `
  <div class = works-1>
    <h2 class="subtitle-works-1">${project.title}</h2>
    <p class="paragraf-works-1">${project.description}</p>
    <img class="img-feature" src="${project.featuredImage}" alt="${project.title}">
    <ul class="ul-tecnologies-works-1">
      ${project.technologies.map((technology) => `<li>${technology}</li>`).join('')}
    </ul>
    <a class="links" href="${project.liveLink}" target="_blank">Ver proyecto</a>
    <a class="links" href="${project.sourceLink}" target="_blank">Ver código fuente</a>
    <button class="see-Proyect-works-1">See project</button>
  </div>
`).join('');

worksContainer.innerHTML = worksHTML;

/* -----------------Validation-Form ---------------------*/
// const form = document.querySelector('.aboutme-contact2');
// const errorElement = document.querySelector('.error-message');
// form.addEventListener('submit', (event) => {
//   const emailInput = document.getElementById('mail');
//   const emailValue = emailInput.value;
//   if (emailValue !== emailValue.toLowerCase()) {
//     errorElement.textContent = 'Email must be in lowercase';
//     const submitButton = document.querySelector('.resume-button2');
//     submitButton.parentNode.insertBefore(errorElement, submitButton);
//     event.preventDefault();
//   }
// });
