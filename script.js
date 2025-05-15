// Navbar interaction
const menuItems = ["shops", "reviews", "blogs", "contacts"];
menuItems.forEach(id => {
    document.getElementById(id).addEventListener("click", () => {
        menuItems.forEach(item => {
            document.getElementById(item).style.color = item === id ? "rgb(0, 196, 196)" : "white";
        });
    });
});

// Toggle navbar menu
document.querySelector(".icon").addEventListener("click", () => {
    const ul = document.querySelector("ul");
    ul.classList.toggle("showData");
    document.getElementById("bar").className = ul.classList.contains("showData") ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});

// Item page interaction
const card = document.querySelectorAll(".crd");
const pageImg = document.querySelector("#itemImg");
const itemPage = document.querySelector(".itemPage");
const container = document.querySelector(".container");
itemPage.style.display = "none";

card.forEach(curValue => {
    curValue.addEventListener("click", () => {
        itemPage.style.display = "flex";
        container.style.display = "none";
        pageImg.src = curValue.firstElementChild.src;
    });
});

// Handle buying process
document.getElementById("buyBtn").addEventListener("click", () => {
    const buyPage = document.querySelector(".buyPage");
    const contentPage = document.querySelector(".content");
    buyPage.style.display = "block";
    buyPage.style.padding = "44px";

    contentPage.innerHTML = `
        <h3>Enter Detail :</h3>
        <input type="text" placeholder="Enter Your Name" id="name"> <br>
        <input type="text" placeholder="Enter Your Address" id="address"> <br>
        <input type="text" placeholder="Enter Your Mobile Number" id="num"> <br>
        <h3>Payment Option :</h3>
        <select>
            <option>Google Pay</option>
            <option>Phone Pay</option>
            <option>Bharat Pay</option>
            <option>Cash on Delivery</option>
        </select><br>
        <button id="submitBtn">Submit</button>
    `;

    document.getElementById("submitBtn").addEventListener("click", () => {
        const name = document.getElementById("name");
        const address = document.getElementById("address");
        const num = document.getElementById("num");

        if (!name.value || !address.value || !num.value) {
            alert("Please Enter Detail");
        } else {
            alert("Your Response Recorded");
            buyPage.style.display = "none";
        }
    });

    document.querySelector(".cross").addEventListener("click", () => {
        buyPage.style.display = "none";
    });
});

// Connect form
function connect() {
    const name = document.getElementById("name");
    const num = document.getElementById("number");

    if (!name.value || !num.value) {
        alert("Fill Detail");
    } else {
        alert("Thanks For Connecting");
    }
}
