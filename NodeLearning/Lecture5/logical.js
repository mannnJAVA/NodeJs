const logic = () => {
  let num = 6;
  {
    if ((num = 10)) {
      console.log(num);
    } else {
      console.log("Not 10");
    }
  }
};

module.exports = logic;
