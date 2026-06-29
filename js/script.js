const burger =
document.getElementById('burger');

const navLinks =
document.getElementById('navLinks');

if(burger && navLinks){

    burger.addEventListener('click',()=>{

        navLinks.classList.toggle('active');

    });

    document
        .querySelectorAll('.nav-links a')
        .forEach(link=>{

            link.addEventListener('click',()=>{

                navLinks.classList.remove('active');

            });

        });

}
window.addEventListener('load', () => {

    const loader =
        document.getElementById('loader');

    if(loader){

        setTimeout(() => {

            loader.style.display = 'none';

        }, 1000);

    }

});
const topBtn =
document.getElementById('topBtn');

if(topBtn){

    topBtn.onclick = () => {

        window.scrollTo({
            top:0,
            behavior:'smooth'
        });

    };
const themeToggle = document.getElementById("themeToggle");

if(themeToggle){

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if(document.body.classList.contains("light")){
            themeToggle.textContent = "☀️";
        } else {
            themeToggle.textContent = "🌙";
        }

    });

}
}
const chatToggle = document.getElementById("chat-toggle");
const chatbot = document.getElementById("chatbot");
const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");

// ⚠️ Replace this later with backend for safety
const API_KEY = "YOUR_API_KEY_HERE";

if(chatToggle){

chatToggle.onclick = () => {
    chatbot.style.display =
    chatbot.style.display === "flex" ? "none" : "flex";
};

chatInput.addEventListener("keypress", async function(e){

    if(e.key === "Enter"){

        let msg = chatInput.value;

        chatBox.innerHTML += `<p><b>You:</b> ${msg}</p>`;

        chatInput.value = "";

        chatBox.innerHTML += `<p><b>Phoenix AI:</b> thinking...</p>`;

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + API_KEY
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: "You are Phoenix AI, a helpful assistant for a web development agency called Phoenix Vortex." },
                    { role: "user", content: msg }
                ]
            })
        });

        const data = await response.json();

        let reply = data.choices?.[0]?.message?.content || "Error getting response";

        chatBox.innerHTML += `<p><b>Phoenix AI:</b> ${reply}</p>`;
    }

});

}