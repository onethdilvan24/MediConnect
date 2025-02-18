

// Image
import image01 from "../Images/medicin.jpg";
import image02 from "../Images/medicin_2.avif";
import image03 from "../Images/medicin_3.jpg";



export const ShopHeader = () => {
    return (



      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            
            <div className="max-w-xl mb-6">
            <h1 className="tracking-loose text-3xl font-black text-[#1363DF] md:text-4xl">
                MEDI<span className="text-[#58bcd0]">CONNECT</span>
              </h1>
              <p className="text-sm italic text-[#06283D]">
              MediConnect simplifies access to essential medications by connecting you with trusted pharmacies and healthcare providers. Our platform ensures a seamless and reliable way to manage prescriptions, find the best deals on medicines, and stay informed about your health. Experience hassle-free healthcare with just a few clicks
              </p>
            </div>
            
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src={image01}
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src={image02}
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src={image03}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  };