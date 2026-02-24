

let jobs = [

  {id:1, company:"Google", position:"Frontend Developer", location:"USA", type:"Remote", salary:"$5000", description:"Build UI", status:"all"},
  {id:2, company:"Amazon", position:"Backend Developer", location:"Canada", type:"Full-time", salary:"$6000", description:"API dev", status:"all"},
  {id:3, company:"Microsoft", position:"Fullstack", location:"UK", type:"Hybrid", salary:"$5500", description:"MERN stack", status:"all"},
  {id:4, company:"Facebook", position:"UI Designer", location:"USA", type:"Remote", salary:"$4000", description:"Figma", status:"all"},
  {id:5, company:"Tesla", position:"Engineer", location:"USA", type:"Full-time", salary:"$7000", description:"AI dev", status:"all"},
  {id:6, company:"Netflix", position:"Frontend", location:"Germany", type:"Remote", salary:"$5200", description:"Vue", status:"all"},
  {id:7, company:"Spotify", position:"Backend", location:"Sweden", type:"Hybrid", salary:"$5800", description:"Node", status:"all"},
  {id:8, company:"Adobe", position:"Fullstack", location:"India", type:"Remote", salary:"$4500", description:"Web apps", status:"all"}
];

let currentTab = "all";


function renderJobs() {
  const container = document.getElementById("job-container");
  container.innerHTML = "";

  let filtered = jobs.filter(job =>
    currentTab === "all" || job.status === currentTab
  );

  if(filtered.length === 0){
    container.innerHTML = `
      <div class="empty">
        <h3>No jobs available</h3>
        <p>There are no jobs in this section</p>
      </div>
    `;
    return;
  }

  filtered.forEach(job => {
    const div = document.createElement("div");
    div.classList.add("job-card");

    div.innerHTML = `
      <h3>${job.company}</h3>
      <p>${job.position}</p>
      <p>${job.location}</p>
      <p>${job.type}</p>
      <p>${job.salary}</p>
      <p>${job.description}</p>

      <button class="btn btn-interview" onclick="setStatus(${job.id}, 'interview')">Interview</button>
      <button class="btn btn-rejected" onclick="setStatus(${job.id}, 'rejected')">Rejected</button>
      <button class="btn btn-delete" onclick="deleteJob(${job.id})">Delete</button>
    `;

    container.appendChild(div);
  });

  document.getElementById("job-count").innerText = filtered.length + " Jobs";
}


function setStatus(id, status) {
  let job = jobs.find(j => j.id === id);
  job.status = status;

  updateDashboard();
  renderJobs();
}


function deleteJob(id) {
  jobs = jobs.filter(j => j.id !== id);

  updateDashboard();
  renderJobs();
}


function updateDashboard() {
  document.getElementById("total").innerText = jobs.length;

  document.getElementById("interview").innerText =
    jobs.filter(j => j.status === "interview").length;

  document.getElementById("rejected").innerText =
    jobs.filter(j => j.status === "rejected").length;
}


function setTab(tab) {
  currentTab = tab;

  document.querySelectorAll(".tabs button").forEach(btn =>
    btn.classList.remove("active")
  );

  if(tab === "all") document.getElementById("all").classList.add("active");
  if(tab === "interview") document.getElementById("interview-tab").classList.add("active");
  if(tab === "rejected") document.getElementById("rejected-tab").classList.add("active");

  renderJobs();
}


updateDashboard();
renderJobs();