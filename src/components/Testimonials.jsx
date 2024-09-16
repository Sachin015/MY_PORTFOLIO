const cardDetails = [
    {
      imageSrc: "images/1.jpg",
      name: "John Martin",
      descriptionText: "Good programmar with passsion , Dedication & Genieun.",
      position: "Client"

    },
    {
      imageSrc: "images/2.jpg",
      name: "Alex Ryan",
      descriptionText: " A Good Design can Attract People & And a Good Programmar can Give Life to It.",
      position: "M.D of TechInspire"
    },
    {
      imageSrc: "images/3.jpg",
      name: "Charlie Sensor",
      descriptionText: "I love his Dedication Towards Innovation, Coding Nerd",
      position: "C.E.O of Space-X"
    },
    {
      imageSrc: "images/4.jpg",
      name: "Mysti Tark",
      descriptionText: "He is so Awesome guy , with smiling & positive attitude",
      position: "Senior Sorftware Engineer"
    }
  ];
  
  const TCard = () => {
    return (
      <div className=" bg-black min-h-[70vh] w-full py-4 px-4  ">
      <h1 className=" py-6  font-semibold text-white flex justify-center fancy-gradient-text ">What People are saying about me ?</h1>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-4 px-8 ">
      {
        cardDetails.map((People , index)=>(
          <div key={index}  className="  gap-4 m-4 rounded-lg shadow-md Apple ">
          <div className =" rounded-md  shadow-sm  mx-auto  bg-black border ">
          <div className ="flex flex-1 flex-col justify-between p-8 ">
            <div className ="mb-4 flex space-x-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className ="h-6 w-6 text-yellow-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className ="h-6 w-6 text-yellow-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className ="h-6 w-6 text-yellow-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className ="h-6 w-6 text-yellow-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className ="h-6 w-6 text-yellow-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
            <div className ="flex-1 pt-2">
              <blockquote>
                <p className ="text-lg text-white">
                  {People.descriptionText}
                </p>
              </blockquote>
            </div>
            <div className ="mt-8 border-t border-white pt-4 ">
              <div className ="flex items-center">
                <img
                  className ="h-10 w-10 flex-shrink-0 rounded-full object-cover border-4"
                  src={People.imageSrc}
                  alt={People.name}
                /> 
                <div className ="ml-3 min-w-0">
                  <p className ="truncate text-base font-semibold text-white">
                    {People.name}
                  </p>
                  <p className ="truncate text-base text-white">{People.position}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
        ))
      }
      </div>

      </div>
    );
  };
  export default TCard