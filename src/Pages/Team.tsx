import TeamCard from "../components/TeamCard";

const Team = () => {
  return (
    <div style={{ color: "white" }}>
      <div className="text-left">
      <h1 className="text-left text-8xl	ml-0" >
        Meet Our Team
      </h1>
      <p className="text-2xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
        aperiam tempore nihil id deserunt fugiat, ab aut quisquam vel incidunt
        enim aliquam, sint doloremque porro, rem exercitationem eligendi maxime
        numquam!
      </p>
      </div>
      <TeamCard/>
      {/* <TeamCard/> */}
    </div>
  );
};

export default Team;
