import Banner from "../assets/Images/Banner.jpg";
export default function ItemsBanner({name}) {
    return (
        <div
        className="h-48 w-full bg-neutral-600 bg-cover bg-center bg-no-repeat flex items-center justify-center mt-16"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <span className="text-5xl font-bold text-white">{name}</span>
      </div>
    );  
};