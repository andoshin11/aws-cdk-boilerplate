#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkBoilerplateStack } from '../lib/cdk-boilerplate-stack';

const app = new cdk.App();
new CdkBoilerplateStack(app, 'CdkBoilerplateStack');
