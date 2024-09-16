
const teamDetails = [
    {
      imageSrc: "Team/shrijan.jpg",
      name: "Shrijan Shrestha",
      position: "Backend Developer"

    },
    {
      imageSrc: "Team/bhuwan.jpg",
      name: "Bhupendra Bikram shah",
      position: "Ui/UX Designer"
    },
    {
      imageSrc: "Team/uday.jpg",
      name: "Uday Shah",
      position: "DevOps Engineer"
    },
    {
      imageSrc: "images/4.jpg",
      name: "Mysti Tark",
      position: "Senior Sorftware Engineer"
    }
  ];

const Teams = () => {
  return (
   <>
           
    <div className ="bg-gradient-to-r from-purple-600 to-red-500 py-24 sm:py-32 text-white ">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight fancy-gradient-text sm:text-4xl Apple">Meet My Fellow Partners</h2>
          <p className="mt-6 text-lg leading-8 text-white Apple">
          Our Tech team is a dynamic group of innovative and dedicated professionals. We are passionate about crafting high-quality, scalable, and efficient solutions that drive technology forward.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
         
         {
            teamDetails.map((teamDetails , index)=>(
              <li key={index} className="Apple">
              <div className="flex items-center gap-x-6 ">
                <img
                  className="h-[6rem] w-[6rem] rounded-full border-4 border-yellow-500"
                  src={teamDetails.imageSrc}
                  alt={teamDetails.name}
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{teamDetails.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-white">{teamDetails.position}</p>
                </div>
              </div>
            </li>
            ))
         }
          
          
        </ul>
      </div>
    </div>
   </>

 )}

export default Teams
