const Events = () => {
    return (
      <>
      <div id="uEvents">
      <div className="pb-5 2xl:min-h-full 2xl:pb-10 flex flex-col items-center w-full">
        <div>
          <p className="text-blue-600 text-[11vmin] font-bold mt-3 ml-3">
            Upcoming <span className="text-black"> Events </span>
          </p>
        </div>
        <div className="cardArea grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 justify-center items-center mt-3">
          <div className="cardHolder bg-blue-50 shadow-lg p-3 rounded-md border-[1px] flex flex-col justify-center items-center">
            <div className="imageHolder bg-white p-1 w-full h-[35vmin] border-2 border-lightGrey border-[1px] mt-1 rounded-md flex justify-center items-center">
              <img src="./Quiz.avif" className="max-w-full max-h-full object-contain" alt="Online Quiz" />
            </div>
            <div className="mt-2 font-poppins space-y-2 text-center">
              <p className="text-[6vmin] md:text-[5.15vmin] font-medium mt-1"><b>Online Quiz</b></p>
              <p className="text-[4vmin] md:text-[3vmin] 2xl:text-[2.5vmin] text-bannerGrey">Topic: Web Development</p>
              <p className="text-[4vmin] md:text-[3vmin] 2xl:text-[2.5vmin] text-bannerGrey">Category: Open to All</p>
            </div>
          </div>
          <div className="cardHolder bg-blue-50 shadow-lg p-3 rounded-md border-[1px] flex flex-col justify-center items-center">
            <div className="imageHolder bg-white p-1 w-full h-[35vmin] border-2 border-lightGrey border-[1px] mt-1 rounded-md flex justify-center items-center">
              <img src="./seminar.png" className="max-w-full max-h-full object-contain" alt="Technical Session" />
            </div>
            <div className="mt-2 font-poppins space-y-2 text-center">
              <p className="text-[6vmin] md:text-[5.15vmin] font-medium mt-1"><b>Technical Session</b></p>
              <p className="text-[4vmin] md:text-[3vmin] 2xl:text-[2.5vmin] text-bannerGrey">Topic: How to start coding?</p>
              <p className="text-[4vmin] md:text-[3vmin] 2xl:text-[2.5vmin] text-bannerGrey">Category: Open to All</p>
            </div>
          </div>
          <div className="cardHolder bg-blue-50 shadow-lg p-3 rounded-md border-[1px] flex flex-col justify-center items-center">
            <div className="imageHolder bg-white p-1 w-full h-[35vmin] border-2 border-lightGrey border-[1px] mt-1 rounded-md flex justify-center items-center">
              <img src="./hackathon.png" className="max-w-full max-h-full object-contain" alt="Hackathon" />
            </div>
            <div className="mt-2 font-poppins space-y-2 text-center">
              <p className="text-[6vmin] md:text-[5.15vmin] font-medium mt-1"><b>Hackathon</b></p>
              <p className="text-[4vmin] md:text-[3vmin] 2xl:text-[2.5vmin] text-bannerGrey">Topic: Open Innovation</p>
              <p className="text-[4vmin] md:text-[3vmin] 2xl:text-[2.5vmin] text-bannerGrey">Category: Intermediate Coders</p>
            </div>
          </div>
        </div>
        <div className="btnHolder w-full flex justify-center items-center mt-6">
          <button className="bg-blue-600 rounded text-white p-2 text-[2.5vmin] md:text-[2.85vmin]">More Events</button>
        </div>
      </div>
    </div>
      </>
    );
  };
  export default Events;

