function solve() {
    const infoBoxRef = document.querySelector('.info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    const busStop = {
        currentStop: '',
        nextStop: 'depot'
    };

    const url = `http://localhost:3030/jsonstore/bus/schedule/`;

    async function depart() {
        try {
            const response = await fetch(url + busStop.nextStop);
            const data = await response.json();

            infoBoxRef.textContent = `Next stop ${data.name}`;

            busStop.currentStop = data.name;
            busStop.nextStop = data.next;

            departBtn.disabled = true;
            arriveBtn.disabled = false;
        } catch (error) {
            infoBoxRef.textContent = 'Error';

            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
    }

    function arrive() {
        infoBoxRef.textContent = `Arriving at ${busStop.currentStop}`;

        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();