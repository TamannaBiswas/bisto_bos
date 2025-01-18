import useAuth from "../../../hooks/useAuth";

export default function UserHome() {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi ,welcome</span>
        {user?.displayName ? user.displayName : "Bsck"}
      </h2>
      UserHome
    </div>
  );
}
