import Flavor from "@/api/flavor-interface";
import FlavorImage from "./flavor-image";

interface FlavorProps {
    flavor: Flavor
}

export default function FlavorRow({ flavor }: FlavorProps) {

    return (
        <tr key={flavor._id} className="bg-white border-b mb-4 pb-4 border-gray-300">
            <td className="flex items-center">
                <FlavorImage flavor={flavor} />
                <span className="">{flavor.flavor.charAt(0).toUpperCase() + flavor.flavor.slice(1)}</span>
            </td>
            <td>{!flavor.category["pre-roll"] ? <span><span className="text-xs">&gt;</span>0.01</span> : ((flavor.category["pre-roll"] * 100) / flavor.total).toFixed(2)}%</td>
            <td>{!flavor.category.vape ? <span><span className="text-sm">&gt;</span>0.01</span> : ((flavor.category.vape * 100) / flavor.total).toFixed(2)}%</td>
            <td>{!flavor.category.hybrid ? <span><span className="text-sm">&gt;</span>0.01</span> : ((flavor.category.hybrid * 100) / flavor.total).toFixed(2)}%</td>
            <td>{!flavor.category.extract ? <span><span className="text-sm">&gt;</span>0.01</span> : ((flavor.category.extract * 100) / flavor.total).toFixed(2)}%</td>
            <td>{!flavor.category.sativa ? <span><span className="text-sm">&gt;</span>0.01</span> : ((flavor.category.sativa * 100) / flavor.total).toFixed(2)}%</td>
            <td>{!flavor.category.edible ? <span><span className="text-sm">&gt;</span>0.01</span> : ((flavor.category.edible * 100) / flavor.total).toFixed(2)}%</td>
            <td>{!flavor.category.indica ? <span><span className="text-sm">&gt;</span>0.01</span> : ((flavor.category.indica * 100) / flavor.total).toFixed(2)}%</td>
            <td>{!flavor.category.tincture ? <span><span className="text-sm">&gt;</span>0.01</span> : ((flavor.category.tincture * 100) / flavor.total).toFixed(2)}%</td>
        </tr>);
}