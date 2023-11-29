import PropertyCard from "./PropertyCard";
import useProperty from "../../hooks/useProperty";


const AllProperties = () => {
    const [properties] = useProperty();

    const verifiedProperties = properties.filter(property => property.status && property.status.toLowerCase() === 'verified' && property.role !== 'fraud');

    return (
        <div className="container mx-auto px-5 mb-20 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    verifiedProperties.slice(0, 4).map(property => <PropertyCard
                        key={property._id}
                        property={property}
                    ></PropertyCard>)
                }
            </div>
        </div>
    );
};

export default AllProperties;