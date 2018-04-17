let border : any = document.getElementById("border")
let context = border.getContext("2d")

document.addEventListener("keydown", key)
let snakeInterval = setInterval(snake, 1000/5)
alert("Get ready to play !")

let snake_x = 0
let snake_y = 0
let trail = []
let tail = 1
let distance = 5
let max = 30
let food_x = 10
let food_y = 10
let player_x = 20
let player_y = 20
let code = 0;

function over()
{
    console.log("Game over");
    clearInterval(snakeInterval);
}

function snake()
{
    player_x = player_x + snake_x
    player_y = player_y + snake_y
    console.log(player_x, player_y, max)
    if (player_x < 0 || player_y < 0 || player_x >= max || player_y >= max)
        over();
    context.fillStyle = "black"
    context.fillRect(0, 0, 500, 500)
    context.fillStyle = "lime"
    for (let i = 0;i < trail.length;i++)
    {
        context.fillRect(trail[i].x * (distance * 2), trail[i].y * distance, distance * 2, distance)
        if (trail.length > 1 && trail[i].x === player_x && trail[i].y === player_y)
           over();
    }
    trail.push({x:player_x, y:player_y})
    while (trail.length > tail)
        trail.shift();
    food()
}

function food()
{
    if (food_x === player_x && food_y === player_y)
    {
        tail++
        food_x = Math.floor(Math.random() * max)
        food_y = Math.floor(Math.random() * max)
    }
    context.fillStyle = "red"
    context.fillRect(food_x * (distance * 2), food_y * distance, distance * 2, distance)
}

function key(event)
{
   switch(event.keyCode)
   {
        case 37:
             if (code != 39)
             {
                 snake_x = -1
                 snake_y = 0
                 code = event.keyCode
             }
            break
        case 38:
            if (code != 40)
            {
                snake_x = 0
                snake_y = -1
                code = event.keyCode
            }
            break
        case 39:
            if (code != 37)
            {
                snake_x = 1
                snake_y = 0
                code = event.keyCode
            }
            break
        case 40:
            if (code != 38)
            {
                snake_x = 0
                snake_y = 1
                code = event.keyCode
            }
            break
    }
}
