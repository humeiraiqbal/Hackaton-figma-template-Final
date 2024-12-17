import Image from "next/image";
import Link from "next/link";

export default function Contact(){
    return(
<div>
  <div className="flex flex-col text-black whitespace-nowrap">
  <div className="flex relative flex-col justify-center items-center px-20 py-28 w-full min-h-[316px] max-md:px-5 max-md:pt-24 max-md:max-w-full"
    role="banner"
    aria-label="Contact page hero section"
  >
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/994d2cee0a74a300e7e875a7aa49c05fe08e475e64b98c8cab43e2bf378568d3?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e"
      className="object-cover absolute inset-0 size-full"
      alt=""
      aria-hidden="true"
    />
    <div className="flex relative flex-col max-w-full w-[196px]">
      <h1 className="text-5xl font-medium max-md:text-4xl">Contact</h1>
      <nav className="flex gap-1.5 self-end text-base max-md:mr-2.5" aria-label="Breadcrumb">
        <a href="/" className="grow font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Home</a>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/db13939cabd153a09de09c25864d1f622bda5d116dbe6552d6605aca283c27a4?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e"
          className="object-contain shrink-0 my-auto w-5 aspect-square"
          alt=""
          aria-hidden="true"
        />
        <span className="font-light" aria-current="page">Contact</span>
      </nav>
    </div>
  </div>
</div>




  <main className="flex flex-col items-center px-20 pt-24 w-full bg-white max-md:px-5 max-md:max-w-full">
    <div className="flex flex-col items-center w-full max-w-[1058px] max-md:max-w-full">
      <h1 className="text-4xl font-semibold text-black">Get In Touch With Us</h1>
      <p className="mt-2 text-base text-center text-neutral-400 w-[644px] max-md:max-w-full">
        For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>
      <div className="self-stretch mt-3.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
            <address className="flex flex-col px-12 py-16 mx-auto mt-16 w-full text-black bg-white max-md:px-5 max-md:mt-10 not-italic">
              <div className="flex gap-8 self-start max-md:ml-2">
              <Image
  loading="lazy"
  src="/assets/address.png"
  alt="Location Icon"
  className="object-contain shrink-0 self-start mt-1"
  width="22"
  height="28"
/>
                <div className="flex flex-col">
                  <h2 className="self-start text-2xl font-medium">Address</h2>
                  <p className="text-base">236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>
              <div className="flex gap-8 self-start mt-11 text-2xl font-medium whitespace-nowrap max-md:mt-10">
              <Image
  loading="lazy"
  src="/assets/phone.png"
  alt="Phone Icon"
  className="object-contain shrink-0 my-auto aspect-square"
  width="30"
  height="30"
/>
                <h2>Phone</h2>
              </div>
              <p className="text-base">
                Mobile: <Link href="tel:+84546-6789" className="hover:underline">+(84) 546-6789</Link><br/>
                Hotline: <Link href="tel:+84456-6789" className="hover:underline">+(84) 456-6789</Link>
              </p>
              <div className="flex gap-5 justify-between mt-11 max-md:mt-10 max-md:ml-2">
              <Image
  loading="lazy"
  src="/assets/clock.png"
  alt="Clock Icon"
  className="object-contain shrink-0 self-start mt-1.5 aspect-square"
  width="23"
  height="23"
/>
                <div className="flex flex-col">
                  <h2 className="self-start text-2xl font-medium">Working Time</h2>
                  <p className="text-base">
                    Monday-Friday: 9:00 - 22:00<br/>
                    Saturday-Sunday: 9:00 - 21:00
                  </p>
                </div>
              </div>
            </address>
          </div>
          <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
            <form className="flex flex-col grow items-start pt-28 pr-8 pb-16 pl-20 w-full text-base text-black bg-white max-md:px-5 max-md:pt-24 max-md:mt-8 max-md:max-w-full">
              <label htmlFor="name" className="font-medium">Your name</label>
              <input type="text" id="name" name="name" placeholder="Abc" className="self-stretch px-8 py-7 mt-6 bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:px-5 max-md:max-w-full"/>
              
              <label htmlFor="email" className="mt-9 font-medium">Email address</label>
              <input type="email" id="email" name="email" placeholder="Abc@def.com" className="self-stretch px-8 py-7 mt-6 bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:px-5 max-md:max-w-full"/>
              
              <label htmlFor="subject" className="mt-9 font-medium">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="This is an optional" className="self-stretch px-8 py-7 mt-6 bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:px-5 max-md:max-w-full"/>
              
              <label htmlFor="message" className="mt-9 font-medium">Message</label>
              <textarea id="message" name="message" placeholder="Hi! i'd like to ask about" className="self-stretch px-8 pt-7 pb-16 mt-6 bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:px-5 max-md:mr-1 max-md:max-w-full"></textarea>
              
              <button type="submit" className="px-16 py-3 mt-12 max-w-full whitespace-nowrap rounded-2xl border border-black border-solid w-[237px] max-md:px-5 max-md:mt-10 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>

  <section className="px-20 py-24 w-full bg-red-50 max-md:px-5 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow max-md:mt-10">
          <h2 className="self-start text-3xl font-medium text-black">Free Delivery</h2>
          <p className="text-xl text-neutral-400">For all oders over $50, consectetur adipim scing elit.</p>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow max-md:mt-10">
          <h2 className="self-start text-3xl font-medium text-black">90 Days Return</h2>
          <p className="text-xl text-neutral-400">If goods have problems, consectetur adipim scing elit.</p>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow max-md:mt-10">
          <h2 className="self-start text-3xl font-medium text-black">Secure Payment</h2>
          <p className="text-xl text-neutral-400">100% secure payment, consectetur adipim scing elit.</p>
        </div>
      </div>
    </div>
  </section>
</div>
         
    );
}