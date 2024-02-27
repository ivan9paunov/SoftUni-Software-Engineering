function attachEvents() {
    const locationNameRef = document.getElementById('location');
    const submitBtn = document.getElementById('submit');
    const forecastBlock = document.getElementById('forecast');
    const divCurrent = document.getElementById('current');
    const divUpcoming = document.getElementById('upcoming');

    submitBtn.addEventListener('click', showForecast);

    const urlLocations = `http://localhost:3030/jsonstore/forecaster/locations`;
    const urlToday = `http://localhost:3030/jsonstore/forecaster/today/`;
    const urlUpcoming = `http://localhost:3030/jsonstore/forecaster/upcoming/`;
    
    async function showForecast() {
        try {
            if (divCurrent.children[1]) {
                divCurrent.children[1].remove();
                divUpcoming.children[1].remove();
            }
    
            const inputLocation = locationNameRef.value;
            const locationResponse = await fetch(urlLocations);
            const locationData = await locationResponse.json();
            const neededLocation = locationData.find(location => location.name == inputLocation);
            const locationCode = neededLocation.code;
    
            const todayResponse = await fetch(urlToday + locationCode);
            const todayData = await todayResponse.json();
            const upcomingResponse = await fetch(urlUpcoming + locationCode);
            const upcomingData = await upcomingResponse.json();
            
            forecastBlock.style.display = 'block';
            
            const currentWeatherDiv = createTodayForecast(todayData);
            divCurrent.appendChild(currentWeatherDiv);
    
            const upcomingWeatherDiv = createUpcomingForecast(upcomingData);
            divUpcoming.appendChild(upcomingWeatherDiv);
            
        } catch (error) {
            forecastBlock.textContent = 'Error';
        }
    }

    function createTodayForecast(data) {
        const divEl = createEl('div', ['forecasts']);
        divEl.appendChild(createEl('span', ['condition', 'symbol'], weatherSymbols[data.forecast.condition]));

        const spanWrapper = createEl('span', ['condition']);
        spanWrapper.appendChild(createEl('span', ['forecast-data'], data.name));
        spanWrapper.appendChild(createEl('span', ['forecast-data'], `${data.forecast.low}${weatherSymbols.Degrees}/${data.forecast.high}${weatherSymbols.Degrees}`));
        spanWrapper.appendChild(createEl('span', ['forecast-data'], data.forecast.condition));

        divEl.appendChild(spanWrapper);
        return divEl;
    }

    function createUpcomingForecast(data) {
        const divEl = createEl('div', ['forecast-info']);

        const dayOne = dayOfUpcomings(data.forecast[0]);
        const dayTwo = dayOfUpcomings(data.forecast[1]);
        const dayThree = dayOfUpcomings(data.forecast[2]);

        divEl.appendChild(dayOne);
        divEl.appendChild(dayTwo);
        divEl.appendChild(dayThree);

        return divEl;
    }

    function dayOfUpcomings(data) {
        const spanWrapper = createEl('span', ['upcoming']);
        spanWrapper.appendChild(createEl('span', ['symbol'], weatherSymbols[data.condition]));
        spanWrapper.appendChild(createEl('span', ['forecast-data'], `${data.low}${weatherSymbols.Degrees}/${data.high}${weatherSymbols.Degrees}`));
        spanWrapper.appendChild(createEl('span', ['forecast-data'], data.condition));

        return spanWrapper;
    }

    const weatherSymbols = {
        Sunny: '\u2600',
        'Partly sunny': '\u26C5',
        Overcast: '\u2601',
        Rain: '\u2614',
        Degrees: '\xB0'
    };

    function createEl(type, className, content) {
        const el = document.createElement(type);

        if (className) {
            for (let cls of className) {
                el.classList.add(cls);
            }
        }

        if (content) {
            el.textContent = content;
        }

        return el;
    }
}

attachEvents();