const adjective = ["Vivid", "Innovative", "Dynamic", "Serene", "Robust", "Graceful", "Luminous", "Resolute", "Vibrant", "Efficient"];
const noun = ["Book", "Bicycle", "Lamp", "Teddy Bear", "Backpack", "Soccer Ball", "Puzzle", "Water Bottle", "Spoon", "Picture Frame"];
const color = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Black", "White", "Gray"];

function generateRandomItem() {
    const randomIndex1 = Math.floor(Math.random() * 10);
    const randomIndex2 = Math.floor(Math.random() * 10);
    const randomIndex3 = Math.floor(Math.random() * 10);
    return `You have created a... \n${adjective[randomIndex1]} ${color[randomIndex2]} ${noun[randomIndex3]}!`
}

document.getElementById("generateButton").addEventListener("click", function() {
    const itemPrinted = generateRandomItem();
    document.getElementById("displayVariable").innerText = itemPrinted; 
});