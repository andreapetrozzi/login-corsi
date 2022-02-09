//Uso delle classi
class Corsi {
    nome;
    argomento;
    durata;

    constructor(_nome, _materia1,_materia2,_materia3,_materia4,_materia5,_durata){
        this.nome = _nome;
        this.materia1 = _materia1;
        this.materia2 = _materia2;
        this.materia3 = _materia3;
        this.materia4 = _materia4;
        this.materia5 = _materia5;
        this.durata = _durata;
    }

    descrizioneCorso(){
    return `<li>${this.materia1}</li><br>
    <li>${this.materia2}</li><br>
    <li>${this.materia3}</li><br>
    <li>${this.materia4}</li><br>
    <li>${this.materia5}</li><br>`;
    }
}

$(() => {
    let user = localStorage.getItem('user');
    $('#logged').html('Benvenuto ' + user + '!');

    $('#logout').on('click',function(){
        localStorage.clear();
        location.href = 'login.html';
    });

    var corso1 = new Corsi (
        'Pittura',
        'Disegno',
        'Illustrazione',
        'Acquerello',
        'Chiaroscuro',
        'Tecniche miste',
        '20 ore');
    
    var corso2 = new Corsi (
        'Fumetto',
        'Storia del fumetto',
        'Illustrazione',
        'Sceneggiatura',
        'Chine',
        'Tecniche digitali', 
        '45 ore');

    var corso3 = new Corsi (
        'Scultura',
        'Anatomia',
        'Studio dei materiali',
        'Modellazione',
        'Stile',
        'Sintesi', 
        '50 ore');


    $('#corso1').html(corso1.nome);
    $('#corso2').html(corso2.nome);
    $('#corso3').html(corso3.nome);

    $('#descrizione1').html(corso1.descrizioneCorso());
    $('#descrizione2').html(corso2.descrizioneCorso());
    $('#descrizione3').html(corso3.descrizioneCorso());

    $('#durata1').html(corso1.durata);
    $('#durata2').html(corso2.durata);
    $('#durata3').html(corso3.durata);

    
    let materia1 = ['Pittura', 'Disegno', 'Acquerello', 'Chiaroscuro', 'Tecniche miste'];
    let materia2 = ['','Storia del fumetto', 'Illustrazione', 'Sceneggiatura', 'Chine', 'Tecniche digitali'];
    let materia3 = ['','Anatomia', 'Studio dei materiali', 'Modellazione', 'Sintesi', 'Stile'];

    for (i = 0; i < materia1.length; i++) {
        $('#materia1').append(`<option value = "${i}">${materia1[i]}</option>`);
    }
    for (i = 0; i < materia2.length; i++) {
        $('#materia2').append(`<option value = "${i}">${materia2[i]}</option>`);
    }
    for (i = 0; i < materia3.length; i++) {
        $('#materia3').append(`<option value = "${i}">${materia3[i]}</option>`);
    }

    $('#crea').on('click', function () {
        let corso = $('#nomeCorso').val();
        let durata = $('#durataCorso').val();
        let mat1 = $('#materia1').val();
        let mat2 = $('#materia2').val();
        let mat3 = $('#materia3').val();
        let user = localStorage.getItem('user');

        if (corso === '') {
            $('#error').text('Il nome del corso è obbligatorio!');
        } else if (durata === '') {
            $('#error').text('La durata del corso è obbligatoria!');
        } else if (mat1 === '') {
            $('#error').text('Devi inserire almeno una materia!');
        } else {
            $('#corsoCreato').append(`Corso creato da ${user}: Il nome del corso è ${corso} e dura ${durata}, le materie scelte sono ${materia1[mat1]}, ${materia2[mat2]}, ${materia3[mat3]}.<br>`);
            $('#error').text('');
            $('#nomeCorso').val('');
            $('#durataCorso').val('');
            $('#materia1').val('');
            $('#materia2').val('');
            $('#materia3').val('');
        }
    });
});










