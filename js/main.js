    let showRow = document.querySelectorAll('.show-row');
    let reportRow = document.querySelectorAll('.report-row');

    for (let s=0; s<showRow.length; s++) {
        showRow[s].addEventListener('mouseover', (e) => {
            showRow[s].style.backgroundColor='#da0000';
            showRow[s].style.opacity = '1';
            showRow[s].style.cursor = 'pointer'
        })
        showRow[s].addEventListener('mouseout', (e) => {
            showRow[s].style.backgroundColor='';
            showRow[s].style.opacity = '0.65';
            showRow[s].style.cursor = 'default'
        })
    }

    for (let r=0; r<reportRow.length; r++) {
        reportRow[r].addEventListener('mouseover', (e) => {
            reportRow[r].style.backgroundColor='#13ce04';
            reportRow[r].style.opacity = '1';
            reportRow[r].style.cursor = 'pointer'
        })
        reportRow[r].addEventListener('mouseout', (e) => {
            reportRow[r].style.backgroundColor='';
            reportRow[r].style.opacity = '0.65';
            reportRow[r].style.cursor = 'default'
        })
    }