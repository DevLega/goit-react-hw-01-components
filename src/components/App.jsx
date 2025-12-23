import Profile from "./FirstTask/Profile";
import user from "../data/user.json"
import stats from "../data/data.json"
import friends from "../data/friends.json"
import transactions from "../data/transactions.json"
import Statistics from "./SecondTask/Statistics";
import FriendList from "./ThirdTask/FriendList";
import TransactionHistory from "./FourthTask/TransactionHistory";

export const App = () => {

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

      <h1>TASK1</h1>

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <h1>TASK2</h1>

      <Statistics title="Upload stats" stats={stats} />

      <h1>TASK3</h1>

      <FriendList friends={friends} />

      <h1>TASK4</h1>

      <TransactionHistory transactions={transactions} />
    </div>
  );
};
