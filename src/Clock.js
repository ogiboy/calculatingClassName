export default function Clock({ time }) {
  let hours = time.getHours();
  const classCycle = hours >= 0 && hours <= 6 ? "night" : "day";

  return <h1 className={classCycle}>{time.toLocaleTimeString()}</h1>;
}
