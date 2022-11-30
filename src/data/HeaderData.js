// icon
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PublicIcon from '@mui/icons-material/Public';
import TerminalIcon from '@mui/icons-material/Terminal';

const HeaderData = {
  'avatar': {
    'alt': 'PQAB'
  },
  'title': 'Pui Q',
  'subheader': 'Software Engineer',
  'items': [
    {
      'key': 'header-item-experiences',
      'icon': <TerminalIcon />,
      'label': '7+ years of experiences in Software Engineering'
    },
    {
      'key': 'header-item-located',
      'icon': <PublicIcon />,
      'label': 'Borned in Hong Kong, Located in Tokyo, Japan'
    },
    {
      'key': 'header-item-personal',
      'icon': <FavoriteIcon />,
      'label': 'Passionate about technology, self-motivated and willing to learn'
    }
  ],
  'skills': [
    {
      'key': 'header-skills-java',
      'label': 'Java'
    },
    {
      'key': 'header-skills-micronaut',
      'label': 'Micronaut'
    },
    {
      'key': 'header-skills-kafka',
      'label': 'Kafka'
    },
    {
      'key': 'header-skills-gradle',
      'label': 'Gradle'
    },
    {
      'key': 'header-skills-jenkins',
      'label': 'Jenkins'
    },
    {
      'key': 'header-skills-kubernetes',
      'label': 'Kubernetes'
    }
  ],
  'contacts': [
    {
      'key': 'header-contacts-github',
      'icon': <GitHubIcon />,
      'label': 'github',
      'link': 'https://github.com/pqab'
    },
    {
      'key': 'header-contacts-linkedIn',
      'icon': <LinkedInIcon />,
      'label': 'linkedIn',
      'link': 'https://www.linkedin.com/in/pqab'
    },
    {
      'key': 'header-contacts-email',
      'icon': <EmailIcon />,
      'label': 'email',
      'link': 'mailto:pqabrac@gmail.com'
    }
  ]
}

export default HeaderData;
