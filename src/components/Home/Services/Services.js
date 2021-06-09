import React from 'react';
import normalCar from '../../../images/normal-car.jpg';
import privateCar from '../../../images/normal-private-car.png';
import standardOfficeCar from '../../../images/standard-office-car.png';
import standardFamilyCar from '../../../images/standard-family-car.webp';
import familyCar from '../../../images/family-car.png';
import fieldWorkingCar from '../../../images/field-working-car.png';
import microBus from '../../../images/microbus.png';

const Services = () => {
    return (
        <>
            <div className="flex justify-center items-center">
                <h2 className="lg:text-5xl md:text4-xl sm:text-3xl text-2xl font-indigo mb-14 mt-14 bg-purple-400 shadow-lg rounded"> Rentals Options & Services </h2></div>

            <div id="services" className="service-card">
                <img src={normalCar} alt="" className="h-full rounded mb-20 shadow" />
                <div className="card-header shadow-lg">
                    <h2 className="card-head">Normal Car</h2>
                    <p className="mb-2">Normal, Cheap, Affordable, Toyota Car</p>
                    <span className="">$220 - for 2 days</span>
                </div>
            </div>
            <div className="service-card">
                <img src={privateCar} alt="" className="h-full rounded mb-20 shadow" />
                <div className="card-header shadow-lg">
                    <h2 className="card-head">Private Car</h2>
                    <p className="mb-2">Normal, Affordable, Private Toyota Car.</p>
                    <span className="">$200 - for 2 days</span>
                </div>
            </div>
            <div className="service-card">
                <img src={normalCar} alt="" className="h-full rounded mb-20 shadow" />
                <div className="card-header shadow-lg">
                    <h2 className="card-head">Private Car</h2>
                    <p className="mb-2">Normal, Affordable, Private Toyota Car.</p>
                    <span className="">$200 - for 2 days</span>
                </div>
            </div>
            <div className="service-card">
                <img src={standardOfficeCar} alt="" className="h-full rounded mb-20 shadow" />
                <div className="card-header shadow-lg">
                    <h2 className="card-head">Office Car</h2>
                    <p className="mb-2">Classic, Stylish Affordable, Standard Office Car.</p>
                    <span className="">$1000 - for 20 days</span>
                </div>
            </div>
            <div className="service-card">
                <img src={standardFamilyCar} alt="" className="h-full rounded mb-20 shadow" />
                <div className="card-header shadow-lg">
                    <h2 className="card-head">Family Car</h2>
                    <p className="mb-2">Normal, Affordable, Standard Car For Standard Size Family.</p>
                    <span className="">$1700 - for 30 days</span>
                </div>
            </div>
            <div className="service-card">
                <img src={familyCar} alt="" className="h-full rounded mb-20 shadow" />
                <div className="card-header shadow-lg">
                    <h2 className="card-head">Family Car</h2>
                    <p className="mb-2">Family Car for all sizes, Dashing Look, Maevellous paint Finishing. Extra Luggage Space.</p>
                    <span className="">$1500 - for 24 days</span>
                </div>
            </div>
            <div className="service-card">
                <img src={fieldWorkingCar} alt="" className="h-full rounded mb-20 shadow" />
                <div className="card-header shadow-lg">
                    <h2 className="card-head">Field Tour Working Car</h2>
                    <p className="mb-2">Large, Cool Look, Off-Roader,Field Trip car For Official visit and working purpose.</p>
                    <span className="">$800 - for 7 days</span>
                </div>
            </div>
            <div className="service-card">
                <img src={microBus} alt="" className="h-full rounded mb-20 shadow" />
                <div className="card-header shadow-lg">
                    <h2 className="card-head text-5xl">Micro Bus</h2>
                    <p className="mb-2">14 Seater extra space, Affordable Microbus for Office/Family/Group Picnic.</p>
                    <span className="">$800 - for 7 days</span>
                </div>
            </div>
        </>
    );
};

export default Services;