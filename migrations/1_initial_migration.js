const UniswapV2Router02 = artifacts.require("UniswapV2Router02");

module.exports = function (deployer) {
  deployer.deploy(UniswapV2Router02,'0x9069bb0717ce976c03ee76f65c30f01719bda09b','0x24564639ef1615887f23fefb2265289220894139');
};
