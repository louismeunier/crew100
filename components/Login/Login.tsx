import { useSession, signIn } from "next-auth/client";
import Button from "@material-ui/core/Button";
import Profile from "@components/Login/Profile";

export default function Login() {
	const [session, loading] = useSession();

	const handleLogin = async () => {
		await signIn("google");
	};

	return (
		<>
			{session && <Profile />}
			{!session && (
				<Button onClick={handleLogin} disabled={loading}>
					{"Login with Google"}
				</Button>
			)}
		</>
	);
}
