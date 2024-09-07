import ItemsBanner from '../components/ItemsBanner';
import LoginImage from '../assets/Images/LoginImage.jpg'
const AboutUs = () => {
    return (
        <div className="mt-16">
            <ItemsBanner name={'About Us'} />
            <div className='flex w-full h-auto flex-col lg:flex-row'>
                <div className='flex w-full lg:w-5/12 h-full items-center justify-center pt-12'>
                    <div className='flex w-[400px] h-[550px] ml-0 lg:ml-28 bg-cover 
                    bg-center bg-no-repeat' style={{ backgroundImage: `url(${LoginImage})` }}>

                    </div>
                </div>
                <div className='flex flex-col items-center justify-center lg:justify-start lg:items-start w-full lg:w-7/12 h-full pt-12 ml-3'>
                    <h2 className='text-3xl'>Our Story</h2>
                    <p className='w-10/12 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sunt quas quibusdam animi expedita ullam veritatis veniam quasi ex a in consequatur doloremque facere totam id itaque impedit, ducimus nisi molestias corporis deleniti excepturi? Saepe iure quaerat distinctio delectus ullam eveniet id. Sequi exercitationem doloribus voluptatem placeat rerum quae deserunt odio nihil voluptates vero dignissimos ex, perferendis eligendi fugit a illum ab. Perspiciatis consequuntur earum temporibus, quasi, quis harum magnam consectetur repudiandae repellendus, optio eius quaerat? Mollitia vero quibusdam, sapiente blanditiis modi neque distinctio illum praesentium et facilis ab animi voluptatibus tempora assumenda, voluptatem necessitatibus placeat accusamus pariatur doloremque. Ut ipsa praesentium ea qui officia sequi consequatur labore officiis voluptatibus quis dignissimos, repudiandae rem asperiores reprehenderit quas! Aut consectetur temporibus magni assumenda alias magnam, qui praesentium obcaecati quam similique possimus quos quas nisi et ab quisquam culpa rem soluta quia perspiciatis. Tempore quibusdam explicabo eum aspernatur a. Debitis, voluptate porro Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsum harum consequuntur? A obcaecati, incidunt ut iusto ea dolore quos dolor nulla cumque. Tempora possimus dolor ullam officia architecto voluptatem fuga dicta ea molestias!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
