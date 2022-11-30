import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const ExperiencesData = {
  'responsibilities': [
    'Participate in requirement analysis, technical studies, system design, implementation',
    'Collaborate on code reviewing, coaching & integrate with linting, code analysis tools to ensure the quality of the code',
    'Monitoring & troubleshooting large-scale distributed systems',
    'Provide customers support'
  ],
  'timeline': [
    {
      'key': 'key-experiences-rakuten',
      'date': 'Sep 2019 - Present',
      'icon': <WorkIcon />,
      'header': {
        'title': 'Rakuten Group, Inc.',
        'subheader': 'Software Engineer'
      },
      'content': 'A famous Japanese electronic commerce and online retailing company based in Tokyo.'
    },
    {
      'key': 'key-experiences-accenture',
      'date': 'Feb 2018 - Aug 2019',
      'icon': <WorkIcon />,
      'header': {
        'title': 'Accenture',
        'subheader': 'Digital Technology Developer Analyst'
      },
      'content': 'A global professional services company specializing in information technology services and consulting.'
    },
    {
      'key': 'key-experiences-wintech',
      'date': 'Aug 2017 - Dev 2017',
      'icon': <WorkIcon />,
      'header': {
        'title': 'Wintech Network Technology Co., Limited',
        'subheader': 'Analyst Programmer'
      },
      'content': 'A startup company featured in the R&D of network technologies including data analysis, Apps and more.'
    },
    {
      'key': 'key-experiences-hket',
      'date': 'Nov 2015 - July 2017',
      'icon': <WorkIcon />,
      'header': {
        'title': 'Hong Kong Economic Times Limited',
        'subheader': 'Senior Developer'
      },
      'content': 'A financial daily newspaper publisher in Hong Kong.'
    },
    {
      'key': 'key-experiences-coventry',
      'date': 'Nov 2015',
      'icon': <SchoolIcon />,
      'header': {
        'title': 'Coventry University',
        'subheader': 'Bachelor of Science with Honours First Class in Computing'
      }
    }
  ]
}

export default ExperiencesData;
