/**
 * Created by Administrator on 2017/4/13.
 */
function draw(id) {
    var canvas = document.getElementById(id);
    if (canvas == null)
        return false;
    var content = canvas.getContext('2d');
    content.fillStyle = "#EEEEEF";
    content.fillRect(0, 0, 400, 300);
    content.fillStyle = "red";
    content.strokeStyle = "blue";
    content.lineWidth = 1;
    content.fillRect(50,50,100,100);
}