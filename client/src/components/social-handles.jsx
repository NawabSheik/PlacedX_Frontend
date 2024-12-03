import { Link } from "react-router-dom";
import { socialHandles } from "../constants";

export default function SocialHandles({ nameDisable }) {
  return (
    <div className="flex space-x-4">
      {socialHandles.map((socialHandle) => (
        <SocialHandle
          key={socialHandle.name}
          name={socialHandle.name}
          link={socialHandle.link}
          icon={socialHandle.icon}
          nameDisable={nameDisable}
        />
      ))}
    </div>
  );
}

function SocialHandle({ link, icon: Icon, name, nameDisable = false }) {
  return (
    <Link
      to={link}
      className="flex items-center text-white hover:text-gray-500 hover:scale-105 duration-150 transition-colors"
    >
      <Icon className="h-5 w-5 mr-2" />
      {!nameDisable && <span>{name}</span>}
    </Link>
  );
}
