import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'ap-southeast-2_ylIIsxJev',
    ClientId: '550pitf6cc0udgdlsd1535gi18',

}

export default new CognitoUserPool(poolData);
