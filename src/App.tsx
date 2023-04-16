import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

function App() {
  const users = [
    {
      userName: "henryfm1994",
      name: "Henry Fleitas Mezquia",
      isFollowing: false,
    },
    {
      userName: "midudev",
      name: "Miguel Ángel Durán",
      isFollowing: true,
    },
    {
      userName: "andrewChav94",
      name: "Ángel A. Chávez Alonso",
      isFollowing: true,
    },
  ];

  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          name={name}
          initialIsFollowing={isFollowing}
        />
      ))}
    </section>
  );
}

export default App;
