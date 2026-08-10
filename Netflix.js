const navbar=document.querySelector(".navbar");
window.addEventListener("scroll",()=>{navbar.classList.toggle("scrolled",window.scrollY>50)});

function playMovie(movieName="Stranger Things"){alert("▶ Now Playing: "+movieName)}

const modal=document.getElementById("infoModal");
function showInfo(movieName="Stranger Things"){
    document.getElementById("modalTitle").textContent=movieName;
    document.getElementById("modalText").textContent=movieName+" is available to watch on this Netflix Clone project. This website is created for educational and demonstration purposes.";
    modal.style.display="flex";
}
function closeModal(){modal.style.display="none"}
window.addEventListener("click",e=>{if(e.target===modal)closeModal()});

const searchInput=document.getElementById("searchInput");
const searchBtn=document.getElementById("searchBtn");
const searchResults=document.getElementById("searchResults");
const resultsContainer=document.getElementById("resultsContainer");

const movies=[
{name:"Avatar",image:"https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"},
{name:"Deadpool",image:"https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"},
{name:"Oppenheimer",image:"https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"},
{name:"Inception",image:"https://image.tmdb.org/t/p/w500/8YFL5QQVPy3AgrEQwQXK0a2JrVx.jpg"},
{name:"Harry Potter",image:"https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg"},
{name:"The Godfather",image:"https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"},
{name:"Avengers",image:"https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"},
{name:"Wonder Woman",image:"https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"},
{name:"Joker",image:"https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"},
{name:"Black Panther",image:"https://image.tmdb.org/t/p/w500/5KCVkau1HEl7ZzfPsKAPM0sMiKc.jpg"},
{name:"Wednesday",image:"https://image.tmdb.org/t/p/w500/5qQvY6n7M8H9J0K1L2P3Q4R5.jpg"},
{name:"Money Heist",image:"https://image.tmdb.org/t/p/w500/7a7b2n3m4c5d6e7f8g9h0.jpg"}
];

function searchMovies(){
    const query=searchInput.value.toLowerCase().trim();
    if(!query){searchResults.style.display="none";return}
    const filtered=movies.filter(m=>m.name.toLowerCase().includes(query));
    resultsContainer.innerHTML="";
    if(!filtered.length){resultsContainer.innerHTML=`<p class="no-results">No movies found for "${query}"</p>`}
    else filtered.forEach(movie=>{
        const card=document.createElement("div");
        card.className="movie-card";
        card.innerHTML=`<img src="${movie.image}" alt="${movie.name}"><div class="movie-overlay"><h3>${movie.name}</h3><button onclick="playMovie('${movie.name}')">▶</button></div>`;
        resultsContainer.appendChild(card);
    });
    searchResults.style.display="block";
    searchResults.scrollIntoView({behavior:"smooth"});
}
searchBtn.addEventListener("click",searchMovies);
searchInput.addEventListener("keypress",e=>{if(e.key==="Enter")searchMovies()});
searchInput.addEventListener("input",()=>{if(!searchInput.value.trim())searchResults.style.display="none"});

function showAll(category){
    const messages={popular:"Showing all popular movies.",trending:"Showing all trending movies.",originals:"Showing all Netflix Originals."};
    alert(messages[category]||"Showing all movies.");
}

document.querySelector(".profile").addEventListener("click",()=>alert("Profile menu opened."));
document.querySelector(".notification").addEventListener("click",()=>alert("You have no new notifications."));
