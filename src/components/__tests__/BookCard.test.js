import { mount } from "@vue/test-utils";
import BookCard from "../BookCard.vue";
import { describe, expect, it, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";

describe("Testing UI: BookCard", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("It should render properly the book information when the user hasn't voted in a proposed book", () => {
    const wrapper = mount(BookCard, {
      props: {
        book: {
          id: "1",
          title: "In Search of Lost Time",
          author: "Marcel Proust",
          participants: 4,
          synopsis:
            "In Search of Lost Time follows the narrator's recollections of childhood and experiences into adulthood in the late 19th-century and early 20th-century high-society France, while reflecting on the loss of time and lack of meaning in the world.",
          url: "https://www.amazon.com/Search-Lost-Time-Marcel-Proust/dp/150778399X",
          activeUser: false,
          status: "proposed",
        },
      },
    });
    const title = wrapper.element.querySelector(
      '[data-testid="title"]'
    ).innerHTML;
    const author = wrapper.element.querySelector(
      '[data-testid="author"]'
    ).innerHTML;
    const participants = wrapper.element.querySelector(
      '[data-testid="participants"]'
    ).innerHTML;
    const btn = wrapper.element.querySelector('[data-testid="textBtn"]');

    expect(title).toMatch("In Search of Lost Time");
    expect(author).toMatch("Marcel Proust");
    expect(participants).toMatch("4 Interested");
    expect(btn.innerHTML).toMatch("Vote");
    expect(btn.className).toMatch("btn");
  });

  it("It should render properly the button text and styles when the user has voted in a proposed book", () => {
    const wrapper = mount(BookCard, {
      props: {
        book: {
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
      },
    });
    const btn = wrapper.element.querySelector('[data-testid="textBtn"]');

    expect(btn.innerHTML).toMatch("Voted");
    expect(btn.className).toMatch("btn btn__selected");
  });

  it("It should render properly the the text of the participants, button text and styles when the user hasn't joined in a club", () => {
    const wrapper = mount(BookCard, {
      props: {
        book: {
          id: "1",
          title: "In Search of Lost Time",
          author: "Marcel Proust",
          participants: 4,
          synopsis:
            "In Search of Lost Time follows the narrator's recollections of childhood and experiences into adulthood in the late 19th-century and early 20th-century high-society France, while reflecting on the loss of time and lack of meaning in the world.",
          url: "https://www.amazon.com/Search-Lost-Time-Marcel-Proust/dp/150778399X",
          activeUser: false,
          status: "active",
        },
      },
    });
    const participants = wrapper.element.querySelector(
      '[data-testid="participants"]'
    ).innerHTML;
    const btn = wrapper.element.querySelector('[data-testid="textBtn"]');

    expect(participants).toMatch("4 Readers");
    expect(btn.innerHTML).toMatch("Join");
    expect(btn.className).toMatch("btn");
  });

  it("It should render properly the button text and styles when the user has joined a club", () => {
    const wrapper = mount(BookCard, {
      props: {
        book: {
          id: "1",
          title: "In Search of Lost Time",
          author: "Marcel Proust",
          participants: 4,
          synopsis:
            "In Search of Lost Time follows the narrator's recollections of childhood and experiences into adulthood in the late 19th-century and early 20th-century high-society France, while reflecting on the loss of time and lack of meaning in the world.",
          url: "https://www.amazon.com/Search-Lost-Time-Marcel-Proust/dp/150778399X",
          activeUser: true,
          status: "active",
        },
      },
    });
    const btn = wrapper.element.querySelector('[data-testid="textBtn"]');

    expect(btn.innerHTML).toMatch("Joined");
    expect(btn.className).toMatch("btn btn__selected");
  });

  it("It should render properly the button text and styles when the user click to vote for a proposed book", async () => {
    const wrapper = mount(BookCard, {
      props: {
        book: {
          id: "1",
          title: "In Search of Lost Time",
          author: "Marcel Proust",
          participants: 4,
          synopsis:
            "In Search of Lost Time follows the narrator's recollections of childhood and experiences into adulthood in the late 19th-century and early 20th-century high-society France, while reflecting on the loss of time and lack of meaning in the world.",
          url: "https://www.amazon.com/Search-Lost-Time-Marcel-Proust/dp/150778399X",
          activeUser: false,
          status: "proposed",
        },
      },
    });
    const btn = wrapper.element.querySelector('[data-testid="textBtn"]');

    await btn.click();

    console.log("////////////////////////////////")
    console.log(btn.innerHTML);

    expect(btn.innerHTML).toMatch("Voted");
    expect(btn.className).toMatch("btn btn__selected");
  });
});
