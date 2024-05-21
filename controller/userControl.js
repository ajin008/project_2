exports.renderLandingPage = async (req, res) => {
  res.render("user/LandingPage");
};

exports.renderLogin = async (req, res) => {
  res.render("user/login");
};

exports.renderSignup = async (req, res) => {
  res.render("user/signup");
};

exports.SignupData = async (req, res) => {
  const { username, email, phone, password } = req.body;
  console.log("the data of the form", username);
  res.redirect("/LandingPage");
};

exports.renderHome = async (req,res) => {
  res.render("/home")
}