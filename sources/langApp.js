const lang = navigator.language;

const checkStorage = () => {
    if (localStorage.getItem('language')) {
        return
    } else {
        if (lang.includes('pt')) {
            localStorage.setItem('language', 'pt');
        } else {
            localStorage.setItem('language', 'other')
            location.href = '/en'
        }
    }

};

checkStorage();

