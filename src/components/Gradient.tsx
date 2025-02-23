import React from 'react'

const Gradient = () => {
    return (
        <div className=" h-40 p-64 pt-40 pb-40 flex flex-col justify-center items-start" style={{
            background: `radial-gradient(circle at 62.916666666666664% 69.16666666666667%, #098BE1 0%, 20%, rgba(9, 139, 225, 0) 40%),
                        radial-gradient(circle at 6.503906249999999% 88.037109375%, rgba(253, 253, 24, 0.99) 0%, 25%, rgba(253, 253, 24, 0) 50%),
                        radial-gradient(circle at 6.165364583333333% 12.617187499999998%, #076DB1 0%, 42%, rgba(7, 109, 177, 0) 70%),
                        radial-gradient(circle at 93.6865234375% 11.42578125%, #E10943 0%, 42%, rgba(225, 9, 67, 0) 70%),
                        radial-gradient(circle at 48.9013671875% 49.521484375%, #FFFFFF 0%, 100%, rgba(255, 255, 255, 0) 100%)`
        }}>
            <h6 className='text-black text-xl font-light mb-8 uppercase'>Our Services</h6>

            <p className='text-black text-3xl font-medium w-1/2'>We Offer a Wide Range of Creative Solutions

            </p>
        </div>
    )
}

export default Gradient