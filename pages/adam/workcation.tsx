const WorkCation = () => {
    return (
        <div className="bg-gray-100 h-screen">
            <div className="px-8 py-12">
                <h1 className="text-2xl">Work<span className="text-indigo-500">cation</span></h1>
                <img
                    src="https://img.freepik.com/free-photo/side-view-woman-working-laptop-beach_23-2148575227.jpg?size=626&ext=jpg"
                    alt="Woman working on beach"
                    className="mt-6 rounded-lg shadow-xl"
                />
                <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight">
                    You can work from anywhere.
                    <span className="text-indigo-500"> Take advantage of it.</span>
                </h1>
                <p className="mt-2 text-gray-600">
                    Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy
                    some nice weather even when you're not on vacation.
                </p>
                <div className="mt-4">
                    <a href="#" className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-sm text-white uppercase tracking-wider font-semibold">
                        Book your escape
                    </a>
                </div>
            </div>
        </div>
    );
};

export default WorkCation;