import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';


interface SocialMediaLinkProps {
    platform: string;
    link: string;
  }

export default function SocialMediaLink({ platform, link }: SocialMediaLinkProps ) {
  const icons = [
    {platform: 'linkedin', icon: <FontAwesomeIcon icon={faLinkedin} />},
    {platform: 'facebook', icon: <FontAwesomeIcon icon={faFacebook} />},
    {platform: 'twitter', icon: <FontAwesomeIcon icon={faTwitter} />},
    {platform: 'youtube', icon: <FontAwesomeIcon icon={faYoutube} />},
    {platform: 'instagram', icon: <FontAwesomeIcon icon={faInstagram} />},
    {platform: 'github', icon: <FontAwesomeIcon icon={faGithub} />}
  ];

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center">
      {icons.find(icon => icon.platform === platform)?.icon || <span className="mr-2"><FontAwesomeIcon icon={faLink} /></span>}
      <span className="ml-2 text-blue-600">{link}</span>
    </a>
  );
}