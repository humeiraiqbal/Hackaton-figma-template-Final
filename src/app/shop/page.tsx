import Image from "next/image";
import Link from "next/link";


export default function Shop (){
    return(
      
<main>

  <section className="flex relative z-10 flex-col justify-center items-center px-20 py-20 -mt-1.5 w-full text-base text-black whitespace-nowrap min-h-[328px] max-md:px-5 max-md:pb-24 max-md:max-w-full" aria-label="Hero section">
  <Image
  loading="lazy"
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/994d2cee0a74a300e7e875a7aa49c05fe08e475e64b98c8cab43e2bf378568d3?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e"
  alt="Hero background image"
  className="object-cover absolute inset-0 size-full"
  width="500"
  height="300"
/>
    <div className="flex relative flex-col mb-0 max-w-full w-[124px] max-md:mb-2.5">
    <Image
  loading="lazy"
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6dcf059b5e45dbfb4010ee60a510e061112fde85a36230d28ba9a35eb7c94170?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e"
  alt="Shop section icon"
  className="object-contain w-full aspect-[0.94]"
  width="500"
  height="470" 
/>
<nav aria-label="Breadcrumb navigation">
  <div className="flex gap-1.5 text-base text-black whitespace-nowrap">
    <div className="grow font-medium">
      <Link href="/" className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Home</Link>
    </div>
    <Image
  loading="lazy"
  src="/assets/vector.png"
  className="object-contain shrink-0 my-auto w-5 aspect-square"
  alt=""
  role="presentation"
  width={20}   
  height={20}  
 />

    <div className="font-light">
      <Link href="/shop" className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Shop</Link>
    </div>
  </div>
</nav>
    </div>
  </section>
  <section className="flex flex-wrap gap-10 px-20 py-6 mt-10 w-full text-black bg-red-50 max-md:px-5 max-md:mt-10 max-md:max-w-full" aria-label="Filter section">
    <div className="flex flex-1 gap-6 my-auto max-md:max-w-full">
      <button className="flex gap-3 my-auto text-xl whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-label="Filter products">
      <Image 
  loading="lazy" 
  src="/assets/vector.png" 
  alt="" 
  className="object-contain shrink-0 my-auto aspect-square w-[25px]"
  width="25"
  height="25"
/>
        <span>Filter</span>
      </button>
      <div className="flex flex-auto gap-6 items-center text-base">
        <button aria-label="Grid view" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <Image 
  loading="lazy" 
  src="/assets/filter.png" 
  alt="" 
  className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
  width="28"
  height="28"
/>
        </button>
        <button aria-label="List view" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <Image 
  loading="lazy" 
  src="/assets/grid-view.png" 
  alt="" 
  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
  width="96"
  height="96"
/>
        </button>
        <div className="shrink-0 self-stretch w-0.5 border-2 border-solid border-neutral-400 h-[37px]" role="separator"></div>
        <div className="self-stretch my-auto basis-auto">Showing 1–16 of 32 results</div>
      </div>
    </div>
    <div className="flex flex-1 gap-4 text-xl max-md:max-w-full">
      <label typeof="show-items" className="my-auto">Show</label>
      <select id="show-items" className="px-5 whitespace-nowrap bg-white h-[55px] text-neutral-400 w-[55px]">
        <option value="16">16</option>
      </select>
      <label typeof="sort-by" className="my-auto">Sort by</label>
      <select id="sort-by" className="px-8 py-3.5 whitespace-nowrap bg-white text-neutral-400 max-md:px-5">
        <option value="default">Default</option>
      </select>
    </div>
  </section>

<div className="flex flex-col rounded-none" role="region" aria-label="Product Grid">
  <div className="flex flex-col items-center px-20 pt-4 w-full bg-white max-md:px-5 max-md:max-w-full">
    <div className="w-full max-w-[1240px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start text-black max-md:mt-8">
          <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a077f92fd46575a030faeed1a15e49321589598aaa57f7b9d014c3e0e8de828?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Trenton modular sofa in gray upholstery" 
  className="object-contain self-stretch rounded-none aspect-square" 
  width="500" 
  height="500" 
/>
            <div className="mt-3.5 text-base">Trenton modular sofa_3</div>
            <div className="mt-3 text-2xl font-medium" aria-label="Price: 25,000 rupees">Rs. 25,000.00</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-start text-black max-md:mt-8">
          <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/43f827a16b96cc493c71f16a8bed4d9b4e559c569296a38f33bb59d52de4f4f0?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Granite dining table set with chairs" 
  className="object-contain self-stretch w-full rounded-none aspect-square" 
  width="500" 
  height="500" 
/>
            <div className="mt-3.5 text-base">Granite dining table with dining chair</div>
            <div className="mt-3 text-2xl font-medium" aria-label="Price: 25,000 rupees">Rs. 25,000.00</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[51%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-8 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-base text-black max-md:mt-8">
                  <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0daa4f02e085c7e050b601337521698dafe24a3690868f748f74a979daac7c1d?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Outdoor bar table with matching stools" 
  className="object-contain w-full rounded-none aspect-square" 
  width="500" 
  height="500" 
/>
                    <div className="mt-3.5">Outdoor bar table and stool</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-base text-black max-md:mt-8">
                  <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/98ba6cbfeda5cc022b59ca90b6963265f350d88d9b5c0875da2c405d6d7e843c?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Plain console table with teak framed mirror" 
  className="object-contain w-full rounded-none aspect-square" 
  width="600" 
  height="600" 
/>
                    <div className="mt-3.5">Plain console with teak mirror</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 justify-between mt-3 max-w-full text-2xl font-medium text-black w-[476px]">
              <div aria-label="Price: 25,000 rupees">Rs. 25,000.00</div>
              <div aria-label="Price: 25,000 rupees">Rs. 25,000.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="z-10 mt-4 w-full max-w-[1240px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-base text-black max-md:mt-8">
          <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d40f9f3837e4cbe6187af96acb7a8a19e8e73bf19438dd45c83cd558c2ef23be?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Grain coffee table with wooden finish" 
  className="object-contain w-full aspect-square" 
  width="600" 
  height="600" 
/>
            <div className="self-start mt-3.5">Grain coffee table</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-base text-black max-md:mt-8">
          <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd8bf0d69e64700029329c65fcf004d8afe9efa67fd01bf419300017d449c7f4?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Kent coffee table design" 
  className="object-contain w-full aspect-square" 
  width="600" 
  height="600" 
/>
            <div className="self-start mt-3.5">Kent coffee table</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-base text-black max-md:mt-8">
          <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/284934b400d7180c1a176a87de2d90580d058f8db5f6bd81b8ee689a597a9005?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Round coffee table in color variant 2" 
  className="object-contain w-full aspect-square" 
  width="500" 
  height="500" 
/>
            <div className="mt-4">Round coffee table_color 2</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-base text-black max-md:mt-8">
          <Image 
  loading="lazy" 
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fd3b976f6ac21a28635d21a832c15f1a73ce743937abb833fb9c20b96c9ca8c?placeholderIfAbsent=true&apiKey=a8ec4ba57118406bbf044a6ba67f7e9e" 
  alt="Reclaimed teak wood coffee table" 
  className="object-contain w-full aspect-square" 
  width="400" 
  height="400" 
/>
            <div className="mt-4">Reclaimed teak coffee table</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex z-10 flex-col items-center px-20 -mt-2.5 w-full max-md:px-5 max-md:max-w-full">
    <div className="flex flex-wrap gap-10 items-start self-start w-full text-2xl font-medium text-black max-w-[1109px] max-md:max-w-full">
      <div className="grow shrink self-start w-[130px]" aria-label="Price: 15,000 rupees">Rs. 15,000.00</div>
      <div className="grow shrink self-start w-[129px]" aria-label="Price: 225,000 rupees">Rs. 225,000.00</div>
      <div className="grow shrink self-end mt-6 w-[129px]" aria-label="Price: 251,000 rupees">Rs. 251,000.00</div>
      <div className="grow shrink self-end mt-6 w-[129px]" aria-label="Price: 25,200 rupees">Rs. 25,200.00</div>
    </div>
    <nav className="mt-28 max-w-full text-xl text-black w-[392px] max-md:mt-10" aria-label="Pagination">
      <ul className="flex gap-5 justify-between">
        <li>
          <Link href="#" className="px-7 bg-amber-100 rounded-xl h-[60px] w-[60px] flex items-center justify-center max-md:px-5" aria-current="page" aria-label="Page 1">1</Link>
        </li>
        <li>
          <Link href="#" className="px-6 bg-yellow-50 rounded-xl h-[60px] w-[60px] flex items-center justify-center max-md:px-5" aria-label="Page 2">2</Link>
        </li>
        <li>
          <Link href="#" className="px-6 bg-yellow-50 rounded-xl h-[60px] w-[60px] flex items-center justify-center max-md:px-5" aria-label="Page 3">3</Link>
        </li>
        <li>
          <Link href="#" className="px-7 py-4 font-light bg-yellow-50 rounded-xl flex items-center justify-center max-md:px-5" aria-label="Next page">Next</Link>
        </li>
      </ul>
    </nav>
  </div>
</div>
  </main>


    );
}