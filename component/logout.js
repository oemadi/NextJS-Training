
import { useRouter } from "next/router";

export default function Logout() {
  let history = useRouter();

  function handleLogOut() {
    localStorage.setItem('user-info','')
    localStorage.clear();
    history.push("/login"); // whichever component you want it to route to
  }

  return (
    <button type="button" onClick={handleLogOut}>
     Logout
    </button>
  );
}