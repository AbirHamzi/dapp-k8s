var pocteo = artifacts.require("HelloPocteo.sol");

module.exports = function(deployer) {
  deployer.deploy(pocteo);
};
