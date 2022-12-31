import TeamCard from "../components/TeamCard";

const Team = () => {
  return (
    <div style={{ color: "white" }} className="container mx-auto">
      <div className="container flex mx-auto pt-16 pb-16">
        <div>
          <p className="text-500 xl:text-7xl text-5xl font-extrabold pb-3">
            Meet Our Team
          </p>
          <h1 className="xl:text-2xl text-2xl text-gray font-normal pb-6  mx-auto">
            The Talented People Behind the Scenes of the Organization
          </h1>
        </div>
      </div>
      <h1 className="xl:text-7xl text-2xl text-gray font-extrabold pb-6  mx-auto">
        COUNCIL
      </h1>
      <div className="grid lg:grid-cols-3">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
};

export default Team;
