import React from "react";

function Contact() {
  return (
    <div>
      <h2 className="my-3 text-center">Contact us</h2>
      <div className="container p-5 my-3 shadow">
        <form className="row">
          <div class="mb-3 col-md-6">
            <label for="userName" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="userName"
              aria-describedby="emailHelp"
            />
          </div>

          <div class="mb-3 col-md-6">
            <label for="email" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="email" />
          </div>

          <div className="mb-3 col-md-12">
            <label for="msg" class="form-label">
              Message
            </label>
            <textarea class="form-control" id="msg" rows="6"></textarea>
          </div>

          <button type="submit" class="btn btn-dark w-25 d-block mx-auto">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
