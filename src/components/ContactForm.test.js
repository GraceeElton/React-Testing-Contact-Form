import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

//tests
// #1 - inputs are visable

//#2 form submit works and that you can click submti.

// let's go baby!!

// #1

// test("inputs are visible", () => {
//   //ARRANGE - set up the testing environment
//   const { getByLabelText } = render(<ContactForm />);

//   // ACT
//   // NONE. Tapped out.

//   // ASSERT

//   const firstname = getByLabelText(//i);
//   console.log(firstname);
//   expect(firstname).toBeInTheDocument();
// });

test("Contact form adds new contact", async () => {
  const { getByLabelText } = render(<ContactForm />);

  getByLabelText(/First Name/i);
  getByLabelText(/Last Name/i);
  getByLabelText(/Email/i);
  getByLabelText(/Message/i);

  // do what you are actually calling the label + make sure that you gice your label an ID
});

// #2 test submit

test("contact form will submit", () => {
  const { getByLabelText, getBytext, getByTestId } = render(<ContactForm />);

  const firstNameInput = getByLabelText(/First Name/i);
  const lastNameInput = getByLabelText(/Last Name/i);
  const emailInput = getByLabelText(/Email/i);
  const messageInput = getByLabelText(/message/i);

  fireEvent.change(firstNameInput, {
    target: { value: "Gra" },
  });
  fireEvent.change(lastNameInput, {
    target: { name: "lastName", value: "Gop" },
  });
  fireEvent.change(emailInput, {
    target: { name: "email", value: "Gop@gmail.com" },
  });
  fireEvent.change(messageInput, {
    target: { name: "email", value: "This is wild" },
  });

  //assert
  expect(firstNameInput.value).toBe("Gra");
  expect(lastNameInput.value).toBe("Gop");
  expect(emailInput.value).toBe("Gop@gmail.com");
  expect(messageInput.value).toBe("This is wild");

  fireEvent.click(getByTestId(/submit/i));
});
