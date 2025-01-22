import Image from "next/image";
interface ProfilePictureProps {
  src: string;
}
const ProfilePicture = ({ src }: ProfilePictureProps) => {
  return (
    <Image
      src={src}
      alt="profile"
      width={96}
      height={96}
      className="border-2 border-gray-300 rounded-full"
    />
  );
};

interface ProfileDetailsProps {
  name: string;
  email: string;
}

const ProfileDetails = ({ name, email }: ProfileDetailsProps) => {
  return (
    <div className="text-left">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm font-bold">{email}</p>
    </div>
  );
};

interface ContactButtonProps {
  onClick: () => void;
}

const ContactButton = ({ onClick }: ContactButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
    >
      Contact
    </button>
  );
};
interface UserProfileCardProps {
  user: {
    ProfilePicture: string;
    name: string;
    email: string;
  };
  onContactClick: () => void;
}
export const UserProfileCard = ({
  user,
  onContactClick,
}: UserProfileCardProps) => {
  return (
    <div className="flex flex-col item-center p-4 bg-white rounded shadow-lg">
      <ProfilePicture src={user.ProfilePicture} />
      <ProfileDetails name={user.name} email={user.email} />
      <ContactButton onClick={onContactClick} />
    </div>
  );
};

export default UserProfileCard;
