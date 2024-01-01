// const frontendUrl = 'http://localhost:4200/';
// const backendUrl = 'http://localhost:8080/';
// const loginUrl = 'http://localhost:4200/login';

const frontendUrl ='https://video.cryptoconsulting.tube/';
const backendUrl =  'https://api.cryptoconsulting.tube/';
const loginUrl = 'https://www.cryptoconsulting.tube/login';
const wasabiUrl = 'https://freedom-social.s3.us-east-1.wasabisys.com/';
const logoutUrl = 'https://www.cryptoconsulting.tube/logout';;



export const environment = {
  production: true,
  frontendUrl: frontendUrl,
  backendUrl: backendUrl,
  loginUrl: loginUrl,
  apiUrl: `${backendUrl}api/v1/`,
  domain: '.cryptoconsulting.tube',
  wasabiUrl: wasabiUrl,
  socketUrl: `${backendUrl}`,
  conferenceUrl: 'https://facetime.tube/',
  logoutUrl: logoutUrl
};

