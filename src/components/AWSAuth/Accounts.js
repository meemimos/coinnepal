import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import React, { createContext } from 'react';
import Pool from '../../services/UserPool';

const AccountContext = createContext();

const Accounts = props => {
    const getSession = async() => 
        await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            if(user) {
                user.getSession(async (err, session) => {
                    if(err) {
                        reject();
                    } else {
                        const attributes = await new Promise((resolve, reject) => {
                            user.getUserAttributes((err, attributes) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    const results = {};

                                    for (let attribute of attributes) {
                                        const {Name, Value} = attribute;
                                        results[Name] = Value;
                                    }
                                    resolve(results);
                                }
                            })
                        })
                        resolve({
                            user,
                            ...session,
                            ...attributes
                        });
                    }
                })
            } else {
                reject(); 
            }
        })
    
    const authenticate = async (Username, Password) => 
        
        await new Promise((resolve, reject) => {
            const user = new CognitoUser({ Username, Pool });
            
            const authDetails = new AuthenticationDetails({ Username, Password });

            user.authenticateUser(authDetails, {
                
                onSuccess: data => {
                    console.log('onSuccess: ', data);
                    resolve (data);
                },

                onFailure: err => {
                    console.error('onFailure: ', err);
                    reject(err);
                },

                newPasswordRequired: data => {
                    console.log('newPasswrodRequired: ', data);
                    resolve(data);
                }
            })
        })
    

    const logout = () => {
        const user = Pool.getCurrentUser();
        if(user) {
            user.signOut();
        }
    }
    return (
        <AccountContext.Provider value ={{
            authenticate,
            getSession,
            logout
        }}>
            {props.children}
        </AccountContext.Provider>
    );
};

export { Accounts, AccountContext };