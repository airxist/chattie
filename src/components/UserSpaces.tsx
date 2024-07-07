import UserCTA from "./UserCTA";

const UserSpaces = ({
  title,
  show,
  description,
}: {
  title: string;
  show: boolean;
  description?: string;
}) => {
  return (
    <div>
      <div>...</div>
      <div>
        <div>
          <h4>{title}</h4>
          {show && <UserCTA user />}
        </div>
        {show && (
          <div>
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSpaces;
