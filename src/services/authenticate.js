import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import Cookies from 'js-cookie';

import userpool from '../userpool';
export const authenticate=(Email,Password)=>{
    return new Promise((resolve,reject)=>{
        const user=new CognitoUser({
            Username:Email,
            Pool:userpool
        });

        const authDetails= new AuthenticationDetails({
            Username:Email,
            Password
        });

        user.authenticateUser(authDetails,{
            onSuccess:(result)=>{
                console.log("login successful");
                let accessToken = result.getAccessToken().getJwtToken();
                var idToken = result.idToken.jwtToken;
                console.log(idToken);
                console.log(accessToken);
                const token = idToken;
                Cookies.set('token', token, { expires: 7, secure: true });
                resolve(result);
            },
            onFailure:(err)=>{
                console.log("login failed",err);
                reject(err);
            }
        });
    });
};

export const logout = () => {
    const user = userpool.getCurrentUser();
    user.signOut();
    window.location.href = '/';
};