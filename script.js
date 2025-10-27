 const apiKey = "a66d9031de5acb1e75e759f017458475"; // ✅ ta clé API
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Mecca,SA&appid=${apiKey}&units=metric&lang=fr`;

    async function getWeather() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const name = data.name;
        const temp = Math.round(data.main.temp);
        const desc = data.weather[0].description;
        const icon = data.weather[0].icon;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;

        document.getElementById("weather").innerHTML = `
          <div class="title">${name}, Saudi Arabia</div>
          <div class="temp">${temp}°C</div>
          <div class="desc">${desc}</div>
          <div class="extra">💧 humidity : ${humidity}%</div>
          <div class="extra">💨 wind : ${wind} m/s</div>
        `;
      } catch (error) {
        document.getElementById("weather").innerHTML = `<p>Erreur de chargement ❌</p>`;
      }
    }

    getWeather();