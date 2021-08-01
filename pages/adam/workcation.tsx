import {destinations} from "../../static/destinations";
import DestinationCard from "../../components/DestinationCard";

const WorkCation = () => {
    return (
        <div className="bg-gray-100">
            <div className="flex">
                <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12 ">
                    <div className="xl:max-w-lg xl:ml-auto">
                        <h1 className="text-2xl">Work<span className="text-indigo-500">cation</span></h1>
                        <img
                            src="https://img.freepik.com/free-photo/side-view-woman-working-laptop-beach_23-2148575227.jpg?size=626&ext=jpg"
                            alt="Woman working on beach"
                            className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
                        />
                        <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
                            You can work from anywhere.
                            <br className="hidden lg:inline"/>
                            <span className="text-indigo-500"> Take advantage of it.</span>
                        </h1>
                        <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
                            Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy
                            some nice weather even when you're not on vacation.
                        </p>
                        <div className="mt-4 sm:mt-6">
                            <a href="#"
                               className="base-btn blue-btn sm:text-base shadow-lg">
                                Book your escape
                            </a>
                            {/*<a href="#"*/}
                            {/*   className="ml-2 base-btn gray-btn sm:text-base">*/}
                            {/*    Learn more*/}
                            {/*</a>*/}
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/2 lg:relative">
                    <img
                        src="https://img.freepik.com/free-photo/side-view-woman-working-laptop-beach_23-2148575227.jpg?size=626&ext=jpg"
                        alt="Woman working on beach"
                        className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                </div>
            </div>
            <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
                <h2 className="text-xl text-gray-900">Popular Destinations</h2>
                <p className="text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
                <div className="flex flex-wrap -mx-4">

                    {
                        destinations.map(destination => (
                            <div key={destination.city} className="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3">
                                <DestinationCard
                                    city={destination.city}
                                    averagePrice={destination.averagePrice}
                                    propertyCount={destination.propertyCount}
                                    imageUrl={destination.imageUrl}
                                    imageAlt={destination.imageUrl}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default WorkCation;