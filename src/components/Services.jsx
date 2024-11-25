import img1 from '../img/bubble1.png';
import img2 from '../img/bubble2.png';
import img3 from '../img/bubble3.png';
import img4 from '../img/bubble4.png';
import img7 from '../img/bubble7.png';
import img6 from '../img/bubble6.png';

const Services = () => {
    return (
        <section id="services" className="flex flex-col items-center font-raleway text-xl w-full py-5 px-6 md:px-0">
            <h1 className="text-center font-bold">Do you want to try our flavors?</h1>
            <div className="flex flex-wrap md:flex-row w-full">
                <div className="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                    <img src={img1} className="w-32 h-32" alt=""/>
                        <p className="text-center">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                    <img src={img2} className="w-32 h-32" alt=""/>
                        <p className="text-center">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                    <img src={img3} className="w-32 h-32" alt=""/>
                        <p className="text-center">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                    <img src={img4} className="w-32 h-32" alt=""/>
                        <p className="text-center">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                    <img src={img7} className="w-32 h-32" alt=""/>
                        <p className="text-center">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                    <img src={img6} className="w-32 h-32" alt=""/>
                        <p className="text-center">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </section>
    )
}

export default Services;