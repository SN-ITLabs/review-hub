export const HUB_CONST = {
    IS_LOCAL: window.location.hostname === "localhost",

    /* DEV INSTACNE DATA*/
   /* DEV_INSTANCE: "partnerportalsedev", // itappsrcr
    DEV_INSTANCE_USER_NAME: "rcr.integrator",
    DEV_INSTANCE_USER_PASSWORD: "snc123!",*/

    DEV_INSTANCE: "itappsrcr", // itappsrcr
    DEV_INSTANCE_USER_NAME: "review.hub",
    DEV_INSTANCE_USER_PASSWORD: "test123",

    /* PROD INSTACNE DATA*/
    PROD_INSTANCE: "tools4it",

    /*HTTP CLIENT AXIOS*/
    HTTP_CLIENT_TIMEOUT: 300000 //5 mins
};
