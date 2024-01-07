import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <User name={"ABhishek Reddy(Functional)"} />
      <UserClass name={"Abhishek Reddy (Class)"} location={"Arcadia class"} />
    </div>
  );
};

export default About;
