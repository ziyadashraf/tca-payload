import Link from 'next/link'
import Image from 'next/image'
import Branding from "@/public/BrandingDark.svg"
import Campaigns from "@/public/CampaignsDark.svg"
import Animations from "@/public/3danimationDark.svg"
import Motion from "@/public/motiongraphicsDark.svg"
import Events from "@/public/eventsDark.svg"
import WebDevelopment from "@/public/webdevelopmentDark.svg"

const services = [
    {
        service: "Branding",
        description: "Our branding services are tailored to establish a strong and impactful brand identity for your business. We focus on creating visual elements that resonate with your target audience and convey your brand's essence.",
        image: Branding,
        link: "#branding",
        type: "white"
    },
    {
        service: "Campaigns",
        description: "Our team at TCA specializes in crafting creative concepts and content creation tailored for diverse media platforms, including Out-of-Home (OOH), social media, and TV commercials. We pride ourselves on delivering innovative designs and captivating content that captivates audiences across all channels, ensuring maximum impact and engagement for our clients' brands.",
        image: Campaigns,
        link: "#campaigns",
        type: "gray"
    },
    {
        service: "3D Animations",
        description: "Immerse your audience in compelling 3D animated visuals that leave a lasting impression. Our 3D animation services elevate your brand's storytelling and provide an immersive experience that resonates with your target audience.",
        image: Animations,
        link: "#3d-animations",
        type: "white"
    },
    {
        service: "Motion graphic design",
        description: "With our motion graphic design expertise, we bring your ideas to life through captivating visual storytelling. Our dynamic approach to motion graphics enhances brand narratives and engages audiences across various platforms.",
        image: Motion,
        link: "#motion-graphics",
        type: "gray"
    },
    {
        service: "Events design",
        description: "All creative solutions for your event are covered. From print designs to immersive 3D booth experiences, our team is dedicated to bringing your vision to life. Whether you're planning a corporate conference, a trade show, or a special event, we elevate your brand and make a lasting impression.",
        image: Events,
        link: "#events",
        type: "white"
    },
    {
        service: "Web development",
        description: "TCA Developers specializes in crafting custom websites that prioritize user experience and visual appeal. They leverage cutting-edge technology to create solutions that empower businesses of all sizes to thrive online.",
        image: WebDevelopment,
        link: "#web-development",
        type: "gray"
    }
]

export default function Services() {
    return (
        <div className="bg-white pb-24 sm:py-32 px-60">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="mx-auto  max-w-2xl   lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-24 lg:max-w-none lg:grid-cols-2">
                        {services.map((service) => (
                            <div key={service.service} className="flex flex-col">
                                <dt className="flex items-center gap-x-3  font-semibold  text-gray-900 text-lg">
                                    <Image src={service.image} alt={service.service} aria-hidden="true" className=" flex-none" width={50} height={50} />
                                    {service.service}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-700">
                                    <p className="flex-auto">{service.description}</p>
                                    <p className="mt-6">
                                        <Link href={service.link} className='bg-black text-white text-sm font-medium px-4 py-3 '>
                                            Discover More
                                        </Link>
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
