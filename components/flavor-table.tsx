'use client'
import Flavor from "@/api/flavor-interface";
import FlavorRow from "./flavor-row";
import { useState } from "react";
import useSWR, { Fetcher } from 'swr';

interface FlavorsProps {
    flavors: Flavor[]
}

export default function FlavorTable({ flavors }: FlavorsProps) {

    // const fetcher: Fetcher<any[]> =  = url => fetch(url).then(result => result.json())
    // const { data, error, isLoading } = useSWR('http://localhost:8080/flavors', fetcher)

    // if (error) return <div>failed to load</div>

    // if (isLoading) return <div>loading...</div>

    const [displayedRows, setDisplayedRows] = useState(5);

    const handleExpand = () => {
        setDisplayedRows((prevRows) => (prevRows === 5 ? 10 : 5));
    };

    return (
        <div style={{ width: '730px', margin: 'auto', marginTop: '20px' }}>
            <h1 className="text-2xl font-bold mb-4">TRENDING FLAVORS</h1>
            <table style={{ width: '100%', marginTop: '20px' }}>
                <thead>
                    <tr className="text-left">
                        <th >SKU flavor</th>
                        <th >Pree-Roll</th>
                        <th >Vape</th>
                        <th >Hybrid</th>
                        <th >Extrat</th>
                        <th >Sativa</th>
                        <th >Edible</th>
                        <th >Indica</th>
                        <th >Tincture</th>
                    </tr>
                </thead>
                <tbody >
                    {flavors.slice(0, displayedRows).map((flavor) => (
                        <FlavorRow key={flavor._id} flavor={flavor} />
                    ))}
                </tbody>
            </table>
            <div className="flex justify-end mb-4">
                <button
                    className="mt-4 p-2 text-black rounded"
                    onClick={handleExpand}
                >
                    {displayedRows === 5 ? 'Expand >>' : '<< Collapse'}
                </button>
            </div>
        </div>
    );
};


