import { defineStore } from "pinia";

export default defineStore("books", {
  state: () => ({
    books: [
      {
        id: "1",
        title: "In Search of Lost Time",
        author: "Marcel Proust",
        participants: 4,
        synopsis:
          "In Search of Lost Time follows the narrator's recollections of childhood and experiences into adulthood in the late 19th-century and early 20th-century high-society France, while reflecting on the loss of time and lack of meaning in the world.",
        url: "https://www.amazon.com/Search-Lost-Time-Marcel-Proust/dp/150778399X",
        activeUser: true,
        status: "proposed",
      },
      {
        id: "2",
        title: "Ulysses",
        author: "James Joyce",
        participants: 3,
        synopsis:
          "Ulysses chronicles the appointments and encounters of the itinerant Leopold Bloom in Dublin in the course of an ordinary day, 16 June 1904.",
        url: "https://www.amazon.com/-/es/James-Joyce/dp/1657558304/",
        activeUser: false,
        status: "proposed",
      },
      {
        id: "3",
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        participants: 3,
        synopsis:
          "The plot revolves around the adventures of a member of the lowest nobility, an hidalgo from La Mancha named Alonso Quijano, who reads so many chivalric romances that he either loses or pretends to have lost his mind in order to become a knight-errant (caballero errante) to revive chivalry and serve his nation, under the name Don Quixote de la Mancha (in modern-day Spanish, spelled Quijote).",
        url: "https://www.amazon.com/-/es/Miguel-Cervantes-Saavedra/dp/0142437239/",
        activeUser: false,
        status: "proposed",
      },
      {
        id: "4",
        title:
          "One Hundred Years of Solitude and Lorem ipsum dolor sit amet consectetur",
        author: "Gabriel Garcia Marquez",
        participants: 2,
        synopsis:
          "One Hundred Years of Solitude (Spanish: Cien años de soledad) is a 1967 novel by Colombian author Gabriel García Márquez that tells the multi-generational story of the Buendía family, whose patriarch, José Arcadio Buendía, founded the (fictitious) town of Macondo.",
        url: "https://www.amazon.com/-/es/Gabriel-Garcia-Marquez/dp/006112009X/",
        activeUser: true,
        status: "proposed",
      },
      {
        id: "9",
        title:
          "One Hundred Years of Solitude and Lorem ipsum dolor sit amet consectetur",
        author: "Gabriel Garcia Marquez",
        participants: 2,
        synopsis:
          "One Hundred Years of Solitude (Spanish: Cien años de soledad) is a 1967 novel by Colombian author Gabriel García Márquez that tells the multi-generational story of the Buendía family, whose patriarch, José Arcadio Buendía, founded the (fictitious) town of Macondo.",
        url: "https://www.amazon.com/-/es/Gabriel-Garcia-Marquez/dp/006112009X/",
        activeUser: true,
        status: "proposed",
      },
      {
        id: "5",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        participants: 7,
        synopsis:
          "The Great Gatsby, Third novel by American author F. Scott Fitzgerald, published in 1925. Set in Jazz Age New York, it tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.",
        url: "https://www.amazon.com/-/es/F-Scott-Fitzgerald/dp/B09X6JCFF5/",
        activeUser: true,
        status: "active",
      },
      {
        id: "6",
        title: "Moby Dick",
        author: "Herman Melville and Lorem ipsum dolor sit amet consectetur",
        participants: 6,
        synopsis:
          "Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville. The book is the sailor Ishmael's narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge against Moby Dick, the giant white sperm whale that on the ship's previous voyage bit off Ahab's leg at the knee.",
        url: "https://www.amazon.com/-/es/Herman-Melville/dp/B085HMVL3L/",
        activeUser: false,
        status: "active",
      },
      {
        id: "7",
        title: "War and Peace",
        author: "Leo Tolstoy",
        participants: 5,
        synopsis:
          "War and Peace broadly focuses on Napoleon's invasion of Russia in 1812 and follows three of the most well-known characters in literature: Pierre Bezukhov, the illegitimate son of a count who is fighting for his inheritance and yearning for spiritual fulfillment; Prince Andrei Bolkonsky, who leaves his family behind to fight in the war against Napoleon; and Natasha Rostov, the beautiful young daughter of a nobleman who intrigues both men.",
        url: "https://www.amazon.com/-/es/Leo-Tolstoy/dp/1853260622/",
        activeUser: true,
        status: "active",
      },
      {
        id: "8",
        title: "Hamlet",
        author: "William Shakespeare",
        participants: 5,
        synopsis:
          "The Tragedy of Hamlet, Prince of Denmark, often shortened to Hamlet, is a tragedy written by William Shakespeare sometime between 1599 and 1601. It is Shakespeare's longest play, with 29,551 words. Set in Denmark, the play depicts Prince Hamlet and his revenge against his uncle, Claudius, who has murdered Hamlet's father in order to seize his throne and marry Hamlet's mother.",
        url: "https://www.amazon.com/-/es/William-Shakespeare/dp/B086PLBGXQ/",
        activeUser: false,
        status: "active",
      },
      {
        id: "10",
        title: "Hamlet",
        author: "William Shakespeare",
        participants: 5,
        synopsis:
          "The Tragedy of Hamlet, Prince of Denmark, often shortened to Hamlet, is a tragedy written by William Shakespeare sometime between 1599 and 1601. It is Shakespeare's longest play, with 29,551 words. Set in Denmark, the play depicts Prince Hamlet and his revenge against his uncle, Claudius, who has murdered Hamlet's father in order to seize his throne and marry Hamlet's mother.",
        url: "https://www.amazon.com/-/es/William-Shakespeare/dp/B086PLBGXQ/",
        activeUser: false,
        status: "active",
      },
    ],
  }),
  getters: {
    findBooksByStatus: (state) => (bookStatus, bookAmount) => {
      const bookByStatus = state.books.filter(
        (book) => book.status === bookStatus
      );
      return bookByStatus.slice(0, bookAmount);
    },
  },
  actions: {
    voteForBook(bookId) {
      this.books.forEach((book) => {
        if (book.id === bookId) {
          if (book.activeUser === false) {
            book.participants++;
            book.activeUser = true;
          } else {
            book.participants--;
            book.activeUser = false;
          }
        }
      });
    },
  },
});
