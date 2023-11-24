import logo from '../../assets/images/logo.png';
import { SocialIcon } from 'react-social-icons'


const Footer = () => {
    return (
        <div>
            <footer className="py-10 bg-base-200 text-base-content">
                <div>
                    <div className="footer flex flex-col md:flex-col lg:flex-row justify-between py-10 container mx-auto px-5">
                        <aside>
                            <img className='w-20' src={logo} alt="" />
                            <p className="text-sm md:text-2xl font-extrabold">Food <span className="text-[#03a9fc]">Sharing</span></p>
                            <p>Providing reliable tech since 2000</p>
                        </aside>
                        <nav>
                            <header className="text-lg text-[#03a9fc] font-extrabold mb-4">Services</header>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </nav>
                        <nav>
                            <header className="text-lg text-[#03a9fc] font-extrabold mb-4">Company</header>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Available Food</a>
                            <a className="link link-hover">Press kit</a>
                        </nav>
                        <nav>
                            <header className="text-lg text-[#03a9fc] font-extrabold mb-4">Social Links</header>
                            <div className="flex flex-wrap justify-center gap-4">
                                <SocialIcon url="https://twitter.com"></SocialIcon>
                                <SocialIcon url="https://www.facebook.com/"></SocialIcon>
                                <SocialIcon url="https://instagram.com"></SocialIcon>
                                <SocialIcon url="https://www.linkedin.com/"></SocialIcon>
                            </div>

                            <div>
                                <header className="text-lg text-[#03a9fc] font-extrabold mt-4">Address</header>
                                <h2>Sylhet Bangladesh</h2>
                            </div>
                        </nav>
                        <div>
                            <header className="text-lg text-[#03a9fc] font-extrabold mb-4">Contact</header>
                            <div className="my-1">
                                <h2 className="font-bold">Phone Number</h2>
                                <p>+880XXXXXXXXXX</p>
                                <p>+880XXXXXXXXXX</p>
                            </div>

                            <div>
                                <h2 className="font-bold">Web Address</h2>
                                <p>info@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='bg-[#03a9fc] text-white py-5'>
                <p className='text-center px-5 text-sm'>Copyright © 2023 - All right reserved by Ismat Jerin</p>
            </div>
        </div>
    );
};

export default Footer;