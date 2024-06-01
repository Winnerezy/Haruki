import { useEffect } from "react";
import Button from "../components/Shared/Button";
import { useState } from "react";

export default function Pomodoro() {

    const [disabled, setDisabled] = useState(false)
    const initialTime = {
        hour: '00',
        minute: '00',
        second: '00'
    }

    const [time, setTime] = useState(initialTime)

    const handleTime = (e) => {
        setTime(prev => ({...prev,  [e.target.name]: Number(e.target.value)}))
    }

    const handleStart = () => {
        if (time.hour == 0 && time.minute == 0 && time.second == 0) {
            return;
        }
          setDisabled(true);

          setTime((prev) => ({ ...prev, second: prev.second - 1 }));
        
    }

    const handleStop = () => {
        setDisabled(false)
         clearInterval();
    }

    useEffect(()=> {
        const pomodoro = () => {
          if (time.second === 0) {
            setTime((prev) => ({
              ...prev,
              minute: prev.minute == 0 ? "00" : prev.minute - 1,
              second: 59,
            }));
          }
          if (time.minute === 0) {
            setTime((prev) => ({
              ...prev,
              hour: prev.hour == 0 ? "00" : prev.hour - 1,
              minute: 59,
            }));
          }
        }
        pomodoro()
    }, [time])

    return (
      <main className="flex flex-col w-full items-center justify-center gap-y-8">
        <section className="w-full text-[60px] lg:text-[100px] xl:text-[170px] flex items-center justify-center gap-x-4">
          <input
            type="text"
            value={time.hour}
            name="hour"
            onChange={(e) => handleTime(e)}
            disabled={disabled}
            className="w-full text-center h-max flex-grow border-none outline-none font-bold  bg-transparent"
            maxLength={2}
            placeholder="HH"
          />
          <span className="">:</span>
          <input
            type="text"
            value={time.minute}
            name="minute"
            onChange={(e) => handleTime(e)}
            disabled={disabled}
            className="w-full text-center h-max border-none outline-none font-bold bg-transparent"
            maxLength={2}
            placeholder="MM"
          />
          <span className="">:</span>
          <input
            type="text"
            value={time.second}
            name="second"
            onChange={(e) => handleTime(e)}
            disabled={disabled}
            className="w-full text-center h-max border-none outline-none font-bold bg-transparent"
            maxLength={2}
            placeholder="SS"
          />
        </section>

        <div className="sm:gap-x-4 flex sm:flex-row flex-col gap-y-4 items-center justify-center">
          <Button title={"Start"} onClick={()=> setInterval(handleStart, 1000)} />
          <Button title={"Reset"} />
          <Button title={"Stop"} onClick={handleStop} />
        </div>
      </main>
    );
}