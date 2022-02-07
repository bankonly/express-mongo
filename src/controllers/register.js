const { handler, mailer, helper } = require("express-mongo-handlers");
const CONSTANT = require("../configs/constants");
const validation = require("../helpers/validator");

async function controller({ resp, req }) {
  const rule = {
    email: `required|EMAIL400|string`,
  };
  const body = await validation({ rule, req });
  await mailer.send({ from: process.env.MAILER_EMAIL, to: body.email, otpCode: helper.generateOtp({}), subject: "Quota Verification" });
  return resp.response({ data: body });
}

handler()(controller, { enableLog: CONSTANT.enableAPILog, path: "POST.register" });
