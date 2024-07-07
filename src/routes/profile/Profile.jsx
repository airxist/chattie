import Back from "../../assets/icons/Back";
import avatar from "../../assets/images/avatar.jgp";

const Profile = () => {
  return (
    <section>
      <header>
        <div>
          <Back />
          <h2>User Name</h2>
        </div>
      </header>

      <div>
        <div>
          <div>
            <div>
              <img
                src={avatar}
                alt="avatar"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <p> <span></span> Online</p>
              <h4>User Name</h4>
              <p>user email</p>
              <p>role</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
