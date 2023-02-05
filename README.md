# login-corsi

### DESCRIPTION:
Creation of a page with Access Login and loading bar.

### Structure:
1. Login page
2. Page with a list of courses
3. Page with a form to create a course

### Functionality 

### Screen Login page
![pic1](https://user-images.githubusercontent.com/98649610/162701261-5869e522-43db-4167-8a5d-29cd32813eeb.JPG)

1) LOGIN: Form di login con user e password;  
     - La user deve essere una email valida (controllo), 
     - La password deve essere almeno di 6 caratteri e contenere almeno un numero (controllo); 
     - A controlli superati, dopo il click parte una progress bar (o spin bootstrap o altra idea di elemento di attesa) che dopo 5 secondi indirizza alla pagina dell'elenco corsi. (localStorage setItem)


### Course list
![pic2](https://user-images.githubusercontent.com/98649610/162701277-c523ed10-8d49-48f4-aeaa-3a872f2e86d8.JPG)

2) ELENCO CORSI: Messaggio di benvenuto all'utente loggato (comparirà la email inserita come user). (localStorage getItem)
    - Mostra tre esempi di corso da creare utilizzando una classe (es. creare la classe corretta per illustrare il nostro corso) con il rispettivo programma didattico (5 punti al massimo).


### Personalizza corsi
![pic3](https://user-images.githubusercontent.com/98649610/162701326-29e9db06-7e2d-49b4-87c6-8142f7a607be.JPG)

3) CREAZIONE CORSO: Pagina con un form con queste caratteristiche:
    a. INTESTAZIONE FORM: una dicitura (es. 'corso creato da'...) con il nome dell'utente (localStorage getItem)
    b. input in cui inserire il nome del corso (obbligatorio)
    c. input dove inserire la durata del corso (obbligatorio)
    d. TRE combo con un elenco di materie, da cui scegliere le tre materie che saranno oggetto del corso, ALMENO UNA OBBLIGATORIA (controllo) (facoltativo: controllo su scelte diverse tra i tre combo)
    e. button di convalida del corso creato
    
Al superamento dei controlli, dopo il click al di sotto del form compare il corso appena creato

PULSANTE LOGOUT: reindirizza alla pagina di login cancellando la user memorizzata (localStorage clear)









