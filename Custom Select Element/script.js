const select = {};

select.init = (id) => {
    document.querySelector('#' + id + ' > .select-btn').addEventListener('click', () => { select.showOptions(id); });
    document.querySelectorAll('#' + id + ' > .select-options > .select-option').forEach(elem => {
        elem.addEventListener('click', () => { select.setValue(id, elem.getAttribute('data-val')) });
    });
};

select.showOptions = (id) => {
    document.querySelector('#' + id + ' > .select-options').style.display = 'block';
};

select.getValue = (id) => {
    let val = document.querySelector('#' + id + ' > .select-val').innerText;
    if (val == '')
        return undefined;
    return val;
};

select.setValue = (id, value) => {
    let optionElement = document.querySelector(`#${id} > .select-options > .select-option[data-val="${value}"]`);
    document.querySelector('#' + id + ' > .select-val').innerText = value;
    document.querySelector('#' + id + ' > .select-btn').innerText = optionElement.innerText;
    document.querySelector('#' + id + ' > .select-options').style.display = 'none';
    document.querySelectorAll(`#${id} > .select-options > .select-option.active`).forEach(elem => elem.classList.remove('active'));
    optionElement.classList.add('active');
};

document.querySelectorAll('.select').forEach(elem => {
    select.init(elem.id);
});

/****************************/

function btnGetValue() {
    document.getElementById('value').innerText = select.getValue('demo');
}
