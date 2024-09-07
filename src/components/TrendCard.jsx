import TrendImage from "../assets/Images/TrendImage.jpeg";
import CountdownTimer from "./CountdownTimer";
import Countdownpicture from '../assets/Images/Countdownpicture.png'
export default function TrendCard() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto md:h-[600px] bg-slate-100 mt-16 md:flex-row md:items-center md:justify-center">
      
      <a href="/details/400"
        className="flex w-[300px] h-[300px] md:w-5/12 md:h-5/6 mr-0 md:mr-5 bg-cover bg-center bg-no-repeat zoom-background-trend"
        style={{ backgroundImage: `url(${TrendImage})` }}
      >
        <div class="flex items-center justify-center w-full h-full">
          <p class="flex flex-col justify-center items-center text-white text-4xl font-bold">
            <p>New Beauty</p>
            <p className="text-6xl">LookBook</p>
          </p>
        </div>
        </a>
      
      
      <a href="/details/500" className="flex flex-col w-[300px] h-[400px] md:w-5/12 md:h-5/6 bg-white ml-0 md:ml-5 justify-center items-center">
        <img src={Countdownpicture} alt="picture" className="w-56 h-72" />
        <p className="text-3xl mb-3 font-bold">Discount Ends In</p>
      <CountdownTimer/>
        </a>
        
    </div>
  );
}
