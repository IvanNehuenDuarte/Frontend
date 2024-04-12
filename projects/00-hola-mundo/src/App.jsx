import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

const users = [
  {
    userName: 'IvanNehuenD',
    name: 'Ivan Nehuen Duarte',
    isFollowing: true,
  },
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: false,
  },
  {
    userName: 'elonmusk',
    name: 'Elon Musk',
    isFollowing: false,
  },
  {
    userName: 'jmilei',
    name: 'Javier Milei',
    isFollowing: true,
  },
]

export function App () {
  return (
    <section className='App'>
    {
      users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard 
        key={userName}
        userName={userName}
        initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))
    }
    </section>
  )
};
