import {FC} from "react";

interface IProps {
    city: string,
    averagePrice: number,
    propertyCount: number,
    imageUrl: string,
    imageAlt: string,
}

const DestinationCard: FC<IProps> = ({city, averagePrice,propertyCount,imageUrl,imageAlt}) => {
    return (
        <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
            <img className="h-32 w-32 flex-shrink-0" src={imageUrl} alt={imageAlt}/>
            <div className="px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-800">{city}</h3>
                <p className="text-gray-600">${averagePrice} / night average</p>
                <div className="mt-4">
                    <a href="#" className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">Explore {
                        propertyCount
                    } properties</a>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;