import * as cdk from '@aws-cdk/core'

export class BaseStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)
    // You may add some common processing...
  }
}
