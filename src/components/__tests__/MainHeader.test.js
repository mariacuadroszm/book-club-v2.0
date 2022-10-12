import { mount } from "@vue/test-utils";
import MainHeader from "../MainHeader.vue";
import { describe, expect, it, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";

describe("Testing UI: MainHeader", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("It should display the go back button if it is required", () => {
    const wrapper = mount(MainHeader, {});
    const goBackBtn = wrapper.find('[data-testid="goBackBtn"]');

    expect(goBackBtn.exists()).toBe(true);
  });

  it("It shouldn't display the go back button if it is not required", () => {
    const wrapper = mount(MainHeader, {
      props: {
        displayBackBtn: false,
      },
    });
    const goBackBtn = wrapper.find('[data-testid="goBackBtn"]');

    expect(goBackBtn.exists()).toBe(false);
  });
});
