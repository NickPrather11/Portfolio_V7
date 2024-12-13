import React from "react";
import Page from "../components/Page";
import Card from "../components/Card";

const ContactPage = () => {
  return (
    <Page>
      <h1>CONTACT</h1>

      <section>
        <div className="grid grid-cols-1 justify-items-center">
          <div className="m-8">
            <p>
              This part does not currently work. I will not see anything you
              type here.
            </p>
          </div>

          <Card className="lg:col-span-3 lg:p-12">
            <form action="#" className="space-y-4">
              <div>
                <label className="sr-only" /*for="name"*/>Name</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" /*for="email"*/>Email</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" /*for="phone"*/>Phone</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" /*for="message"*/>Message</label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  /*rows="8"*/
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-green-900 px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </Card>
        </div>
      </section>
    </Page>
  );
};

export default ContactPage;
