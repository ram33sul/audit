

function dropdownClick(id) {
    const element = document.getElementById(id);
    if(element.style.display === 'block'){
        element.style.display = 'none'
    } else {
        element.style.display = 'block'
    }
}

function dropdownSelected(field, value, input){
    document.getElementById(field).style.display = 'none';
    document.getElementById(input).value = value;
}

const hintClick = (() => {
    let isDisplayed = 0;
    const hintModified = document.getElementById('hintModified');
    return () => {
        if(isDisplayed){
            document.getElementById('hintsContainer').style.display = 'none';
            hintModified.innerHTML = '!';
            hintModified.style.color = hintModified.style.borderColor = 'orange';
            isDisplayed = 0;
        } else {
            document.getElementById('hintsContainer').style.display = 'block';
            hintModified.innerHTML = 'X';
            hintModified.style.color = hintModified.style.borderColor = 'red';
            isDisplayed = 1;
        }
    }
})();

function dropdownInputFocus(id) {
    document.getElementById(id).style.display = 'none'
}

function handleSubmit(event) {
    event.preventDefault();
    const values = getInputValue([
        'typeOfAudit',
        'division',
        'department',
        'area',
        'auditReference',
        'auditor',
        'auditee',
        'auditObjectives',
        'previousTotal',
        'previousClosed',
        'previousPending',
        'previousObservations',
        'presentTotal',
        'presentObservations',
        'auditFindings'
    ]);
    document.getElementById('loader').style.display = 'flex';
    fetch('/report',{
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        document.getElementById('report-form').reset();
        document.getElementById('loader').style.display = 'none';
        return response.blob()
    }).then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'report.pdf';
        a.click();
    }).catch(error => {
        console.log(error);
    }).finally(() => {
        document.getElementById('loader').style.display = 'none';
    })
}

function getInputValue(fields){
    const inputValues = {}
    for(let field of fields){
        inputValues[field] = document.getElementById(field).value;
    }
    return inputValues;
}

function resetClick(){
    resetInputValue([
        'typeOfAudit',
        'division',
        'department',
        'area',
        'auditReference',
        'auditor',
        'auditee',
        'auditObjectives',
        'previousTotal',
        'previousClosed',
        'previousPending',
        'previousObservations',
        'presentTotal',
        'presentObservations',
        'auditFindings'
    ])
}
function resetInputValue(fields){
    for(let field of fields){
        document.getElementById(field).value = '';
    }
}

function handleCancel(){
    resetClick();
}