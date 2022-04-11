# login-corsi

DESCRIZIONE PROGETTO 
Pagina con Login di accesso e barra di caricamento. 

Struttura:
1) Pagina di login
2) Pagina con un elenco di corsi
3) Pagina con un form per creare un corso

Funzionalità 
1) LOGIN: Form di login con user e password;  
     - La user deve essere una email valida (controllo), 
     - La password deve essere almeno di 6 caratteri e contenere almeno un numero (controllo); 
     - A controlli superati, dopo il click parte una progress bar (o spin bootstrap o altra idea di elemento di attesa) che dopo 5 secondi indirizza alla pagina dell'elenco corsi. (localStorage setItem)

2) ELENCO CORSI: Messaggio di benvenuto all'utente loggato (comparirà la email inserita come user). (localStorage getItem)
    - Mostra tre esempi di corso da creare utilizzando una classe (es. creare la classe corretta per illustrare il nostro corso) con il rispettivo programma didattico (5 punti al massimo).

3) CREAZIONE CORSO: Pagina con un form con queste caratteristiche:
    a. INTESTAZIONE FORM: una dicitura (es. 'corso creato da'...) con il nome dell'utente (localStorage getItem)
    b. input in cui inserire il nome del corso (obbligatorio)
    c. input dove inserire la durata del corso (obbligatorio)
    d. TRE combo con un elenco di materie, da cui scegliere le tre materie che saranno oggetto del corso, ALMENO UNA OBBLIGATORIA (controllo) (facoltativo: controllo su scelte diverse tra i tre combo)
    e. button di convalida del corso creato
    
Al superamento dei controlli, dopo il click al di sotto del form compare il corso appena creato

PULSANTE LOGOUT: reindirizza alla pagina di login cancellando la user memorizzata (localStorage clear)


![Cattura-](https://user-images.githubusercontent.com/98649610/162699689-abb734aa-61fc-45ab-b805-d6ad1ea662ab.JPG)

