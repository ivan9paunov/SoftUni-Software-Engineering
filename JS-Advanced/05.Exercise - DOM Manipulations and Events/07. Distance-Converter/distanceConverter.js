function attachEventsListeners() {
    //input refferences:
    const inputDistanceRef = document.getElementById('inputDistance');
    const outputDistanceRef = document.getElementById('outputDistance');
    const inputSelectionRef = document.getElementById('inputUnits');
    const outputSelectionRef = document.getElementById('outputUnits');
    const convertBtn = document.getElementById('convert');

    const convertToMeter = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    convertBtn.addEventListener('click', convert);

    function convert() {
        const inputNum = Number(inputDistanceRef.value);
        const inputUnit = inputSelectionRef.value;
        const outputUnit = outputSelectionRef.value;

        const inputInMeters = inputNum * convertToMeter[inputUnit];
        const outputNum = inputInMeters / convertToMeter[outputUnit];

        outputDistanceRef.value = outputNum;
    }
}