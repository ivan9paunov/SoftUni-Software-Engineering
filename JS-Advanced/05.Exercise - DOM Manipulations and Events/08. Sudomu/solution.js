function solve() {
    //Abbreviation dictionary: 
    // [northwest], [ north ], [northeast];
    // [   west  ], [central], [  east   ];
    // [southwest], [ south ], [southeast];
    const [nwRef, nRef, neRef, wRef, cRef, eRef, swRef, sRef, seRef] = Array.from(document.querySelectorAll('input'));
    
    const tableRef = document.querySelector('table');
    const pElement = document.querySelector('p');
    const [checkBtn, clearBtn] = Array.from(document.querySelectorAll('button'));
    checkBtn.addEventListener('click', quichCkech);
    clearBtn.addEventListener('click', onClear);

    function quichCkech() {
        const nw = nwRef.value;
        const n = nRef.value;
        const ne = neRef.value;
        const w = wRef.value;
        const c = cRef.value;
        const e = eRef.value;
        const sw = swRef.value;
        const s = sRef.value;
        const se = seRef.value;

        if ((nw < 1 || nw > 3) ||
            (n < 1 || n > 3) ||
            (ne < 1 || ne > 3) ||
            (w < 1 || w > 3) ||
            (c < 1 || c > 3) ||
            (e < 1 || e > 3) ||
            (sw < 1 || sw > 3) ||
            (s < 1 || s > 3) ||
            (se < 1 || se > 3) ||
            (!nw || !n || !ne || !w || !c || !e || !sw || !s || !se)) {
                tableRef.style.border = '2px solid red';
                pElement.textContent = 'NOP! You are not done yet...';
                pElement.style.color = 'red';
                return;
            }

        if ((nw != n && nw != ne && n != ne) &&
            (w != c && w != e && c != e) &&
            (sw != s && sw != se && s != se) &&
            (nw != w && nw != sw && w != sw) &&
            (n != c && n != s && c != s) &&
            (ne != e && ne != se && e != se)
        ) {
            tableRef.style.border = '2px solid green';
            pElement.textContent = 'You solve it! Congratulations!';
            pElement.style.color = 'green';
        } else {
            tableRef.style.border = '2px solid red';
            pElement.textContent = 'NOP! You are not done yet...';
            pElement.style.color = 'red';
        }
    }

    function onClear() {
        nwRef.value = '';
        nRef.value = '';
        neRef.value = '';
        wRef.value = '';
        cRef.value = '';
        eRef.value = '';
        swRef.value = '';
        sRef.value = '';
        seRef.value = '';

        tableRef.style.border = 'none';
        pElement.textContent = '';
    }
}