import  Cookie  from 'js-cookie';

const DeleteCookie = (cookiename)=> {
     Cookie.remove(cookiename);
};
export default DeleteCookie;