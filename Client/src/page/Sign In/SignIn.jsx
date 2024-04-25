import "./SignIn.css";
import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react'
import { useCookies} from 'react-cookie'

const SignIn = () => {
	const [cookies, setCookie, removeCookie] = useCookies(null)
	const [isLogIn, setIsLogin] = useState(true)
	const [email, setEmail] = useState(null)
	const [password, setPassword] = useState(null)
	const [name, setName] = useState(null)
	const [error, setError] = useState(null)
  
	const viewLogin = (status) => {
	  setError(null)
	  setIsLogin(status)
	}
  
	const handleSubmit = async (e, endpoint) => {
	  e.preventDefault()
	  console.log(name, email)
	  console.log(process.env.REACT_APP_SERVERURL)
	  
	  const response = await fetch(`http://localhost:5000/${endpoint}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({name, email, password})
	  })
  
	  const data = await response.json()
  
	  if (data.detail) {
		setError(data.detail)
	  } else {
		setCookie('Email', data.email)
		setCookie('AuthToken', data.token)
  
		window.location.reload()
	  }
  
	}
  return (
    <>
      <Navbar />
      <Banner />
  
      <div class="section">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 class="mb-0 pb-3">
							<span>
								<button onClick={() => viewLogin(true)}>Log In</button>
							 </span>
							 <span>
								<button onClick={() => viewLogin(false)}>Sign Up</button>
								</span>
								</h6>
			          	<input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"></label>
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">
								<div class="card-front">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Log In</h4>
											<div class="form-group">
												<input type="email" class="form-style" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
												<i class="input-icon uil uil-at"></i>
											</div>	
											<div class="form-group mt-2">
												<input type="password" class="form-style" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											<input type="submit" className="create" onClick={(e) => handleSubmit(e,'login')} />
                      <p class="mb-0 mt-4 text-center"><a href="" class="link">Forgot your password?</a></p>
				      					</div>
			      					</div>
			      				</div>
								<div class="card-back">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-3 pb-3">Sign Up</h4>
											<div class="form-group">
												<input type="text" class="form-style" placeholder="Full Name" onChange={(e) => setName(e.target.value)}/>
												<i class="input-icon uil uil-user"></i>
											</div>	
											
                      <div class="form-group mt-2">
												<input type="email" class="form-style" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
												<i class="input-icon uil uil-at"></i>
											</div>
											<div class="form-group mt-2">
												<input type="password" class="form-style" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											<input type="submit" className="create" onClick={(e) => handleSubmit(e,'signup')} />
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>
  

      <Footer />
    </>
  );
}

export default SignIn ;