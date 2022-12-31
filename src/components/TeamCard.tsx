const TeamCard = () => {
  return (
    <div className="team-card my-12">
      <div className="team-member-pic">
        <img
          src="https://avatars.githubusercontent.com/u/48273777?s=400&u=4d8c5393625744f1ab0dacedc4c6272c149b8ebd&v=4"
          alt=""
          className="w-full"
        />
      </div>
      <div className="team-member-content px-8 py-4 bg-[#121212]">
        <h1 className="text-white lg:text-2xl font-poppins tracking-wide">Shaan Alam</h1>
        <p className="text-gray-200 font-poppins text-[14px]">Technical Head</p>
      </div>
    </div>
  );
};

export default TeamCard;
