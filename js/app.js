// Enemies our player must avoid
var Enemy = function(x,y,velocity) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    this.x = x;
    this.y = y;
    this.velocity = velocity;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movsement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // Handles collisions with player
    if (player.y == Math.ceil(this.y) && player.x == Math.ceil(this.x)) {
        player.y = 5;
    }

    // Update location of enemy
    this.x += this.velocity/101.0 * dt;
    if (this.x > 4) {
        this.x = 0;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 75);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 2;
    this.y = 5;
};

Player.prototype.update = function() {
    if (this.y == 0)
        this.y = 5;
    if (this.x > 4)
        this.x = 4;
    if (this.x < 0)
        this.x = 0;
    if (this.y < 0)
        this.y = 5;
    if (this.y > 5)
        this.y = 5;
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
};

Player.prototype.handleInput = function (key) {
    if (key == 'left')
        this.x--;
    else if (key == 'up')
        this.y--;
    else if (key == 'right')
        this.x++;
    else if (key == 'down')
        this.y++;
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player();
var e1 = new Enemy(1,1,60);
var e2 = new Enemy(2,1,160);
var e3 = new Enemy(1,2,210);
var e4 = new Enemy(0,3,90);
var allEnemies = [e1,e2,e3,e4];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
