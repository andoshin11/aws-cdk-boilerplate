import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkBoilerplateStack } from '../cdk-boilerplate-stack';

const app = new cdk.App();
new CdkBoilerplateStack(app, 'CdkBoilerplateStack');
