import Image from "next/image";
import Link from "next/link";

export default function CartSidebar(){
    return(
  <main>

    <nav className="flex gap-3.5 items-center px-20 py-8 mt-3.5 text-base bg-white text-neutral-400 max-md:px-5" aria-label="Breadcrumb">
      <Link href="/" className="self-stretch my-auto hover:text-black">Home</Link>
      <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/96554a9f86bd3fd8c39408fbbd8fa8ea76b10f4a501e0797d8eeff82580216d1?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="" 
  className="object-contain shrink-0 self-start w-7 aspect-square"
  width="28" 
  height="28"
/>
      <Link href="/shop" className="self-stretch my-auto hover:text-black">Shop</Link>
      <Image 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/db13939cabd153a09de09c25864d1f622bda5d116dbe6552d6605aca283c27a4?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="" 
  className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
  width="20" 
  height="20"
/>
      <div className="shrink-0 self-start w-0.5 border-2 border-solid border-neutral-400 h-[37px]" aria-hidden="true"></div>
      <div className="grow shrink self-stretch my-auto text-black w-[1014px] max-md:max-w-full">Asgaard sofa</div>
    </nav>

    <main className="flex flex-col w-full bg-white max-md:max-w-full">
      <section className="flex z-10 flex-col pl-20 mt-0 w-full max-md:pl-5 max-md:mt-0 max-md:max-w-full" aria-label="Product details">
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
            <Image 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/219fef56aee837c5804022740f4acce9430e35e81f9e83bbbb7ec919233c0777?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Asgaard sofa full view" 
  className="object-contain grow mt-60 w-full rounded-none max-md:mt-10 max-md:max-w-full" 
  width="800" 
  height="720" 
/>
            </div>
            <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-start mt-60 mr-0 w-full max-md:mt-10">
                      <h1 className="text-5xl text-black">Asgaard sofa</h1>
                      <div className="text-2xl font-medium text-neutral-400">Rs. 250,000.00</div>
                      <div className="flex gap-5 items-center mt-2.5 text-sm text-neutral-400">
                        <div className="flex" role="group" aria-label="Product rating">
                        <Image 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/93751e7dce79072060a5e13810dc33410927ff81e1c0b77c94d4274e8d9ee6fa?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="5 star rating" 
  className="object-contain shrink-0 self-stretch my-auto max-w-full aspect-[6.21] w-[124px]" 
  width="124" 
  height="20" 
/>
                        </div>
                        <div className="shrink-0 self-stretch w-px border border-solid border-neutral-400 h-[30px]" aria-hidden="true"></div>
                        <div className="self-stretch my-auto basis-auto">5 Customer Review</div>
                      </div>
                      <p className="self-stretch mt-3.5 text-sm text-black">
                        Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                      </p>

                      <form className="w-full" aria-label="Product options">
                        <fieldset className="border-0 p-0 mt-8">
                          <legend className="text-sm text-neutral-400">Size</legend>
                          <div className="flex gap-4 mt-3 text-sm text-black whitespace-nowrap">
                            <label className="sr-only" htmlFor="size-l">Large</label>
                            <input type="radio" id="size-l" name="size" value="L" className="hidden peer" />
                            <div className="px-3 bg-amber-100 rounded-md h-[30px] w-[30px] flex items-center justify-center cursor-pointer">L</div>

                            <label className="sr-only" htmlFor="size-xl">Extra Large</label>
                            <input type="radio" id="size-xl" name="size" value="XL" className="hidden peer" />
                            <div className="px-2 bg-red-50 rounded-md h-[30px] w-[30px] flex items-center justify-center cursor-pointer">XL</div>

                            <label className="sr-only" htmlFor="size-xs">Extra Small</label>
                            <input type="radio" id="size-xs" name="size" value="XS" className="hidden peer" />
                            <div className="px-2 bg-red-50 rounded-md h-[30px] w-[30px] flex items-center justify-center cursor-pointer">XS</div>
                          </div>
                        </fieldset>

                        <fieldset className="border-0 p-0 mt-5">
                          <legend className="text-sm text-neutral-400">Color</legend>
                          <div className="flex gap-4 mt-3">
                            <label className="sr-only" htmlFor="color-purple">Purple</label>
                            <input type="radio" id="color-purple" name="color" value="purple" className="hidden peer" />
                            <div className="flex shrink-0 bg-violet-500 h-[30px] rounded-[50px] w-[30px] cursor-pointer"></div>

                            <label className="sr-only" htmlFor="color-black">Black</label>
                            <input type="radio" id="color-black" name="color" value="black" className="hidden peer" />
                            <div className="flex shrink-0 bg-black h-[30px] rounded-[50px] w-[30px] cursor-pointer"></div>

                            <label className="sr-only" htmlFor="color-orange">Orange</label>
                            <input type="radio" id="color-orange" name="color" value="orange" className="hidden peer" />
                            <div className="flex shrink-0 bg-orange-300 h-[30px] rounded-[50px] w-[30px] cursor-pointer"></div>
                          </div>
                        </fieldset>

                        <div className="flex gap-5 mt-8 text-black">
                          <div className="flex gap-9 px-4 py-5 text-base whitespace-nowrap bg-white rounded-xl border border-solid border-neutral-400">
                            <button type="button" aria-label="Decrease quantity" className="hover:opacity-75">-</button>
                            <span className="font-medium">1</span>
                            <button type="button" aria-label="Increase quantity" className="hover:opacity-75">+</button>
                          </div>
                          <button type="submit" className="px-12 py-4 text-xl rounded-2xl border border-black border-solid max-md:px-5 hover:bg-black hover:text-white transition-colors">
                            Add To Cart
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <aside className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col py-7 mx-auto w-full bg-white">
                      <div className="flex flex-col px-7 w-full max-md:px-5">
                        <div className="flex gap-10 text-2xl font-semibold text-black">
                          <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                            <h2 className="self-start">Shopping Cart</h2>
                            <div className="shrink-0 mt-6 h-px border border-solid border-zinc-300"></div>
                          </div>
                          <button aria-label="Close cart" className="hover:opacity-75">
                          <Image 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0437d0c5a7638f4060848c3d5d0689ccf273f09ac94a85613eae008cb7208d5?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="" 
  className="object-contain shrink-0 self-start mt-2 aspect-[0.89] w-[17px]" 
  width="17" 
  height="19"
/>

                          </button>
                        </div>

                        <div className="flex gap-5 justify-between items-center mt-11 text-black max-md:mt-10">
                        <Image 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7b5f1b37a5c5eca698132687f5ccdea4adf026579fce1e45a21758e4e2eb83c?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Asgaard sofa thumbnail" 
  className="object-contain shrink-0 self-stretch max-w-full rounded-none aspect-[1.03] w-[108px]" 
  width="108" 
  height="105"
/>
                          <div className="flex flex-col self-stretch my-auto">
                            <div className="self-start text-base">Asgaard sofa</div>
                            <div className="flex gap-4 items-center mt-2 text-xs font-light">
                              <div className="self-stretch text-base">1</div>
                              <div className="self-stretch my-auto">X</div>
                              <div className="self-stretch my-auto font-medium text-yellow-600">Rs. 250,000.00</div>
                            </div>
                          </div>
                          <button aria-label="Remove item from cart">
                          <Image 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e76aaf73aede341423e06be787ec1e0789c3e4d93c389e11c72d7e90340fd140?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="" 
  className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square hover:opacity-75" 
  width="20" 
  height="20" 
/>
                          </button>
                        </div>

                        <div className="flex gap-5 justify-between mt-96 max-w-full text-base w-[286px] max-md:mt-10">
                          <div className="text-black">Subtotal</div>
                          <div className="font-semibold text-yellow-600">Rs. 250,000.00</div>
                        </div>
                      </div>

                      <div className="shrink-0 mt-6 h-px border border-solid border-zinc-300"></div>

                      <div className="flex gap-7 self-start mt-7 ml-7 text-xs text-black max-md:ml-2.5">
                        <Link href="/cart" className="px-9 py-2 border border-black border-solid rounded-[50px] max-md:px-5 hover:bg-black hover:text-white transition-colors">View Cart</Link>
                        <Link href="/checkout" className="px-9 py-2 whitespace-nowrap border border-black border-solid rounded-[50px] max-md:px-5 hover:bg-black hover:text-white transition-colors">Checkout</Link>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-14 mr-24 max-w-full w-[605px] max-md:mt-10 max-md:mr-2.5" />

        <dl className="flex flex-col gap-3 ml-24 mt-10 max-md:mt-10">
          <div className="flex gap-5 justify-between max-w-full text-base whitespace-nowrap text-neutral-400 w-[151px]">
            <dt>SKU</dt>
            <dd className="flex gap-3">
              <span className="font-medium">:</span>
              <span>SS001</span>
            </dd>
          </div>

          <div className="flex gap-3 max-w-full text-base whitespace-nowrap text-neutral-400 w-[152px]">
            <dt className="grow">Category</dt>
            <dd className="flex gap-3">
              <span className="font-medium">:</span>
              <span>Sofas</span>
            </dd>
          </div>

          <div className="flex gap-5 justify-between ml-16 max-w-full text-base text-neutral-400 w-[297px]">
            <dt>Tags</dt>
            <dd className="flex gap-3">
              <span className="font-medium">:</span>
              <span className="basis-auto">Sofa, Chair, Home, Shop</span>
            </dd>
          </div>
        </dl>

        <div className="flex gap-5 justify-between self-end mt-2.5 mr-72 max-w-full w-[404px] max-md:mr-2.5">
          <div className="flex gap-6 items-start self-start">
            <div className="self-stretch text-base text-neutral-400">Share</div>
            <div className="flex gap-3 text-base font-medium whitespace-nowrap text-neutral-400">
              <span>:</span>
              <Link href="#" aria-label="Share on Facebook">
              <Image 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e45200ecb98448187b4708bfcd68be977e115d7a68c79fbf08cb32fbee64df33?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="" 
  className="object-contain shrink-0 self-start mt-1 w-5 aspect-square hover:opacity-75" 
  width="20" 
  height="20" 
/>
              </Link>
            </div>
            <div className="flex gap-6">
              <Link href="#" aria-label="Share on LinkedIn">
              <Image 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a9825cc0130d2a05099343a2e56de9762f4cc7f8c5349a9eb9406ac707bb35b?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="" 
  className="object-contain shrink-0 my-auto w-5 aspect-square hover:opacity-75" 
  width="20" 
  height="20" 
/>
              </Link>
              <Link href="#" aria-label="Share on Twitter">
              <Image 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac547bd4addefd8e4b2d50f2cd114a8157c1961189437cc9486cc350f82eadb2?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="" 
  className="object-contain shrink-0 aspect-square w-[25px] hover:opacity-75" 
  width="25" 
  height="25" 
/>
              </Link>
            </div>
          </div>
          <Link href="#" aria-label="Share on Instagram">
          <Image 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/74103b59eddb809277f2f1c90b0f6fe6242321fb50015d603656eb0cb18ded6d?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="" 
  className="object-contain shrink-0 aspect-[0.81] w-[25px] hover:opacity-75" 
  width="25" 
  height="31" 
/>
          </Link>
        </div>
      </section>

      <hr className="mt-14 w-full border border-solid border-zinc-300 min-h-[1px] max-md:mt-10 max-md:max-w-full" />
    </main>

    <section className="flex flex-col items-center pt-12 w-full bg-white max-md:max-w-full" aria-label="Product description">
      <nav className="flex flex-wrap gap-10 max-w-full text-2xl text-neutral-400 w-[649px]" aria-label="Product information tabs">
        <button className="text-black hover:opacity-75">Description</button>
        <button className="grow shrink w-[242px] hover:opacity-75">Additional Information</button>
        <button className="grow shrink w-[111px] hover:opacity-75">Reviews [5]</button>
      </nav>

      <div className="mt-9 text-base text-neutral-400 max-md:max-w-full">
        Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
      </div>

      <div className="mt-9 text-base text-neutral-400 max-md:max-w-full">
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
      </div>

      <div className="mt-11 w-full max-w-[1239px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
        <Image 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/69cbd14de16cbcd9c46f124f640bc4f76db0b620544f981ecfd2a7b24c99a151?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Product detail view 1" 
  className="object-contain w-[250px] rounded-none aspect-[1.74] max-md:mt-7 max-md:w-full" 
  width="250" 
  height="143" 
/>
<Image 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6bde0de39d7b7cfe4a083430a912eecded21f029872d011e19531d8d88c8871?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Product detail view 2" 
  className="object-contain w-[250px] rounded-none aspect-[1.74] max-md:mt-7 max-md:w-full" 
  width="250" 
  height="143" 
/>
        </div>
      </div>

      <hr className="self-stretch mt-16 w-full border border-solid border-zinc-300 min-h-[1px] max-md:mt-10 max-md:max-w-full" />
    </section>

    <section className="flex flex-col items-center px-20 pt-14 pb-24 w-full bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full" aria-label="Related products">
      <h2 className="text-4xl font-medium text-black">Related Products</h2>
      <div className="self-stretch mt-7 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <article className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <Link href="#" className="flex flex-col items-start text-black max-md:mt-8 hover:opacity-90">
            <Image 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a077f92fd46575a030faeed1a15e49321589598aaa57f7b9d014c3e0e8de828?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Trenton modular sofa_3" 
  className="object-contain self-stretch w-[500px] rounded-none aspect-square" 
  width="500" 
  height="500" 
/>
              <h3 className="mt-3.5 text-base">Trenton modular sofa_3</h3>
              <div className="mt-3 text-2xl font-medium">Rs. 25,000.00</div>
            </Link>
          </article>

          <article className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <Link href="#" className="flex flex-col grow items-start text-black max-md:mt-8 hover:opacity-90">
            <Image 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/43f827a16b96cc493c71f16a8bed4d9b4e559c569296a38f33bb59d52de4f4f0?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Granite dining table with dining chair" 
  className="object-contain self-stretch w-[500px] rounded-none aspect-square" 
  width="500" 
  height="500" 
/>
              <h3 className="mt-3.5 text-base">Granite dining table with dining chair</h3>
              <div className="mt-3 text-2xl font-medium">Rs. 25,000.00</div>
            </Link>
          </article>

          <article className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <Link href="#" className="flex flex-col grow items-start text-black max-md:mt-8 hover:opacity-90">
            <Image 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0daa4f02e085c7e050b601337521698dafe24a3690868f748f74a979daac7c1d?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Outdoor bar table and stool" 
  className="object-contain self-stretch w-[500px] rounded-none aspect-square" 
  width="500" 
  height="500" 
/>
              <h3 className="mt-3.5 text-base">Outdoor bar table and stool</h3>
              <div className="mt-3 text-2xl font-medium">Rs. 25,000.00</div>
            </Link>
          </article>

          <article className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <Link href="#" className="flex flex-col grow items-start text-black max-md:mt-8 hover:opacity-90">
            <Image 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/98ba6cbfeda5cc022b59ca90b6963265f350d88d9b5c0875da2c405d6d7e843c?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Plain console with teak mirror" 
  className="object-contain self-stretch w-[500px] rounded-none aspect-square" 
  width="500" 
  height="500" 
/>
              <h3 className="mt-3.5 text-base">Plain console with teak mirror</h3>
              <div className="mt-3 text-2xl font-medium">Rs. 25,000.00</div>
            </Link>
          </article>
        </div>
      </div>
      <Link href="#" className="mt-24 text-xl font-medium text-black hover:underline max-md:mt-10">View More</Link>
      <div className="shrink-0 mt-4 mb-0 h-0.5 border-2 border-black border-solid w-[115px] max-md:mb-2.5"></div>
    </section>


</main>
);
}
