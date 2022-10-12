import { mount } from "@vue/test-utils";
import BookList from "../BookList.vue";
import { describe, expect, it, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";

describe("Testing UI: BookList", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  const books = [
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
  ];

  it("It should render properly the total number of books in the list", () => {
    const wrapper = mount(BookList, {
      props: {
        books: books,
        isCarousel: true,
      },
    });
    const bookList = wrapper.findAll('[data-testid="bookCard"]');

    expect(bookList.length).toBe(3);
  });

  it("It should render properly the book list when is a carousel", () => {
    const wrapper = mount(BookList, {
      props: {
        books: books,
        isCarousel: true,
      },
    });
    const listContainer = wrapper.element.querySelector(
      '[data-testid="listContainer"]'
    );

    expect(listContainer.className).toMatch("carouselLayout");
  });

  it("It should render properly the book list when is a list", () => {
    const wrapper = mount(BookList, {
      props: {
        books: books,
        isCarousel: false,
      },
    });
    const listContainer = wrapper.element.querySelector(
      '[data-testid="listContainer"]'
    );

    expect(listContainer.className).toMatch("listLayout");
  });
});
