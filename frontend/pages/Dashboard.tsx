import HabitChart from '../components/HabitChart';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [habitData, setHabitData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/habits')
      .then(res => res.json())
      .then(data => setHabitData(data));
  }, []);

  return (
    <main className="p-8 grid gap-6 grid-cols-1 md:grid-cols-2">
      <HabitChart data={habitData} />
      {/* Other cards like MoodTracker, GithubActivity, etc */}
    </main>
  );
}
