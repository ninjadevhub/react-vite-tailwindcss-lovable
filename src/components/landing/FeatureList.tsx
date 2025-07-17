import { features } from "./data";
import FeatureCard from "./FeatureCard";

const FeatureList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                features.map((feat, index) => <FeatureCard key={feat.title} index={index} feature={feat} />)
            }
        </div>
    )
}

export default FeatureList;