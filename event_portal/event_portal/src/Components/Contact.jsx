import axios from "axios";
const Contact = () => {
  const UploadData = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log(`${import.meta.env.VITE_APP_API_URL}`);

    if (name === "" || email === "" || message === "") {
      alert("All fields are mandatory");
    } else {
      axios
        .post(`${import.meta.env.VITE_APP_API_URL}` + "messages", {
          name: name,
          email: email,
          message: message,
        })
        .then((res) => {
          if (res.data.status === 200) {
            alert("Data Added Successfully");
          } else {
            alert("Something went wrong");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    //console.log([name, email, message]);
  };
  return (
    <>
    <div className="aboutHolder w-full ml-[2vmin] 2xl:h-full 2xl:pb-[10vmin]">
  <h1 className=" font-poppins font-bold text-[12vmin]">
    <span className="text-blue-600">Contact-</span>Us
  </h1>
  <div className="about-area flex justify-center items-center flex-wrap gap-x-10">
    {/* Display Image and Form Responsively */}
    <div className="flex flex-col md:flex-row items-center w-full">
      <div className="md:w-[50%] flex justify-center items-center mt-[6vmin] md:mt-0">
        <img
          src="./customersupport.png"
          alt="Customer Support"
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="ml-2 w-full md:w-[40%] mt-[6vmin] p-3 border-[2px] rounded-lg">
        <p className="text-[4vmin] font-bold font-poppins text-center">
          Please fill the details...
        </p>
        <form className="mt-[4vmin]">
          <div className="inputHolder bg-blue-50 flex border-[1px] gap-x-5 p-1 pl-2 rounded-lg mb-4">
            <img src="./user.png" alt="User Icon" className="h-[17px] w-[25px]" />
            <input
              type="text"
              placeholder="Enter your name..."
              className="w-full p-1 bg-blue-50"
            />
          </div>
          <div className="inputHolder bg-blue-50 flex border-[1px] gap-x-5 p-1 pl-2 rounded-lg mb-4">
            <img src="./email1.png" alt="Email Icon" className="h-[17px] w-[25px]" />
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full p-1 bg-blue-50"
            />
          </div>
          <textarea
            placeholder="Enter Your message..."
            className="w-full bg-blue-50 p-3 border-[1px] rounded-lg mb-4"
            rows={4}
          ></textarea>
          <button
            onClick={(e) => {
              e.preventDefault();
              alert("Data added Successfully");
            }}
            className="bg-blue-600 p-1 text-white text-[3vmin] w-24 mx-auto rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
    </>
  );
};
export default Contact;