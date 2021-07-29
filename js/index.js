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
  modal.querySelector("p").textContent = content;
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
    "Porfolio",
    "WatchBuddy",
    "Pig Game",
    "CarePal",
    "My Shell",
  ],
  dates: [
    "In progress",
    "July 2021",
    "June 2021 - August 2021",
    "June 2021",
    "December 2020",
    "September 2020",
  ],
  contents: [
    "NuLand Inc Website",
    "Porfolio",
    "Manage (scrum master) a team of 5 to design a web app that allows user registration, communication by transferring data to and from MySQL database using PHP programming to interact with front end and execute queries.",
    "Pig Game",
    "Led a team of 4 to design an Android app that allows users to keep track of vital signs, medications, diet, set alarm to take medications on their personal accounts. Implemented Waterfall methodology to fulfill pre-defined requirements.",
    "Developed a text-based shell utility that performs the functionalities of a directory for Unix: display directories with file details, navigate between directories, and run, copy, delete, or sort files.",
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
