const form_select = document.querySelector('#select-items')
const warn = document.querySelector('#warn')
const div = document.querySelector('#itemType-container')

disappear = () => {
    document.querySelectorAll('.disappear').forEach(tag => {
        tag.style.display = 'none'
    })
}

document.querySelector('#order-item').onclick = () => {
    if (form_select.value === 'default') {
        warn.style.display = 'block'
        disappear()
    } else {
        warn.style.display = 'none'
        const result = document.createElement('div')
        result.innerHTML = form_select.options[form_select.selectedIndex].text
        result.className += 'card center item-display'
        form_select.style.display = 'none'
        document.querySelector('#order-item').style.display = 'none'
        document.querySelector('#item-order-title').innerHTML = 'Now Ordering...'
        div.append(result)
        disappear()
    }

    if (form_select.value === 'Pizza') {
        document.querySelector('.pizza-options').style.display = 'block'
    } else if (form_select.value === 'Sub') {
        document.querySelector('.sub-options').style.display = 'block'
    } else if (form_select.value === 'Pasta') {
        document.querySelector('.pasta-options').style.display = 'block'
    } else if (form_select.value === 'Salad') {
        document.querySelector('.salad-options').style.display = 'block'
    } else if (form_select.value === 'DinnerPlatter') {
        document.querySelector('.DP-options').style.display = 'block'
    } else if (form_select.value === 'Cheese') {
        document.querySelector('.cheese-options').style.display = 'block'
    } else if (form_select.value === 'Special') {
        document.querySelector('.special-options').style.display = 'block'
    }
}