const edpiE = document.getElementById('edpi')
const tableE = document.getElementById('table-content')

const sensitivities = [
    [1/32, '1/32', '1/11'],
    [1/16, '1/16', '2/11'],
    [1/8, '1/8'],
    [2/8, '2/8', '3/11'],
    [3/8, '3/8'],
    [4/8, '4/8', '4/11'],
    [5/8, '5/8'],
    [6/8, '6/8', '5/11'],
    [7/8, '7/8'],
    [1, '1', '6/11'],
    [1.25, '1.25'],
    [1.5, '1.5', '7/11'],
    [1.75, '1.75'],
    [2, '2', '8/11'],
    [2.25, '2.25'],
    [2.5, '2.5', '9/11'],
    [2.75, '2.75'],
    [3, '3', '10/11'],
    [3.25, '3.25'],
    [3.5, '3.5', '11/11']
]

function calculateDPI() {
    const edpi = parseInt(edpiE.value)

    if (isNaN(edpi) || edpi < 1) {
        tableE.innerHTML = ''
        return
    }

    let innerHTML = ''
    for (const [index, value] of sensitivities.entries()) {
        const dpi = edpi / value[0]
        innerHTML += `
            <tr>
                <td>
                    ${Number.isInteger(dpi) ? dpi : '* ' + Math.round(dpi)}
                </td>
                <td>
                    ${value[1]}
                </td>
                <td>
                    ${index + 1} / 20
                </td>
                <td>
                    ${value[2] === undefined ? '-' : value[2]}
                </td>
            <tr>
        `
    }

    tableE.innerHTML = innerHTML
}

edpiE.addEventListener('input', () => {
    calculateDPI()
})

window.addEventListener('load', () => {
    calculateDPI()
})