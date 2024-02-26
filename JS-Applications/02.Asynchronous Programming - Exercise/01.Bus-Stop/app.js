async function getInfo() {
    const stopIdRef = document.getElementById('stopId');
    const busId = stopIdRef.value;
    const stopNameRef = document.getElementById('stopName');
    const busesRef = document.getElementById('buses');

    stopNameRef.textContent = '';
    busesRef.textContent = '';

    const url = `http://localhost:3030/jsonstore/bus/businfo/${busId}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        stopNameRef.textContent = data.name;
        appendBuses(Object.entries(data.buses));
        stopIdRef.value = '';
    } catch (error) {
        stopNameRef.textContent = 'Error';
    }

    function appendBuses(data) {
        for ([bus, time] of data) {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${bus} arrives in ${time} minutes`;
            busesRef.appendChild(liElement);
        }
    }
}