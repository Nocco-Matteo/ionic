import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SezionePreventivo } from '../models/preventivo.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreventivoService {

  constructor(private readonly httpClient: HttpClient) { }

  getPreventivi(): Observable<any> {
    const url = "http://149.62.187.197:3000/api/getSezioniPreventivo"

    // return of(mockPreventivi)
    return this.httpClient.get(url)
  }
}

const mockPreventivi: SezionePreventivo[] = [
  {
    "id": 1,
    "voce": "L’app è da creare da zero o ne esiste una da modificare?",
    "risposte": ["Da creare da zero", "Da modificare"]
  },
  {
    "id": 2,
    "voce": "L’app è per un uso interno e/o rivolta a clienti/utenti esterni?",
    "risposte": ["Uso interno", "Rivolta a clienti/utenti esterni", "Entrambi"]
  },
  {
    "id": 3,
    "voce": "L’app deve gestire utenti con livelli di accesso e permessi diversi, quindi con un pannello di amministrazione?",
    "risposte": ["Sì", "No"]
  },
  {
    "id": 4,
    "voce": "L’app deve funzionare offline o ha bisogno di una connessione internet costante?",
    "risposte": ["Deve funzionare offline", "Ha bisogno di una connessione internet costante", "Entrambi"]
  },
  {
    "id": 5,
    "voce": "L’app richiede un sistema di login (email e/o social network)?",
    "risposte": ["Sì, con email", "Sì, con social network", "No"]
  },
  {
    "id": 6,
    "voce": "L’app deve essere multi-lingua?",
    "risposte": ["Sì", "No"]
  },
  {
    "id": 7,
    "voce": "L’app deve inviare notifiche agli utenti?",
    "risposte": ["Sì", "No"]
  },
  {
    "id": 8,
    "voce": "L’app deve leggere codici a barre?",
    "risposte": ["Sì", "No"]
  },
  {
    "id": 9,
    "voce": "L’app deve rilevare la posizione dell’utente tramite gps?",
    "risposte": ["Sì", "No"]
  },
  {
    "id": 10,
    "voce": "L’app deve prevedere l’acquisto di servizi (gateway di pagamento e fatturazione elettroniche) e/o l’acquisto di prodotti (integrazione corriere espresso)",
    "risposte": ["Sì, acquisto di servizi", "Sì, acquisto di prodotti", "Entrambi", "No"]
  },
  {
    "id": 11,
    "voce": "L’app su quale piattaforma deve girare (android, ios e/o sito web)?",
    "risposte": ["Android", "iOS", "Sito web", "Tutte le piattaforme"]
  },
  {
    "id": 12,
    "voce": "L’app ha bisogno di integrazioni con altri sistemi o servizi (integrazione con database esistente, un sistema CRM, ecc. )?",
    "risposte": ["Sì, con database esistente", "Sì, con un sistema CRM", "No"]
  },
  {
    "id": 13,
    "voce": "Ci sono vincoli di tempistica?",
    "risposte": ["Sì, c'è urgenza", "No, non c'è fretta"]
  },
  {
    "id": 14,
    "voce": "Quali sono le tue aspettative per il supporto e la manutenzione dell’app dopo il lancio? Ad esempio, prevedi di avere bisogno di aggiornamenti regolari dell’app? Ci sono funzionalità che potresti voler aggiungere in futuro? Come vorresti gestire eventuali problemi o bug che potrebbero sorgere?",
    "risposte": ["Aggiornamenti regolari", "Aggiunta di nuove funzionalità in futuro",
      "Gestione dei problemi o bug", "Tutte le opzioni"]
  },
  {
    "id": 15,
    "voce": "Descrivi gli obiettivi principali dell’applicazione",
    "risposte": ["Aumentare l'efficienza operativa",
      "Migliorare l'esperienza dell'utente",
      "Espandere la base di clienti"]
  }
]
