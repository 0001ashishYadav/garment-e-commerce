import { GrLocation, GrPhone } from "react-icons/gr";
import { IoMailOutline } from "react-icons/io5";

function ContactPage() {
  return (
    <div className="h-[70vh] flex justify-center gap-3 items-center max-w-6xl mx-auto pt-24">
      <div className="h-[68%] w-[35%] bg-blue-300/15 rounded-lg px-4 py-6">
        <p className="text-3xl font-extrabold ml-2">Get in touch:</p>
        <p className="text-xl text-gray-700 font-medium">
          Fill in the form to start a conversation
        </p>

        <div className=" text-gray-700 mt-8 flex justify-center items-center gap-4">
          <GrLocation className="text-3xl" />
          <span className="w-[70%]">
            Lorem ipsum dolor sit amet, consectetur.
          </span>
        </div>

        <div className=" text-gray-700 mt-4 flex justify-center items-center gap-4">
          <GrPhone className="text-3xl" />
          <span className="w-[70%]">+91 1234567890</span>
        </div>

        <div className=" text-gray-700 mt-4 flex justify-center items-center gap-4">
          <IoMailOutline className="text-3xl" />
          <span className="w-[70%]"> info@_abc.in</span>
        </div>
      </div>

      <div className="h-[68%] w-[35%] flex items-center rounded-lg px-4 py-6">
        <div className="w-[100%]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="grid gap-5 mb-5">
              <div className="h-10 w-[90%] flex items-center border-2 font-medium pl-4 border-gray-500/15 rounded-md">
                <input
                  className="border-none outline-none bg-transparent w-[95%]"
                  type="text"
                  placeholder="Full Name"
                />
              </div>

              <div className="h-10 w-[90%] flex items-center border-2 font-medium pl-4 border-gray-500/15 rounded-md">
                <input
                  className="border-none outline-none bg-transparent w-[95%]"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div className="h-10 w-[90%] flex items-center border-2 font-medium pl-4 border-gray-500/15 rounded-md">
                <input
                  className="border-none outline-none bg-transparent w-[95%]"
                  type="number"
                  placeholder="Telephone Number"
                />
              </div>
            </div>

            <button
              type="submit"
              className="flex justify-center items-center gap-1 px-5 py-2 rounded-md text-white bg-red-900"
            >
              <span>Submit</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
