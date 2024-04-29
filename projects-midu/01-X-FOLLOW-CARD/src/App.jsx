import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

const users = [
  {
    userName: "IvanNehuenD",
    name: "Ivan Nehuen Duarte",
    isFollowing: true,
  },
  {
    userName: "reactjs",
    name: "React",
    isFollowing: false,
  },
  {
    userName: "github",
    name: "Github",
    isFollowing: false,
  },
  {
    userName: "Netlify",
    name: "Netlifly",
    isFollowing: true,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
