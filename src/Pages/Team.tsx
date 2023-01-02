import Skeleton from "react-loading-skeleton";
import TeamCard from "../components/TeamCard";
import useMember from "../hooks/useMembers";

const Team = () => {
  const { isLoading, isFetching, data } = useMember();

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
        {(isLoading || isFetching) && (
          <>
            <Skeleton
              height={300}
              width={370}
              baseColor="#202020"
              highlightColor="#444"
            />
            <Skeleton
              height={300}
              width={370}
              baseColor="#202020"
              highlightColor="#444"
            />
            <Skeleton
              height={300}
              width={370}
              baseColor="#202020"
              highlightColor="#444"
            />
          </>
        )}
        {!isFetching &&
          !isLoading &&
          data?.map((member) => <TeamCard member={member} />)}
      </div>
    </div>
  );
};

export default Team;
