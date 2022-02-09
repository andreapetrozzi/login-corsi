$(() => {
    localStorage.clear();
    $('#entra').on('click', function () {

        let valido = true;

        
        //Valida l'inserimento dell'email.
        const schemaEmail = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const user = $('#email').val().trim();

        //Campo email
        if (user == '') {
            $('#email').next().text('Questo campo è richiesto.');
            valido = false;
        } else if (!schemaEmail.test(user)) {
            $('#email').next().text('Devi inserire un indirizzo email valido.');
            valido = false;
        } else {
            $('#email').next().text('');
        }
        $('#email').val(user);


        // Campo password
        const password = $('#password').val().trim();
        const schemaPassword = new RegExp("^(((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

        if (password.length < 6) {
            $('#password').next().text('Deve essere di almeno 6 caratteri!');
            valido = false;
        } else if (!schemaPassword.test(password)) {
            $('#password').next().text('Devi inserire una password di almeno 6 caratteri che contenga un numero');
            valido = false;
        } else {
            $('#password').next().text('');
        }
        $('#password').val(password);

        if (valido == false) {
            e.preventDefault();
        } else {
            progressBar();
            localStorage.setItem('user', user);
        }


        //Progress Bar
        function progressBar() {
            let barra = $('#progressBar');
            let larghezza = 1;
            let intervallo = setInterval(loading, 10);

            function loading() {
                if (larghezza > 500) {
                    clearInterval(intervallo);
                    location.href = 'corsi.html';
                } else {
                    larghezza++
                    barra.css('width', larghezza + 'px');
                }
            }
        }
    });
});