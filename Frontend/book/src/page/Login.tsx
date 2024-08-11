import { useRef, useState} from "react";

export default function Login() {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  function btnClicked() {
    const data = new FormData(formRef.current!);

    const email = data.get("email");
    const password = data.get("password");

    if (!email || !password) {
        setError("Email and password are required.");
        return;
      }

    const queryParams = new URLSearchParams({
      email: email as string,
      password: password as string
    });

    fetch(`https://localhost:7137/api/User/login?${queryParams}`, {
      method: "POST",
    }).then(response => {
        if (!response.ok) {
          throw new Error("Invalid email or password.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Login successful:", data);
        setError(null);
        setSuccess("Login successful!"); 
      })
      .catch(error => {
        setError(error.message);
        console.error("Error during login:", error);
      });
  }

  return (
    <>
      <div className="main-wrapper">
        <section className="page-title bg-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block text-center">
                  <span className="text-white">Login</span>
                  <h1 className="text-capitalize mb-4 text-lg">Get in Touch</h1>
                  <ul className="list-inline">
                    <li className="list-inline-item"><a href="/" className="text-white">Home</a></li>
                    <li className="list-inline-item"><span className="text-white">/</span></li>
                    <li className="list-inline-item"><a href="/login" className="text-white-50">Login</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-form-wrap section">
          <div className="container">
            <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <form ref={formRef} id="contact-form" className="contact__form" method="post">
                  <h3 className="text-md mb-4">Login Form</h3>

                  <div className="form-group">
                    <input name="email" type="email" className="form-control" placeholder="Email Address" required />
                  </div>

                  <div className="form-group">
                    <input name="password" type="password" className="form-control" placeholder="Your password" required />
                  </div>

                  <button onClick={btnClicked} className="btn btn-main" name="submit" type="button">Login</button>
                  {error && (
                    <div className="alert alert-danger mt-3">{error}</div>
                  )}
                  {success && (
                    <div className="alert alert-success mt-3">{success}</div>
                  )}
                </form>
                <h6 className="mt-3"><a href="/sign">You don't have an account?</a></h6>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
