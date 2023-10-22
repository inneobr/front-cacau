import Link from "next/link";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiPinterestFill,
  RiTwitchFill,
  RiYoutubeFill
} from 'react-icons/ri';

const socials = [
    { name: 'Youtube',      icon: <RiYoutubeFill />,    path: 'null' },
    { name: 'Instagram',    icon: <RiInstagramFill />,  path: 'https://www.instagram.com/acacauramos' },
    { name: 'Facebook',     icon: <RiFacebookFill />,   path: 'null' },
    { name: 'Twitch',       icon: <RiTwitchFill />,     path: 'null' },
    { name: 'Pintrest',     icon: <RiPinterestFill />,  path: 'null' }
]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <nav className={`${containerStyles}`}>
            {
                socials.map((item, index) => {
                    return (
                        <Link key={index}
                            href={item.path} target="_blank">                          
                            <div className={`${iconStyles}`}>{item.icon}</div>
                            
                        </Link>
                    );
                })
            }
        </nav>
    )
}
export default Social