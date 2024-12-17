import Image from "next/image";
import Link from "next/link";
import React from 'react';



export default function Home() {
  return (
    <div>
      <section className="pl-20 w-full bg-amber-100 max-md:pl-5 max-md:max-w-full" aria-label="Hero section">
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
        <div className="flex z-10 flex-col items-start self-stretch my-auto mr-0 font-medium text-black max-md:mt-10 max-md:max-w-full">
          <h1 className="self-stretch text-6xl max-md:max-w-full max-md:text-4xl">Rocket single seater</h1>
          <Link href="/shop" className="mt-9 text-2xl hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">Shop Now</Link>
          <div className="shrink-0 mt-3 h-0.5 border-2 border-black border-solid w-[121px]"></div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
        <Image  src="/assets/rocket-single-seater-1.png" alt="Rocket single seater 1"  height={1000} width={853}/>
      </div>
    </div>
     </section>

<section>
    <div className="flex flex-col">
      <div className="px-20 py-14 w-full bg-red-50 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {/* Left image column */}
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <Image
              loading="lazy"
              src="/assets/granite-square-side-table-1.png"
              alt="Side table product showcase"
              className="object-contain grow w-full aspect-[1.08] max-md:mt-10 max-md:max-w-full"
              width={500} // Add a width for optimization
              height={500} // Add a height for optimization
            />
          </div>

          {/* Right content column */}
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow items-start px-20 pt-96 pb-14 font-medium text-black min-h-[562px] max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
              
              {/* Background image */}
              <Image
                loading="lazy"
                src="/assets/cloud-sofa-three-seater+ottoman_31.png"
                alt="Side table background pattern"
                className="object-cover absolute inset-0 size-full"
                layout="fill" // Ensures the image covers the background area
                
              />
              
              {/* Content */}
              <div className="flex relative flex-col items-start max-w-full w-[182px] ">
                <h2 className=" self-stretch text-4xl">Side table</h2>
                <Link href="view-more"
                    className="mt-6  text-2xl hover:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    tabIndex={0}
                  >
                    View More
                  
                </Link>
                <div
                  className="shrink-0 mt-3 h-0.5 border-2 border-black border-solid w-[121px]"
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


 
</section>

    <section className="flex z-10 flex-col items-center px-20 py-14 mt-0 w-full bg-white max-md:px-5 max-md:max-w-full" aria-label="Top picks section">
    <h2 className="text-4xl font-medium text-black">Top Picks For You</h2>
    <p className="mt-3.5 text-base font-medium text-neutral-400 max-md:max-w-full">
      Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
    </p>
    <div className="mt-16 w-full max-w-[1240px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <article className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start text-black max-md:mt-8">
            <Image loading="lazy" src="/assets/trenton-modular-sofa_31.png" alt="Trenton modular sofa_3" className="object-contain self-stretch w-full rounded-none aspect-square" width={287} height={287}/>
            <h3 className="mt-3.5 text-base">Trenton modular sofa_3</h3>
            <p className="mt-3 text-2xl font-medium">Rs. 25,000.00</p>
          </div>
        </article>
        <article className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-start text-black max-md:mt-8">
            <Image loading="lazy" src="/assets/granite-dining-table-with-dining-chair1.png" alt="Granite dining table with dining chair" className="object-contain self-stretch w-full rounded-none aspect-square" width={287} height={287}/>
            <h3 className="mt-3.5 text-base">Granite dining table with dining chair</h3>
            <p className="mt-3 text-2xl font-medium">Rs. 25,000.00</p>
          </div>
        </article>
        <article className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-start text-black max-md:mt-8">
          <Image
        loading="lazy"
        src="/assets/outdoor-bar-table-and-stool-1.png"
        className="object-contain w-full"
        alt=""
        role="presentation"
        width={250} // You can specify a width if you need it, as Next.js requires dimensions
        height={252} // You can specify the height to match the aspect ratio
      />
            <h3 className="mt-3.5 text-base">Outdoor bar table and stool</h3>
            <p className="mt-3 text-2xl font-medium">Rs. 25,000.00</p>
          </div>
        </article>
        <article className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-start text-black max-md:mt-8">
            <Image loading="lazy" src="/assets/plain-console-with-teak-mirror1.png" alt="Plain console with teak mirror" className="object-contain self-stretch w-full rounded-none aspect-square" width={287} height={287}/>
            <h3 className="mt-3.5 text-base">Plain console with teak mirror</h3>
            <p className="mt-3 text-2xl font-medium">Rs. 25,000.00</p>
          </div>
        </article>
      </div>
    </div>
    <Link href="/view-more" className="mt-16 text-xl font-medium text-black hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black max-md:mt-10">View More</Link>
    <div className="shrink-0 mt-4 h-0.5 border-2 border-black border-solid w-[115px]"></div>
  </section>

  <section className="pr-20 mt-7 w-full bg-yellow-50 max-md:pr-5 max-md:max-w-full" aria-label="New arrivals">
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
      <Image
        loading="lazy"
        src="/assets/asgaard-sofa-1.png"
        alt="Hero section banner"
        className="object-contain w-full aspect-[1.18] max-w-[947px]"
        width={947} // Use the appropriate width
        height={947 / 1.18} // Calculate height based on aspect ratio
        tabIndex={0}
      />
      </div>
      <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col items-center self-stretch my-auto text-black max-md:mt-10">
          <h2 className="text-2xl font-medium">New Arrivals</h2>
          <h3 className="self-stretch text-5xl font-bold max-md:text-4xl">Asgaard sofa</h3>
          <button className="px-16 py-4 mt-8 max-w-full text-xl bg-yellow-50 border border-black border-solid w-[255px] max-md:px-5 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">Order Now</button>
        </div>
      </div>
    </div>
  </section>
  {/* Blog Section*/}
  <section className="flex flex-col items-center px-20 py-14 w-full bg-white max-md:px-5 max-md:max-w-full" aria-label="Blog posts">
    <h2 className="text-4xl font-medium text-black">Our Blogs</h2>
    <p className="mt-3.5 text-base font-medium text-neutral-400 max-md:max-w-full">Find a bright ideal to suit your taste with our great selection</p>
    <div className="mt-16 w-full max-w-[1240px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-8 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-center w-full text-black max-md:mt-8">
                  <Image
        loading="lazy"
        src="/assets/rectangle-13.png"
        alt="Blog post about millennial design"
        className="object-contain self-stretch w-full rounded-xl"
        width={500} // Adjust the width
        height={500} // Adjust the height based on aspect ratio (square in this case)
        style={{ aspectRatio: '1 / 1' }} // Maintains the aspect ratio as square
      />
                    <h3 className="self-stretch mx-7 mt-8 text-xl max-md:mx-2.5">Going all-in with millennial design</h3>
                    <Link href="/read-more" className="mt-2.5 text-2xl font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">Read More</Link>
                    <div className="shrink-0 mt-2 h-0.5 border-2 border-black border-solid w-[115px]"></div>
                    <div className="flex gap-2.5 mt-5 max-w-full text-base w-[223px]" aria-label="Post metadata">
                    <Image
        loading="lazy"
        src="/assets/group.png"
        alt=""
        className="object-contain shrink-0 my-auto aspect-square w-[18px]"
        width={18} // Set width to 18px as per the class `w-[18px]`
        height={18} // Set height to 18px to maintain square aspect ratio
      />
                      <span className="font-light">5 min</span>
                      <Image
        loading="lazy"
        src="/assets/uil_calender.png"
        alt=""
        className="object-contain shrink-0 self-start aspect-square w-[22px]"
        width={22} // Specify the width to 22px as per the class `w-[22px]`
        height={22} // Specify the height to 22px to maintain square aspect ratio
      />
                      <time dateTime="2022-10-12" className="font-light">12th Oct 2022</time>
                    </div>
                  </div>
                </article>
                <article className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-center w-full text-black max-md:mt-8">
                  <Image
        loading="lazy"
        src="/assets/rectangle-14.png"
        alt="Blog post about millennial design"
        className="object-contain self-stretch w-full rounded-xl aspect-square"
        width={500} // Set a specific width (for Next.js optimization)
        height={500} // Set a specific height (for Next.js optimization)
      />
                    <h3 className="self-stretch mx-7 mt-8 text-xl max-md:mx-2.5">Going all-in with millennial design</h3>
                    <Link href="/read-more" className="mt-2.5 text-2xl font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">Read More</Link>
                    <div className="shrink-0 mt-2 h-0.5 border-2 border-black border-solid w-[115px]"></div>
                    <div className="flex gap-2.5 mt-5 max-w-full text-base w-[223px]" aria-label="Post metadata">
                    <Image
        loading="lazy"
        src="/assets/group.png"
        alt=""
        className="object-contain shrink-0 my-auto aspect-square w-[18px]"
        width={18} // Explicit width to match w-[18px] in Tailwind
        height={18} // Explicit height to match aspect-square (square aspect ratio)
      />                      <span className="font-light">5 min</span>
      <Image
        loading="lazy"
        src="/assets/uil_calender.png"
        alt=""
        className="object-contain shrink-0 my-auto aspect-square w-[18px]"
        width={18} // Explicit width to match w-[18px] in Tailwind
        height={18} // Explicit height to match aspect-square (square aspect ratio)
      />                      <time dateTime="2022-10-12" className="font-light">12th Oct 2022</time>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="flex flex-col self-end mt-20 mr-32 max-w-full text-xl font-medium text-black w-[126px] max-md:mt-10 max-md:mr-2.5">
              <Link href="/view-all" className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">View All Post</Link>
              <div className="shrink-0 mt-4 w-full h-0.5 border-2 border-black border-solid max-md:mr-1.5"></div>
            </div>
          </div>
        </div>
        <article className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-center w-full text-black max-md:mt-8">
          <Image
        loading="lazy"
        src="/assets/rectangle15.png"
        alt="Blog post about millennial design"
        className="object-contain self-stretch w-full rounded-xl aspect-square"
        width={500}  // Specify width
        height={500} // Specify height to maintain the square aspect ratio
      />            <h3 className="self-stretch mt-8 mr-7 ml-7 text-xl max-md:mx-2.5">Going all-in with millennial design</h3>
            <Link href="/read-more" className="mt-2.5 text-2xl font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">Read More</Link>
            <div className="shrink-0 mt-2 h-0.5 border-2 border-black border-solid w-[115px]"></div>
            <div className="flex gap-2.5 mt-4 max-w-full text-base w-[223px]" aria-label="Post metadata">
            <Image
        loading="lazy"
        src="/assets/group.png"
        alt=""
        className="object-contain shrink-0 my-auto aspect-square w-[18px]"
        width={18}  // Set the width to 18px
        height={18} // Set the height to 18px to maintain aspect-square
      />              <span className="font-light">5 min</span>
      <Image
        loading="lazy"
        src="/assets/uil_calender.png"
        alt=""
        className="object-contain shrink-0 my-auto aspect-square w-[18px]"
        width={18} // Explicit width to match w-[18px] in Tailwind
        height={18} // Explicit height to match aspect-square (square aspect ratio)
      />               
      <time dateTime="2022-10-12" className="font-light">12th Oct 2022</time>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
  <section className="flex relative flex-col justify-center items-center px-20 py-32 w-full text-xl text-black min-h-[450px] max-md:px-5 max-md:py-24 max-md:max-w-full" aria-label="Instagram section">
  <Image
        loading="lazy"
        src="/assets/rectangle-17.png"
        alt=""
        className="object-cover absolute inset-0"
        layout="fill" // Ensures the image covers the full parent container
        objectFit="cover" // Ensures the image is properly covered within the container
      />    <div className="flex relative flex-col items-center mb-0 max-w-full w-[454px] max-md:mb-2.5">
      <h2 className="self-stretch text-6xl font-bold max-md:max-w-full max-md:text-4xl">Our Instagram</h2>
      <p>Follow our store on Instagram</p>
      <Link href="https://instagram.com" className="px-16 py-4 mt-5 max-w-full bg-red-50 rounded-[50px] w-[255px] max-md:px-5 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">Follow Us</Link>
    </div>
  </section>


    


    
    </div>
  );
}
