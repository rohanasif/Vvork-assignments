import React from "react";

const Contact = () => {
  return (
    <div class="py-8 px-4 contact-row" id="contact">
      <h3 class="border-b border-[#f1f1f1] py-4 font-normal my-[10px] text-2xl">
        Contact
      </h3>
      <p class="py-[15px]">
        Lets get in touch and talk about your next project.
      </p>
      <form action="/action_page.php" target="_blank">
        <input
          class="p-2 block overflow-visible w-full w3-border"
          type="text"
          placeholder="Name"
          required=""
          name="Name"
        />
        <input
          class="my-4 p-2 block overflow-visible w-full w3-border"
          type="text"
          placeholder="Email"
          required=""
          name="Email"
        />
        <input
          class="my-4 p-2 block overflow-visible w-full w3-border"
          type="text"
          placeholder="Subject"
          required=""
          name="Subject"
        />
        <input
          class="my-4 p-2 block overflow-visible w-full w3-border"
          type="text"
          placeholder="Comment"
          required=""
          name="Comment"
        />
        <button
          class="my-4 py-2 px-4 align-middle overflow-hidden text-[#fff] bg-black w3-section"
          type="submit"
        >
          <i class="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default Contact;
