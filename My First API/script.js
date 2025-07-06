const url = "https://catfact.ninja/fact";

async function getFact() {
    try {
        const res = await fetch(url);
        const data = await res.json();
        document.querySelector("h1").innerText = data.fact;
    } catch (err) {
        console.log("Error occurred:", err);
    }
}

document.querySelector(".click").addEventListener("click", getFact);

// Load one at start
getFact();
