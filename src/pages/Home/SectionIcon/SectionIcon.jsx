

const SectionIcon = () => {
    return (
        <div className="my-6">
            <h2 className="text-4xl text-sky-600 font-bold text-center my-6">Our Varieties</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 w-2/3 mx-auto gap-6">
                <div className="border-dashed border-2 border-indigo-200 rounded-lg p-6 bg-sky-50 shadow-md">
                    <img src="https://i.ibb.co/JKtvqnJ/minipolice.png" alt="" />
                    <p className="text-center text-xl text-blue-500 font-semibold">Mini Police Cars</p>

                </div>
                <div className="border-dashed border-2 border-indigo-200 rounded-lg p-6 bg-sky-50 shadow-md">
                    <img src="https://i.ibb.co/6vf6hKS/minibus.png" alt="" />
                    <p className="text-center text-xl text-blue-500 font-semibold">Mini Bus</p>
                </div>
                <div className="border-dashed border-2 border-indigo-200 rounded-lg p-6 bg-sky-50 shadow-md">
                    <img src="https://i.ibb.co/LP8zds4/sports.png" alt="" />
                    <p className="text-center text-xl text-blue-500 font-semibold">Mini Sports Car</p>
                </div>
            </div>
        </div>
    );
};

export default SectionIcon;