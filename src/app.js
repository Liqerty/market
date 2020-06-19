const SITE_NAME = "Цветочная ферма \"Мария\""

document.title = SITE_NAME
document.getElementById("tit").innerHTML = SITE_NAME

function add_row(id) {
    document.getElementById("main").innerHTML += "<div class='row' id='"+id+"'></div>";
}
function add_elem(id, elem) {
    document.getElementById(id).innerHTML += elem;
}
function get_flower(img_src, name, info, price) {
    return "<div class=\"elem\">\
    <img class=\"flower-img\" src=\""+img_src+"\">\
    <span class=\"text\">\
        <h3>"+name+"</h3>\
        <p>"+info+"</p>\
        <p class=\"price\">Цена: "+price+"</p>\
    </span>\
</div>"
}

let test = get_flower(
    "assets/test.png",
    "Flowers",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum repellendus necessitatibus quod quis provident fugiat, aut soluta quas voluptate cum iste hic commodi sit qui aspernatur modi. Ab, recusandae temporibus.",
    "250руб"
)
let test2 = get_flower(
    "assets/test.png",
    "Flowers",
    "test",
    "250руб"
)
for (let i = 0; i < 2; i++) {
    add_row(i);
    add_elem(i, test);
    add_elem(i, test);
}
add_row(3);
add_elem(3, test2);
add_elem(3, test2);
add_elem(3, test2);
add_row(4);
add_elem(4, test2);
