import { CognitoUserPool } from 'amazon-cognito-identity-js';
const poolData = {
  UserPoolId: "us-east-1_HtrRFYu3U",
  ClientId: "4sjs5el0gv13j387l1kk7krp13",
};

export default new CognitoUserPool(poolData);