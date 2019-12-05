var SimpleStorage = artifacts.require("./Perligo.sol");

module.exports = function(deployer) {
  deployer.deploy(Perligo);
};
