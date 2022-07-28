import Link from "next/link";

import styles from "../styles/users.module.scss";
import MainContainer from "../components/MainContainer";

export default function Users({ users }) {
  return (
    <MainContainer>
      <div className={styles.users}>
        <h1>Users page</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>
                <a> {user.name} </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </MainContainer>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    props: { users },
  };
}
