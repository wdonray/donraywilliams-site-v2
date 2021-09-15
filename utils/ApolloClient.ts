import AppSyncConfig from '../api/aws-exports'
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync'

function GetClient() {
    return new AWSAppSyncClient({
        disableOffline: true,
        url: AppSyncConfig.aws_appsync_graphqlEndpoint,
        region: AppSyncConfig.aws_project_region,
        auth: {
            type: AUTH_TYPE[AppSyncConfig.aws_appsync_apiKey],
            apiKey: AppSyncConfig.aws_appsync_apiKey,
        },
    })
}

export { GetClient }