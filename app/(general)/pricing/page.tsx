import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Pricing',
 description: 'Pricing Cristian Guerrero',
 keywords:['Pricing', 'precios']
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}
