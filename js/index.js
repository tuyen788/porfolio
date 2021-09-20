const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

//modal for project description

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".porfolio__item");

const openModal = function (title, date, content) {
  modal.querySelector("h2").textContent = title;
  modal.querySelector("h3").textContent = date;
  modal.querySelector("p").innerHTML = content;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const projectDesc = {
  titles: [
    "NuLand Inc Website",
    "WatchBuddy",
    "Portfolio",
    "Pig Game",
    "CarePal",
    "Guess My Number",
  ],
  dates: [
    "September 2021",
    "August 2021",
    "July 2021",
    "June 2021",
    "December 2020",
    "September 2020",
  ],
  contents: [
    "Full Stack Developer: React, ASP.NET Core Web API, C#, MSSQL.<br/>Designed and implemented a client-server web app that allows a rental company to manage their own property listings on the website to display the information to potential tenants.",
    "Design and develop my own portfolio site using HTML, CSS3, and JavaScript.",
    "Full Stack Developer: HTML, CSS, Bootstrap, SQL, PHP, AWS.<br/>Manage (scrum master) a team of 5 to design a web app that allows user registration, communication by transferring data to and from MySQL database using PHP programming to interact with front end and execute queries. Successfully host the website on AWS EC2.",
    'Designed and develop a dice game using HTML, CSS3, and JavaScript. <a href="https://tuyen788.github.io/pig-game/" class="demo-link" target="_blank">Play.</a>',
    "Full Stack Developer: Java, Firebase.<br/>Led a team of 4 to design an Android app that allows users to keep track of vital signs, medications, diet, set alarm to take medications on their personal accounts. Implemented Waterfall methodology to fulfill pre-defined requirements.",
    'Designed and develop a number guessing game using HTML, CSS3, and JavaScript. <a href="https://tuyen788.github.io/guess-my-number/" class="demo-link" target="_blank">Play.</a>',
  ],
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener(
    "click",
    openModal.bind(
      event,
      projectDesc.titles[i],
      projectDesc.dates[i],
      projectDesc.contents[i]
    )
  );

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
