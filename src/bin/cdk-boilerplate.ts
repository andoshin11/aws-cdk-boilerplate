import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import * as stacks from '../stacks'

const app = new cdk.App();

// Init stacks
new stacks.SampleStack(app)
