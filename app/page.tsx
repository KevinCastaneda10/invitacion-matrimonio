import Header from "@/components/Header";
import CountdownTimer from "../components/CountdownTimer";

const Home: React.FC = () => {
  // Fecha objetivo: 9 de noviembre de 2024 a las 5 PM
  const targetDate = new Date("2024-11-09T17:00:00");

  return (
    <div>
      <Header />
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
};

export default Home;
