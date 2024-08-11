import { useRef} from "react";

export default function Register() {
  const formRef = useRef<HTMLFormElement>(null);
 

  async function btnClicked() {
    const data = new FormData(formRef.current!);

    const user = {
      FirstName: data.get("firstName"),
      LastName: data.get("lastName"),
      Email: data.get("email"),
      Password: data.get("password"),
      Isactive: parseInt(data.get("isActive") as string),
    };

    console.log(user);

   fetch("https://localhost:7137/api/User/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then(_ => console.log("Created"))
  }

  return (
    <>
      <div className="main-wrapper">
        <section className="page-title bg-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block text-center">
                  <span className="text-white">Register</span>
                  <h1 className="text-capitalize mb-4 text-lg">Create an Account</h1>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="/" className="text-white">
                        Home
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <span className="text-white">/</span>
                    </li>
                    <li className="list-inline-item">
                      <a href="/register" className="text-white-50">
                        Register
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-form-wrap section">
          <div className="container">
            <div className="row" style={{ display: "flex", justifyContent: "center" }}>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <form ref={formRef} id="contact-form" className="contact__form" method="post">
                  <h3 className="text-md mb-4">Registration Form</h3>

                  <div className="form-group">
                    <input name="firstName" type="text" className="form-control" placeholder="First Name" required />
                  </div>

                  <div className="form-group">
                    <input name="lastName" type="text" className="form-control" placeholder="Last Name" required/>
                  </div>

                  <div className="form-group">
                    <input name="email" type="email" className="form-control" placeholder="Email Address" required />
                  </div>

                  <div className="form-group">
                    <input name="password" type="password" className="form-control" placeholder="Your Password" required />
                  </div>

                  <div className="form-group">
                    <select name="isActive" className="form-control" required >
                      <option value="">Select Account Status</option>
                      <option value="1">Active</option>
                      <option value="0">Inactive</option>
                    </select>
                  </div>

                  <button onClick={btnClicked} className="btn btn-main" name="submit" type="button">
                    Register
                  </button>
                </form>
                <h6 className="mt-3">
                  <a href="/login">Already have an account? Log in</a>
                </h6>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
