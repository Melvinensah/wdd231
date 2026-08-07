export async function initWeather() {
    const apiKey = "";
    const lat = "43.8231";
    const lon = "-111.7924";
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    const tempSpan = document.querySelector("#current-temp");
    const descSpan = document.querySelector("#weather-desc");
    const weatherIcon = document.querySelector("#weather-icon");

    try {
        const response = await fetch(weatherURL);
        if (response.ok) {
            const data = await response.json();
            const temp = Math.round(data.main.temp);
            const desc = data.weather[0].description;
            const iconCode = data.weather[0].icon;

            if (tempSpan) tempSpan.innerHTML = `${temp}&deg;C`;
            if (descSpan) descSpan.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
            if (weatherIcon) {
                weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
                weatherIcon.alt = desc;
            }
        } else {
            throw new Error("Weather data unavailable");
        }
    } catch (error) {
        console.error("Error fetching weather:", error);
        if (descSpan) descSpan.textContent = "Weather data unavailable";
    }
}