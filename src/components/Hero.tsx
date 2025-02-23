'use client'

import { useState } from 'react'
import Image from 'next/image'
import HeroImage from '@/public/images/Heros.png'




export default function Hero() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-gray-900">

            <div className="relative isolate overflow-hidden pt-14">
                <Image
                    alt=""
                    src={HeroImage}
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                    width={1920}
                    height={1080}
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 ">
                    <div className="text-center">
                        <h1 className="text-4xl font-medium tracking-tight text-black sm:text-6xl">
                            Welcome to<br />
                            The Cloud Agency
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-gray-800">
                            The first cloud agency based in the Kingdom of Saudi Arabia.
                        </p>

                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="bg-gradient-to-b from-transparent via-black/90 to-black min-h-[800px] p-64 pb-24 flex flex-col justify-end items-end">
                    <h6 className='text-white font-normal text-2xl mb-4 text-justify'>At TCA, we're all about changing how businesses see design and creativity,
                        We bring fresh ideas and one of a kind solutions to every project, pushing the boundaries of what design can do.
                    </h6>
                    <p className='text-white text-lg text-justify'>
                        Our team of professional designers and creative experts are dedicated to delivering exceptional results that exceed our clients'
                        expectations. We are committed to pushing boundaries and creating memorable experiences through our work.
                    </p>
                </div>
            </div>

        </div>
    )
}
