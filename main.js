let i = 0;
const count = () => {
    const z = ++i;
    displayData(z);
    setLData(z);
};
const displayData = z => {
    document.getElementById("counter").innerText = z;
};
const getItemData = () => {
    const g = localStorage.getItem('count');
    let d;
    if (g) {
        d = g;
    }
    return d;
}
const setLData = v => {
    let vs = getItemData();
    vs = v;
    localStorage.setItem('count', vs);
};

const showDataDisplay = () => {
    const ij = getItemData();
    displayData(ij);
};

showDataDisplay();