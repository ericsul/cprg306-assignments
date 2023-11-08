"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleGitHubSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleFirebaseSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      {user ? (
        <div>
          <button onClick={handleFirebaseSignOut}>Sign out</button>
          <p>
            Welcome, {user?.displayName} ({user?.email})
          </p>
          <Link href="/week8/shopping-list">Shopping List</Link>
        </div>
      ) : (
        <div>
          <button onClick={handleGitHubSignIn}>Sign in with GitHub</button>
        </div>
      )}
    </main>
  );
}

export default Page;
