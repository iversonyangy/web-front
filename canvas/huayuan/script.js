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
    var n = 0;
    for(var i = 0; i < 10; i++)
    {
        content.beginPath();
        content.arc(i * 25, i * 25, i * 10, 0, Math.PI * 2, true);
        content.closePath();
        content.fillStyle = 'rgba(255, 0, 0, 0.25)';
        content.fill();
    }
}