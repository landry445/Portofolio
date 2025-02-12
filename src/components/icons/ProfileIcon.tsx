import { useStateContext } from "../context/ContextProvider";

type ProfileIconProps = {
  size: string;
  isOpenDetail: boolean;
};

const ProfileIcon: React.FC<ProfileIconProps> = ({ size, isOpenDetail }) => {
  const { theme } = useStateContext();

  return (
    <img 
      className={`
        rounded-[17%]
        ${isOpenDetail ? "opacity-10" : "opacity-90"}
      `}
      width={size} 
      height={size} 
      src={theme === "Dark" ? "/img/profile.png" : "/img/profile-light.png"} 
      alt="profile" 
    />
  );
};

export default ProfileIcon;