const adjective = ["Vivid", "Innovative", "Dynamic", "Serene", "Robust", "Graceful", "Luminous", "Resolute", "Vibrant", "Efficient"];
const noun = ["Book", "Bicycle", "Lamp", "Teddy Bear", "Backpack", "Soccer Ball", "Puzzle", "Water Bottle", "Spoon", "Picture Frame"];
const color = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Black", "White", "Gray"];

function generateRandomItem() {
    const randomIndex = Math.floor(Math.random() * 10);
    return `You have created a... \n${adjective[randomIndex]} ${color[randomIndex]} ${noun[randomIndex]}!`
}

document.getElementById("generateButton").addEventListener("click", function() {
    const itemPrinted = generateRandomItem();
    document.getElementById("displayVariable").innerText = itemPrinted; 
});