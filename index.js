const cont = document.querySelector(".proj-cont");

const projects = [
    createProj("Facebook", "assets/fbuser-desk.png", "", ""),
    createProj("Chess-site", "assets/ch-matches.png", "", ""),
    createProj("Camp-website", "assets/yelp--main.png", "", ""),
    createProj("Connect4", "assets/connect4.png", "", ""),
    createProj("Ecommerce-site", "assets/ecommerce.png", "", ""),
    createProj("Todo-app", "assets/todo.png", "", "")
];



projects.forEach(project => {
    cont.innerHTML += `
        <div class="project">
            <img src="${project.img}">
            <h2>${project.name}</h2>
            <div>
                <a href="${project.page}">view project</a>
                <a href="${project.code}">view code</a>
            </div>
        </div>
    `;
});




function createProj(name, img, code, page) {
    return {name, img, code, page};
}