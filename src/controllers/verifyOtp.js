const { handler, mailer } = require("express-mongo-handlers");
const CONSTANT = require("../configs/constants");
const validation = require("../helpers/validator");

async function controller({ resp, req, params }) {
  const rule = {
    email: `required|VEROTP0001|string`,
    otp: `required|VEROTP0002|number`,
  };


  const body = await validation({ rule, req });
  mailer.verifyOtp({ email: body.email, otpCode: body.otp, throwError: true })
  return resp.response({ data: body });
}

handler()(controller, { enableLog: CONSTANT.enableAPILog, path: "POST.verifyOtp" });
