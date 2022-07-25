const {expect} = require("chai")
const {ethers} = require("hardhat")

describe("Whitelist", function() {
  let Whitelist, WhitelistContract, owner, addr1, addr2, addr3, addrs
  beforeEach(async function() {
    Whitelist = ethers.getContractFactory("Whitelist")
    ;[owner, addr1, addr2, addr3, ...addrs] = ethers.getSigners()
    WhitelistContract = await Whitelist.deploy(1)
    WhitelistContract.connect(addr1).addToWhitelist()
  })

  describe("addToWhitelist", function() {
    it("Should fail if somebody attempts to whitelist themselves twice", async function() {
      await expect(
        WhitelistContract.connect(addr1).addToWhitelist()
      ).to.be.reverted
    })
  })

  describe("addToWhitelist", function() {
    it("Should fail if somebody attempts to add an address if it is at its limit", async function() {
      await expect(
        WhitelistContract.connect(addr2).addToWhitelist()
      ).to.be.reverted
    })
  })
})