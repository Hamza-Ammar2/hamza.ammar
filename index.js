const cont = document.querySelector(".proj-cont");

const projects = [
    createProj("Facebook", "assets/fbuser-desk.png", "https://github.com/Hamza-Ammar2/Mini-book", "https://minibook.onrender.com"),
    createProj("Chess-site", "assets/ch-matches.png", "https://github.com/Hamza-Ammar2/Chess-site", "https://chess-845m.onrender.com"),
    createProj("Camp-website", "assets/yelp--main.png", "https://github.com/Hamza-Ammar2/Camp-site", "https://hamza-ammar2.github.io/Camp-site/"),
    createProj("Connect4", "assets/connect4.png", "https://github.com/Hamza-Ammar2/Connect4", "https://hamza-ammar2.github.io/Connect4/"),
    createProj("Ecommerce-site", "assets/ecommerce.png", "https://github.com/Hamza-Ammar2/ecommerce", "https://hamza-ammar2.github.io/ecommerce/"),
    createProj("Todo-app", "assets/todo.png", "https://github.com/Hamza-Ammar2/todo", "https://hamza-ammar2.github.io/todo/")
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