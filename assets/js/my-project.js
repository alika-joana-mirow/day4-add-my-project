// getting data
let projects = [];

function getData(event) {
  // prevent from reloading the page
  event.preventDefault();

  let projectName = document.getElementById("project-name").value;
  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;
  let desc = document.getElementById("description").value;
  let imageProject = document.getElementById("inputImageProject").files;

  //   image input validation
  imageProject = URL.createObjectURL(imageProject[0]);

  let project = {
    projectName,
    desc,
    imageProject,
    startDate,
    endDate,
  };

  projects.push(project);
  console.log(project);

  showData();
}

function showData() {
  document.getElementById("list-show").innerHTML = "";
  for (let i = 0; i < projects.length; i++) {
    document.getElementById("list-show").innerHTML += `
        <div class="list-container">
            <div class="img-list-container">
              <img src="${projects[i].imageProject}" alt="photo" />
            </div>
            <div class="list-content">
              <a href="/article.html">${projects[i].projectName}</a>
              <p class="duration">Duration : 3 Month</p>
              <p>
                ${projects[i].desc}
              </p>
              <div class="icon-list">
                <div class="icon-item">
                  <i class="fa-brands fa-node"></i>
                </div>
                <div class="icon-item">
                  <i class="fa-brands fa-react"></i>
                </div>
                <div class="icon-item">
                  <i class="fa-brands fa-vuejs"></i>
                </div>
                <div class="icon-item">
                  <i class="fa-brands fa-angular"></i>
                </div>
              </div>
              <div class="list-action">
                <a href="#" class="edit-action">edit</a>
                <a href="#" class="delete-action">delete</a>
              </div>
            </div>
        </div>`;
  }
}
