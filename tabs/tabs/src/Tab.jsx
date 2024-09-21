
import React, { useState } from "react";
import "./App.css";

// Sample event data for Ongoing Events
const events = [
  {
    title: "India Tech Submit",
    date: "Sept 21 - 24",
    location: "Kaushambi, Ghaziabad",
    price: "₹200 onwards",
    image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F852198579%2F272798929277%2F1%2Foriginal.20240917-120033?crop=focalpoint&fit=crop&w=940&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=19781706f1bb86844685ed47d51101ec", // Replace with your actual image URL
  },
  {
    title: "ALGORYTHM",
    date: "Sept 22",
    location: "Kaushambi, Ghaziabad",
    price: "₹100 onwards",
    image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F829172649%2F262347974128%2F1%2Foriginal.20240818-073038?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=215%2C0%2C630%2C315&s=1567fcc5ae2b8762f22f008f8317f381", // Replace with your actual image URL
  },
  {
    title: "TECH-MARKETING",
    date: "Sept 18'24 - Oct 9'24",
    location: "Sector 5, Noida",
    price: "Free",
    image: "https://th.bing.com/th/id/OIP.QvonIsVsbFVo1btPzdXK1gHaEK?rs=1&pid=ImgDetMain", // Replace with your actual image URL
  },
  {
    title: "India Tech Submit",
    date: "Sept 21 - 24",
    location: "Kaushambi, Ghaziabad",
    price: "₹200 onwards",
    image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F852198579%2F272798929277%2F1%2Foriginal.20240917-120033?crop=focalpoint&fit=crop&w=940&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=19781706f1bb86844685ed47d51101ec", // Replace with your actual image URL
  },
  {
    title: "ALGORYTHM",
    date: "Sept 22",
    location: "Kaushambi, Ghaziabad",
    price: "₹100 onwards",
    image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F829172649%2F262347974128%2F1%2Foriginal.20240818-073038?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=215%2C0%2C630%2C315&s=1567fcc5ae2b8762f22f008f8317f381", // Replace with your actual image URL
  },
  {
    title: "TECH-MARKETING",
    date: "Sept 18'24 - Oct 9'24",
    location: "Sector 5, Noida",
    price: "Free",
    image: "https://th.bing.com/th/id/OIP.QvonIsVsbFVo1btPzdXK1gHaEK?rs=1&pid=ImgDetMain", // Replace with your actual image URL
  },
];

// EventCard component to display individual event details
const EventCard = ({ title, date, location, price, image }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img src={image} alt={title} className="h-48 w-full object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{date}</p>
      <p className="text-gray-600">{location}</p>
      <p className="mt-2 text-blue-600 font-bold">{price}</p>
    </div>
  </div>
);

// EventsPage component to display a grid of EventCard components
const EventsPage = () => {
  return (
    <div className="p-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {events.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          date={event.date}
          location={event.location}
          price={event.price}
          image={event.image}
        />
      ))}
    </div>
  );
};

function Tab() {
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    selectedEvent: "",
    termsAccepted: false,
  };

  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const validateForm = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.selectedEvent) newErrors.selectedEvent = "Event must be selected";
    if (!form.termsAccepted) newErrors.termsAccepted = "You must accept the terms";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Registered Successfully");
      console.log(form);
      setForm(initialFormState);
    }
  };

  const [activeTab, setActiveTab] = useState("Ongoing");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app">
      <div className="tabs">
        <button
          className={`tab ${activeTab === "Ongoing" ? "active" : ""}`}
          onClick={() => handleTabClick("Ongoing")}
        >
          Ongoing Events
        </button>
        <button
          className={`tab ${activeTab === "Upcoming" ? "active" : ""}`}
          onClick={() => handleTabClick("Upcoming")}
        >
          Upcoming Events
        </button>
        <button
          className={`tab ${activeTab === "Register" ? "active" : ""}`}
          onClick={() => handleTabClick("Register")}
        >
          Register for event
        </button>
      </div>

      {activeTab === "Ongoing" && (
        <div className="Ongoing-content">
          <div>
              <p className="text-fuchsia-500 text-[11vmin] font-bold mt-3 ml-3">
                Ongoing <span className="text-black"> Events </span>
              </p>
            </div>
          <EventsPage />
        </div>
      )}

      {activeTab === "Upcoming" && (
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
                  <img
                    src="./Quiz.avif"
                    className="max-w-full max-h-full object-contain"
                    alt="Online Quiz"
                  />
                </div>
                <div className="mt-2 font-poppins space-y-2 text-center">
                  <p className="text-[6vmin] md:text-[5.15vmin] font-medium mt-1">
                    <b>Online Quiz</b>
                  </p>
                  <p className="text-[4vmin] md:text-[3vmin] 2xl:text-[2.5vmin] text-bannerGrey">
                    Topic: Web Development
                  </p>
                  <p className="text-[4vmin] md:text-[3vmin] 2xl:text-[2.5vmin] text-bannerGrey">
                    Category: Open to All
                  </p>
                </div>
              </div>
              <div className="cardHolder bg-blue-50 shadow-lg p-3 rounded-md border-[1px] flex flex-col justify-center items-center">
                <div className="imageHolder bg-white p-1 w-full h-[35vmin] border-2 border-lightGrey border-[1px] mt-1 rounded-md flex justify-center items-center">
                  <img
                    src="./seminar.png"
                    className="max-w-full max-h-full object-contain"
                    alt="Technical Session"
                  />
                </div>
                <div className="mt-2 font-poppins space-y-2 text-center">
                  <p className="text-[6vmin] md:text-[5.15vmin] font-medium mt-1">
                    <b>Technical Session</b>
                  </p>
                  <p className="text-[4vmin] md:text-[3vmin] 2xl:text-[2.5vmin] text-bannerGrey">
                    Topic: How to start coding?
                  </p>
                  <p className="text-[4vmin] md:text-[3vmin] 2xl:text-[2.5vmin] text-bannerGrey">
                    Category: Open to All
                  </p>
                </div>
              </div>
              <div className="cardHolder bg-blue-50 shadow-lg p-3 rounded-md border-[1px] flex flex-col justify-center items-center">
                <div className="imageHolder bg-white p-1 w-full h-[35vmin] border-2 border-lightGrey border-[1px] mt-1 rounded-md flex justify-center items-center">
                  <img
                    src="./hackathon.png"
                    className="max-w-full max-h-full object-contain"
                    alt="Hackathon"
                  />
                </div>
                <div className="mt-2 font-poppins space-y-2 text-center">
                  <p className="text-[6vmin] md:text-[5.15vmin] font-medium mt-1">
                    <b>Hackathon</b>
                  </p>
                  <p className="text-[4vmin] md:text-[3vmin] 2xl:text-[2.5vmin] text-bannerGrey">
                    Topic: Open Innovation
                  </p>
                  <p className="text-[4vmin] md:text-[3vmin] 2xl:text-[2.5vmin] text-bannerGrey">
                    Category: Intermediate Coders
                  </p>
                </div>
              </div>
            </div>
            <div className="btnHolder w-full flex justify-center items-center mt-6">
              <button className="bg-blue-600 rounded text-white p-2 text-[2.5vmin] md:text-[2.85vmin]">
                More Events
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Register" && (
        <div
          className="h-screen flex items-center justify-center"
          style={{
            backgroundImage:
              "linear-gradient(115deg, #9F7AEA, #FEE2FE)",
          }}
        >
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
              <div
                className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://img.freepik.com/premium-photo/vertical-technology-background-with-lines-representing-data_494516-1771.jpg')",
                }}
              >
                <h1 className="text-rose-600 text-3xl mb-3">Welcome</h1>
                <div>
                  <p className="text-yellow-400">
                  Join the latest tech events and unlock opportunities to connect, learn, and innovate with industry leaders <br />
                    <a
                      href="#"
                      className="text-yellow-400 font-semibold"
                    >
                      Learn more
                    </a>
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 py-16 px-12">
                <h2 className="text-3xl mb-4">Register</h2>
                <p className="mb-4">
                Register now to secure your spot!
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      className="border border-gray-400 py-1 px-2"
                    />
                    {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      className="border border-gray-400 py-1 px-2"
                    />
                    {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
                  </div>
                  <div className="mt-5">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="border border-gray-400 py-1 px-2 w-full"
                    />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                  </div>
                  <div className="mt-5">
                    <select
                      name="selectedEvent"
                      value={form.selectedEvent}
                      onChange={handleChange}
                      className="border border-gray-400 py-1 px-2 w-full"
                    >
                      <option value="">Select an event</option>
                      {events.map((event, index) => (
                        <option key={index} value={event.title}>
                          {event.title}
                        </option>
                      ))}
                    </select>
                    {errors.selectedEvent && <p className="text-red-500">{errors.selectedEvent}</p>}
                  </div>
                  <div className="mt-5">
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      checked={form.termsAccepted}
                      onChange={handleChange}
                      className="border border-gray-400"
                    />
                    <span>
                      I accept the{" "}
                      <a
                        href="#"
                        className="text-purple-500 font-semibold"
                      >
                        Terms of Use
                      </a>{" "}
                      &{" "}
                      <a
                        href="#"
                        className="text-purple-500 font-semibold"
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </div>
                  <div className="mt-5">
                    <button className="w-full bg-purple-500 py-3 text-center text-white" type="submit">
                      Register Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tab;


