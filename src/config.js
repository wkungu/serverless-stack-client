const config = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "kungu-notes-app-upload",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://22y5ra1e64.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2_WkipDwudE",
        APP_CLIENT_ID: "22k9roljnv6rhef811as4tdula",
        IDENTITY_POOL_ID: "us-west-2:1b25aa7a-3d56-46c7-b657-5e5e6b83e8d3",
    },
};

export default config;