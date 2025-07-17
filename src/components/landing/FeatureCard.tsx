import { FC } from "react";
import { motion } from "framer-motion";
import { Feature } from "./type";

type FeatureCardProps = {
    index: number
    feature: Feature
}

const FeatureCard: FC<FeatureCardProps> = (props) => {
    const { feature, index } = props;
    const { icon: FeatureIcon } = feature;
    return (
        <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="glass-card p-6 rounded-lg hover-lift"
        >
            <FeatureIcon className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">
                {feature.title}
            </h3>
            <p className="text-secondary">
                {feature.description}
            </p>
        </motion.div>
    )
}

export default FeatureCard;