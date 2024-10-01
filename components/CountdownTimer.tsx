"use client";
import React, { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: 'url("/fondo1.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Título de la cuenta regresiva */}
      <h1 className="text-3xl font-bold text-white mb-4">Cuenta regresiva</h1>
      {/* Recuadros de la cuenta regresiva */}
      <div className="grid grid-cols-4 gap-4 text-center bg-white bg-opacity-50 p-4 rounded-lg">
        <div className="p-4 rounded-lg shadow-lg">
          <p className="text-5xl font-bold text-gray-800">{timeLeft.days}</p>
          <p className="text-lg text-gray-500">Días</p>
        </div>
        <div className="p-4 rounded-lg shadow-lg">
          <p className="text-5xl font-bold text-gray-800">{timeLeft.hours}</p>
          <p className="text-lg text-gray-500">Horas</p>
        </div>
        <div className="p-4 rounded-lg shadow-lg">
          <p className="text-5xl font-bold text-gray-800">{timeLeft.minutes}</p>
          <p className="text-lg text-gray-500">Minutos</p>
        </div>
        <div className="p-4 rounded-lg shadow-lg">
          <p className="text-5xl font-bold text-gray-800">{timeLeft.seconds}</p>
          <p className="text-lg text-gray-500">Segundos</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
