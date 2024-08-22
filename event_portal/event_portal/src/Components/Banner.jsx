const Banner = () => {
    return (
      <>
       <div id="banner">
    <div class="h-full w-full pb-5 overflow-x-hidden bg-bgColor flex justify-center items-center flex-col gap-y-4">
        <div class="mt-[-5vmin] lg:mt-0 flex gap-x-2 items-center h-[20vmin]  md:h-[25vmin] lg:h-[10vmin]  lg:ml-0">
            <p class="text-center mt-[-2vmin] text-[4.3vmin] md:text-[3.3vmin] lg:text-[4vmin] lg:font-medium font-poppins md:pl-2 md:pr-2">
                Your own Technical Community where ideas turn into innovation
            </p>
        </div>
        <p class="text-center text-[15vmin] md:text-[12.4vmin] mt-[-4vmin] lg:mt-[-1vmin] font-bold font-poppins pb-2">
            CodeMap <span class="text-blue-600">Events</span>
        </p>
        <p class="text-[4.25vmin] md:text-[3.75vmin] lg:text-[4vmin]  font-poppins mt-[-2.5vmin]">
            ( Where Ideas Transform Into Innovation )
        </p>
        <div class="flex gap-x-2 items-center h-[10vmin]">
            <p class="lg:ml-[0.45vmin] text-[4.1vmin] md:text-[3.85vmin] lg:text-[3.65vmin] font-poppins text-bannerGrey mt-[3vmin]">
                Learn - Participate - Innovate - Grow - Impact
            </p>
        </div>
        <div class="hidden lg:block buttonHolder">
            <div class="buttonHolder h-[23vmin] lg:h-[15vmin]  flex items-center justify-center">
                <button class="text-[4.65vmin] lg:text-[3vmin] font-poppins 2xl:w-full bg-blue-600 p-2 pl-3 pr-3 lg:p-3 lg:pr-4 lg:pl-4 rounded-lg text-white mt-[-3vmin] md:mt-0">
                    Become Campus Lead
                </button>
            </div>
        </div>
    </div>
</div> 
      </>
    );
  };
  export default Banner;
