import ShirtImage from '../assets/Images/shirt.jpg'
import ShoesImage from '../assets/Images/shoes.jpg'
import PentImage from '../assets/Images/pents.jpg'
import GlassImage from '../assets/Images/glass.jpg'
import SuitImage from '../assets/Images/suit.jpg'
import CategoryItem from './CategoryItem'
const CategoryBox = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 w-10/12 h-auto lg:h-[800px] m-auto gap-8 my-20">
      <div className="flex flex-col h-[800px] lg:h-full w-full overflow-hidden">
        <CategoryItem height={'h-3/5'} image={ShirtImage} link={'sales/shirts'} name={'Shirts'} />
        <CategoryItem height={'h-2/5'} image={PentImage} link={'sales/pants'} name={'Pants'} />
      </div>
      <div className="flex flex-col h-[800px] lg:h-full w-full">
      <CategoryItem height={'h-2/5'} image={GlassImage} link={'sales/tee'} name={'Tees'} />
      <CategoryItem height={'h-3/5'} image={ShoesImage} link={'sales/shoes'} name={'Shoes'} />
      </div>
      <div className="flex flex-col h-[800px] lg:h-[766px] w-full">
      <CategoryItem height={'h-3/5'} image={SuitImage} link={'sales/suit'} name={'Suits'} />
        <div className="w-full h-2/5 rounded-md bg-gray-200 flex flex-col justify-center items-center">
          <div className='text-3xl text-wrap font-bold'>SIGN UP<br />&nbsp;&nbsp;&nbsp;&nbsp;&<br />GET 20% OFF</div>
          <div className='w-48'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quod?</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBox;
