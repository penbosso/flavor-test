import Flavor from "@/api/flavor-interface";
import Image from "next/image";

interface FlavorProps {
    flavor: Flavor
}

export default function FlavorImage({ flavor }: FlavorProps) {

    return (
        <div style={{ position: 'relative' }}>
            <div
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#FF4500',
                    borderBottomLeftRadius: '7px',
                    borderTopRightRadius: '7px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <span className="text-xs" style={{ color: 'white' }}> {!flavor.category.grow ? 0 : flavor.category.grow} </span>
            </div>
            <Image className="m-1"
                src={flavor.image}
                alt={flavor.flavor}
                width={60}
                height={60}
            />
        </div>)
}