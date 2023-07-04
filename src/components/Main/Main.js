import React from "react";
import "./Main.css";

export default function Main(props) {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <h1 className="main--title">Fun facts about F1</h1>
      <ul className="main--facts">
        <li>
          The most common question about F1 is what exactly does formula mean?
          The formula is a set of rules all participants and cars must follow.
          This includes car specifications and tire size to name a few. This
          allows for a fair race without a mechanical advantage (supposedly).
        </li>
        <li>
          It’s no secret that F1 cars are extremely fast. But did you know an F1
          car can accelerate from 0 to 60 mph (100 km/h) in 2.6 seconds and 0 to
          100 mph (160 km/h) in 4.0 seconds? Interestingly, F1 cars can also
          decelerate from 60 mph to 0 in less than 4.0 seconds as well!
        </li>
        <li>
          Valtteri Bottas holds the record for the highest speed reached in an
          F1 race. Amazingly, Bottas hit a jaw-dropping peak speed of 231.4 mph
          (372.5 km/h) at the 2016 Mexican Grand Prix. The F1 speed record not
          in competition? That was 246.9 mph (397.36 km/h) achieved on the
          Bonneville Salt Flats.
        </li>
        <li>
          The iteration of Formula One we know today began in 1946 at the Turin
          Grand Prix in Italy. While Grand Prix racing had been around for many
          years, this 1946 race was the first to run on Formula One criteria.
          The F1 World Championships were established four years later in 1950.
        </li>
        <li>
          Pit stops are one of the most exciting dimensions of F1 racing. The
          pit crew of the elite teams have the process down so well they can
          fully change a set of tires in 3 seconds! In 2019, the Red Bull team
          of Max Verstappen’s car set a record by replacing all 4 tires in just
          1.82 seconds. How quick is that!?
        </li>
        <li>
          F1 drivers are subject to sweltering temperatures, high-stress and
          thick fire-retardant clothing for over 2 hours. This means the driver
          is sweating the entire time and only supplied 1.5 liters of water. A
          driver can lose up to 8.8 lbs (4 kg) per race!
        </li>
        <li>
          While F1 racing is one of the safest racing series out there, there
          have been a fair share of tragedies on the racetrack. 46 drivers in
          all have lost their lives in F1 competition. The oldest F1 fatality
          was Chet Miller (50). The youngest to die in an F1 crash was Ricardo
          Rodriguez (20).
        </li>
        <li>
          F1 races sometimes get animal visitors from the forests surrounding
          the track. Animals that have stolen the spotlight include; dogs, deer,
          birds and squirrels. The Canadian Grand Prix has seen the most animal
          encounters with a fox, a groundhog, and a pair of seagulls. Also at
          the Singapore Grand Prix, a humongous lizard casually walked across
          the track!
        </li>
        <li>
          Lella Lombardi is a trailblazer for women in F1 racing. Starting her
          first race in 1974, Lombardi is still the only woman to earn a point
          in a Grand Prix race. Overall she raced in 17 Grand Prix. We’re sure
          she’s still inspiring women in racing to this day!
        </li>
        <li>
          If you can believe it, an entire F1 race is run on one tank of gas. In
          fact, in 2009 refueling mid-race was banned by F1. This ban was
          enacted for safety reasons to avoid fuel spillage and cars going up in
          flames with the driver inside.
        </li>
        <li>
          The length of an F1 track is always 305 km (190 miles) with the Monaco
          Grand Prix being the only exception. This allows each F1 race to be
          completed in approximately 2 hours. The 2021 US Grand Prix was the
          best attended F1 race of all time with over 400,000 spectators packing
          the circuit. In fact, F1 is one of the fastest growing sports in the
          States!
        </li>
        <li>
          Who is the greatest of all time in F1 racing? This is a highly debated
          topic but we’ll give a quick rundown. Lewis Hamilton has the most F1
          wins, most pole positions and has the joint-record of World
          Championships. Juan Manuel Fangio has the top winning percentage of
          all time with 46.15%, winning 24 of 52.
        </li>
        <li>
          The F1 steering wheel is one of the most complicated steering wheels
          in racing. With over 20 buttons all with unique functions, the driver
          not only has to drive incredibly fast they also must make split second
          decisions on the wheel.
        </li>
      </ul>
    </main>
  );
}
