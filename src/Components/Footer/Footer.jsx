import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
    return (
        <div className="bg-black text-white grid grid-cols-5 pl-9 pr-52 pt-6">
            <div>
                <h1 className="font-bold text-2xl">CareerHub</h1>
                <p className="w-80">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                <div className="ml-5">
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    <FontAwesomeIcon className="ml-4" icon={faInstagram}></FontAwesomeIcon>
                    <FontAwesomeIcon className="ml-4" icon={faTwitter}></FontAwesomeIcon>
                </div>
            </div>
            <div>
                <h1 className="font-bold text-2xl">Company</h1>

            </div>
            <div>
                <h1 className="font-bold text-2xl">Product</h1>
            </div>
            <div>
                <h1 className="font-bold text-2xl">Support</h1>
            </div>
            <div>
                <h1 className="font-bold text-2xl">Contact</h1>
            </div>

        </div>
    );
};

export default Footer;