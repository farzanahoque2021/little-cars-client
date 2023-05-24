

const AboutSection = () => {
    return (
        <div className="my-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-3/4 mx-auto gap-8">
                <div><img src="https://i.ibb.co/7ptt0QN/kid-playing-home.jpg" alt="" className="rounded-lg" /></div>
                <div>
                    <h2 className="text-3xl font-bold text-sky-600">About Us</h2>
                    <div className='mt-2'><ul className='list-disc'>
                        <li className="text-xl">We focus on quality service for years. Our team will be attentive to customer needs and respond quickly.

                        </li>
                        <li className="text-xl">Online and exhibition hall will release a large number of new products every day, update and consult in time, so that customers can purchase online more easily and quickly</li>
                        <li className="text-xl">More professional quality inspection team strictly control product quality.</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;