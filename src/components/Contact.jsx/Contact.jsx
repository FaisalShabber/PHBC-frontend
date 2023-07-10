import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

function Contact() {
  return (
    <>
      <div className="justify-center lg:px-1 2xl:px-28  px-10 flex flex-col lg:flex-row lg:mb-20 mb-12 2xl:-mt-12 lg:-mt-16 -mt-10 ">
        <div className="lg:w-[60%] w-full lg:px-10  mt-10">
          <form>
            <div className="grid md:grid-cols-2 md:gap-6 lg:mb-10">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300   dark:border-gray-600 dark:focus:border-[#34493c] focus:outline-none focus:ring-0 focus:border-[#34493c] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute  text-2xl text-[#34493c] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#34493c] peer-focus:dark:text-[#34493c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First Name
                </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:border-gray-600 dark:focus:border-[#34493c] focus:outline-none focus:ring-0 focus:border-[#34493c] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#34493c] peer-focus:dark:text-[#34493c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6 lg:mb-8 ">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:border-gray-600 dark:focus:border-[#34493c] focus:outline-none focus:ring-0 focus:border-[#34493c] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#34493c] peer-focus:dark:text-[#34493c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:border-gray-600 dark:focus:border-[#34493c] focus:outline-none focus:ring-0 focus:border-[#34493c] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#34493c] peer-focus:dark:text-[#34493c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number
                </label>
              </div>
            </div>
            <div className="relative z-0 w-full lg:mb-16 mb-6 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:border-gray-600 dark:focus:border-[#34493c] focus:outline-none focus:ring-0 focus:border-[#34493c] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#34493c] peer-focus:dark:text-[#34493c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Organization
              </label>
            </div>
            <div className="relative z-0 w-full lg:mb-10  group ">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:border-gray-600 dark:focus:border-[#34493c] focus:outline-none focus:ring-0 focus:border-[#34493c] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#34493c] peer-focus:dark:text-[#34493c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>

            <button
              type="submit"
              className="flex lg:mt-10 mt-8 float-right py-[15px]  text-[#640414] hover:underline underline-offset-8 lg:text-4xl text-2xl gap-2  sm:w-auto"
            >
              <RiSendPlaneFill className="lg:text-4xl text-3xl  text-[#640414]" />{" "}
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="lg:text-4xl text-2xl  text-[#34493c] text-center lg:pt-0 lg:py-20 py-6">
        <h1 className="font-semibold mb-10 ">Office In Pakistan</h1>
        <p className="leading-loose">
          {" "}
          LG Divine Garden Commercial Arcade, Divine Garden, Airport
          Road,Lahore,Pakistan
          <br />
          corporatecommunication@phbc.org.pk
          <br />
          +92-423-5854071
        </p>
      </div>

      {/* google map */}
      <div class="relative justify-center w-full lg:h-[40rem] h-[20rem] lg:px-20 lg:p-40 ">
        <iframe
          class="absolute top-0 left-0 w-full lg:h-full h-[20rem]"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="1"
        ></iframe>
      </div>

      <div className="lg:text-6xl text-2xl text-[#34493c] text-center lg:p-32 p-10">
        Thank You.
      </div>
    </>
  );
}

export default Contact;
