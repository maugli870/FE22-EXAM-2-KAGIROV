let tasks = [
  {
    title: "Take the dog for a walk",
    description:
      "Walk with dog at the park and buy some dog food at the supermarket",
    image: "imgs/task-bg.jpeg",
    priority: 0,
    deadline: "09.06.2024",
  },
  {
    title: "Wash the dishes",
    description:
      "Wash the dishes very carefully because they are made of glass",
    image: "imgs/task-bg.jpeg",
    priority: 0,
    deadline: "09.06.2024",
  },
  {
    title: "Create a website",
    description:
      "Just create something because why not. Am I right? I think I am.",
    image: "imgs/task-bg.jpeg",
    priority: 0,
    deadline: "09.06.2024",
  },
  {
    title: "Lock the doors",
    description: "I should lock all the doors, so nobody can get in",
    image: "imgs/task-bg.jpeg",
    priority: 0,
    deadline: "09.06.2024",
  },
  {
    title: "Create this stupid list",
    description:
      "I know that I can't use lorem ipsum or something, but whyyyy ?????",
    image: "imgs/task-bg.jpeg",
    priority: 0,
    deadline: "09.06.2024",
  },
  {
    title: "Accept that you have to do that",
    description:
      "The sooner I accept the fact that I have to do this list, the better for me",
    image: "imgs/task-bg.jpeg",
    priority: 0,
    deadline: "09.06.2024",
  },
  {
    title: "Forget about what I just said",
    description:
      "I can't accept it. Because it doesn't make any sense. It's just stupid",
    image: "imgs/task-bg.jpeg",
    priority: 0,
    deadline: "09.06.2024",
  },
  {
    title: "Buy a new keyboard",
    description: "Buy a new keyboard because I just broke my old one. Joking.",
    image: "imgs/task-bg.jpeg",
    priority: 0,
    deadline: "09.06.2024",
  },
  {
    title: "Go take some rest",
    description:
      "I have finished the list and because of that I should take some rest",
    image: "imgs/task-bg.jpeg",
    priority: 0,
    deadline: "09.06.2024",
  },
];

for (let task of tasks) {
  document.getElementById("list-container").innerHTML += `
    <li class="weekly-tasks-container-element">
            <div class="weekly-tasks-el-header">
              <div class="weekly-tasks-el-taskTitle">Task</div>
              <div class="weekly-tasks-el-logosContainer">
                <div class="weekly-tasks-el-checkBox-logo">
                  <svg class="checkBox-icon" viewBox="0 0 30 30" >
                    <use href="sprite.svg#checkBox-icon"></use>
                  </svg>
              </div>
                <div class="weekly-tasks-el-kebab-logo">
                  <svg class="kebab-icon" viewBox="0 0 30 30" >
                    <use href="sprite.svg#kebab-icon"></use>
                  </svg>                
                </div>
              </div>
            </div>

            <div class="weekly-tasks-el-image-container">
              <div class="weekly-tasks-el-image">
              <img src="${task.image}" class="img-fluid">
              </div>
            </div>

            <div class="weekly-tasks-el-task-container">
              <p class="weekly-tasks-el-task">${task.title}</p>
              <p class="weekly-tasks-el-taskDescription">
                ${task.description}
              </p>
            </div>

            <div class="weekly-tasks-el-notes-container">
              <div class="weekly-tasks-el-notes-level">
                <div class="weekly-tasks-el-notes-level-logo">
                  <svg class="icon-level" viewBox="0 0 30 30" >
                    <use href="sprite.svg#level-icon"></use>
                  </svg>
                </div>
                <span class="weekly-tasks-el-notes-level-text"
                  >Priority level:
                  <span class="weekly-tasks-el-notes-level-text-value priority-number greenBg bg-changing-class"
                    >${task.priority}</span
                  ></span
                >
              </div>
              <div class="weekly-tasks-el-notes-term">
                <div class="weekly-tasks-el-notes-term-logo">
                  <svg class="icon-term" viewBox="0 0 30 30" >
                    <use href="sprite.svg#term-icon"></use>
                  </svg>
                </div>
                <span class="weekly-tasks-el-notes-term-text"
                  >Deadline: ${task.deadline}</span
                >
              </div>
            </div>

            <div class="weekly-tasks-el-buttons-container">
              <div class="weekly-tasks-el-importanceBtn importanceBtn">
                    <span>Add importance</span>
              </div>
              <div class="weekly-tasks-el-deleteBtn">
                <div class="deleteBtn-container">
                <svg class="icon-level" viewBox="0 0 30 30" >
                <use href="sprite.svg#trashcan-icon"></use>
              </svg>
                </div>
                <span class="delete-title">Delete</span>
              </div>
              <div class="weekly-tasks-el-doneBtn">
                <div class="doneBtn-container">
                  <svg class="checkMark-icon" viewBox="0 0 30 30" >
                    <use href="sprite.svg#checkMark-icon"></use>
                  </svg>
                </div>
                <span class="doneBtn-txt">Done</span>
              </div>
            </div>
    </li>    
    `;
}

let btns = document.querySelectorAll(".importanceBtn");

btns.forEach((element, index) => {
  element.addEventListener("click", function () {
    if (tasks[index].priority < 5) {
      tasks[index].priority++;
      document.querySelectorAll(".priority-number")[index].innerText =
        tasks[index].priority;
      console.log(tasks[index].priority);
    } else {
      tasks[index].priority = 0;
      document.querySelectorAll(".priority-number")[index].innerText =
        tasks[index].priority;
    }
    if (tasks[index].priority <= 1) {
      document
        .getElementsByClassName("bg-changing-class")
        [index].classList.add("greenBg");
      document
        .getElementsByClassName("bg-changing-class")
        [index].classList.remove("redBg", "orangeBg");
    } else if (tasks[index].priority <= 3) {
      document
        .getElementsByClassName("bg-changing-class")
        [index].classList.add("orangeBg");
      document
        .getElementsByClassName("bg-changing-class")
        [index].classList.remove("redBg", "greenBg");
    } else {
      document
        .getElementsByClassName("bg-changing-class")
        [index].classList.add("redBg");
      document
        .getElementsByClassName("bg-changing-class")
        [index].classList.remove("greenBg", "orangeBg");
    }
  });
});

// let sortBtn = document.querySelectorAll(".weekly-tasks-header-sorting");

// sortBtn.addEventListener("click", function () {
//   tasks = tasks.sort((a, b) => {
//     return a.priority - b.priority;
//   });
//   console.log(tasks)
// });

// let btns = document.querySelectorAll(".importanceBtn");
// btns.forEach((element, index) => {

// })

// let testBtn = document.querySelectorAll(".weekly-tasks-el-doneBtn");

// for (let done of dones) {
//   done.addEventListener("click")
// }

let team = [
  { name: "Zelim", secondname: "Kagirov" },
  { name: "Bers", secondname: "Mizaev" },
  { name: "Muhammad", secondname: "Drugoeimya" },
];

team[0].name = "Sasha";

console.log(team);
