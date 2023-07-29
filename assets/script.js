const opneNave = () => {
  document.getElementById('mobileNave').style.width = '100%';
};
const closeNave = () => {
  document.getElementById('mobileNave').style.width = '0';
};

opneNave();
closeNave();

// ________________Insertar Contenido__________________//
const worksContent = `
  <article class="works">
    <div class="works-content">
      <h2 class="subtitle">My Recent Works</h2>
      <img class="vector01" src="./images/Vector.png" alt="" class="vector-line">
    </div>

    <article class="multi-post-stories">
      <img src="./images/Img Placeholder-desto.png" alt="" srcset="">
      <div class="multi-box">
        <h2 class="subtitle2">Multi-Post Stories</h2>
        <p class="paragraf01">
          A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.
        </p>
        <ul class="ul-tecnologies"> 
          <li>CSS</li>
          <li>HTML</li>
          <li>Bootstrap</li>
          <li>Ruby</li>
        </ul>
        <button class="see-Proyect">See project</button>
      </div>
    </article>
  </article>
`;

const insertWorksContent = () => {
  const container = document.querySelector('.works');

  container.innerHTML = worksContent;
};

insertWorksContent();

// ________________Insertar Contenido-2-__________________//
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

// *pop-up*

const body = document.querySelector('body');
const openModal = document.querySelectorAll('.see-Proyect, .see-Proyect-works-1');
openModal.forEach((button) => {
  button.addEventListener('click', () => {
    const popSection = document.createElement('div');
    const popUp = document.createElement('div');
    popUp.innerHTML = `
    <section class="eachWork" >
    <div class="eachWork_Content">
      <div class="content2">
        <h2 class="subtitle-pop1">Multi Post Stories</h2>
        <h2 class="subtitle-pop2">Keeping track of hundreds  of components website</h2>
        <img onclick="closePopup(); "class="img-X" src="./images/Icon_X_.png" alt="">
        <ul class="tecnologies"> 
          <li>HTML</li>
          <li>Bootstrap</li>
          <li>Ruby on Rails</li>
        </ul>

        <div class="description">
          <div class="eachWorkImgContent">
            <img class ="eachWorkImg" src="/images/Snapshoot Portfolio.png" alt="" srcset="">
          </div>
          <div class="container_inf_button">
            <p class="description-p1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
            <p class="description-p2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>

            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>
            <div class="containerEachWorkButton">
              <a href="https://fernando426.github.io/Portfolio-mobile-website/" target="_blank"><button id="liveBtn" class="liveBtn">See live<img src="/images/IconLive.png"></button></a>
              <a href="https://github.com/Fernando426" target="_blank"><button id="sourceBtn">See source<img src="/images/Icon -GitHubEach.png"></button></a>
            </div>
          </div>
        </div>
        
    </div>
  </section>
          `;
    popSection.appendChild(popUp);
    body.appendChild(popSection);
    const popCloseButton = popSection.querySelector('.img-X');
    popCloseButton.addEventListener('click', () => {
      popSection.remove();
    });
  });
});

// _____________CONTACT FORM VALIDATION_______________
const form = document.getElementById('form');
const emailValidation = document.querySelector('.Validation-email');
const email = document.getElementById('email');

function validateInputs() {
  const valueEmail = email.value;
  if (valueEmail !== valueEmail.toLowerCase()) {
    emailValidation.classList.add('invalidEmail');
    return false;
  }
  emailValidation.classList.remove('invalidEmail');
  return true;
}

form.addEventListener('submit', (elem) => {
  elem.preventDefault();
  const valid = validateInputs();
  if (valid === true) {
    form.submit();
  }
});

// ________CODE FOR PRESERVING DATA INTHE FORM ____________
