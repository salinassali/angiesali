document.addEventListener('DONContentLoaded', () => {
    const elementoscarusel = document.querySelectorAll('.carusel');
    M.Carusel.init(elementoscarusel, {
    duration: 150,
    dist:-80,
    shift: 5,
    padding:5,
    numVisible: 3,
    indicators: true,
    noWrap:true,
});
});