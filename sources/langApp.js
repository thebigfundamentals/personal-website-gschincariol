const lang = navigator.language;

const checkStorage = () => {
    if (sessionStorage.getItem('language')) {
        return
    } else {
        if (lang.includes('pt')) {
            sessionStorage.setItem('language', 'pt');
        } else {
            sessionStorage.setItem('language', 'other')
            location.href = '/en'
        }
    }

};

checkStorage();

