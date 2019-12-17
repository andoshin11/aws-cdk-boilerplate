import * as cdk from '@aws-cdk/core'
import { BaseStack } from './base'
import { STACK_NAMES } from '../const'

export class SampleStack extends BaseStack {
  _brand: 'SampleStack'

  constructor(scope: cdk.Construct, props?: cdk.StackProps) {
    super(scope, STACK_NAMES.SAMPLE.id, props)

    // Add workflow here...
  }
}

