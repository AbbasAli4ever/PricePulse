import LoginImage from "../assets/Images/LoginImage.jpg";
import TypingEffect from "../components/TypingEffect";
export default function LoginLeftSection({content}) {
  return (
    
      <div className="relative hidden lg:block w-1/2 h-screen">
        <div
          className="flex items-center justify-center bg-cover bg-center absolute inset-0 opacity-30"
          style={{ backgroundImage: `url(${LoginImage})` }}
        ></div>
        <div class="relative flex items-center justify-center w-full h-screen">
          <p class="text-white text-4xl font-bold">
          <TypingEffect text={content} />
          </p>
        </div>
      </div>
    
  );
}
