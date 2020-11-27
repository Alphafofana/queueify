import WelcomeView from "./welcomeView";
import WelcomeHostView from "./welcomeHostView";
import WelcomeGuestView from "./welcomeGuestView";
import { useAuth } from "../../contexts/AuthContext"
import { useState } from 'react'

function Welcome() {
	console.log(useAuth())
	const { signIn } = useAuth()
	const [error, setError] = useState("")

	async function handleSubmit(e) {
		e.preventDefault()
	
		try {
		  setError("")
		  await signIn("ella@mail.com", "password")
		} catch {
		  setError("Failed to log in")
		}
		  }


	return !localStorage.getItem("isAuthenticated") ? (
		<WelcomeView
			loginhost={handleSubmit}
			loginguest={handleSubmit}
		/>
	) : (
		(localStorage.getItem("userType") === "host" && <WelcomeHostView />) ||
			(localStorage.getItem("userType") === "guest" && (
				<WelcomeGuestView />
			))
	);
}

export default Welcome;
