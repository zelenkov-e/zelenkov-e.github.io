const API_URL = "https://mvd.gov.by/api/online-service/6";
var submitRef = document.querySelector("#submitBtn");

const getGovInfo = async (data) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json;" },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (err) {
    console.log("Error: ", err);
  }
};

const getCaptcha = async () => {
  const unique = new Date().getTime();
  const captchUrl = `https://mvd.gov.by/api/captcha/main?unique=${unique}`;

  try {
    return await fetch(captchUrl);
  } catch (e) {
    console.log("Error: ", e);
  }
};

const getCaptchaText = async (svg) => {
  const API_URL = "/captcha-solver";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json;" },
      body: JSON.stringify(svg),
    });
    return response.json();
  } catch (err) {
    console.log("Error: ", err);
  }
};

const handleClick = () => {
  const vin = "XW8ZZZ1KZAG002599";
  const { data, id } = getCaptcha();
  // const exmp_captcha = { data: "svg", id: "789484baf8c74e167cfa865506dd2e30d3c09d4d"};

  const captchaText = getCaptchaText(data);

  const DATA = {
    // captcha: "sPW1", //  use captcha solver
    captcha: captchaText, //  use captcha solver
    captchaId: id, //captchaId
    id: 6,
    params: [{ key: "vin", defaultValue: "", value: vin }, { key: "rnum" }, { key: "lang", value: "ru" }, { key: "descr" }],
  };

  getGovInfo(DATA);
};

submitRef.addEventListener("click", handleClick, false);
