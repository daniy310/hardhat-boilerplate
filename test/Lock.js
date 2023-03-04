const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("SimpleStorage", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployBasicFixture() {
    const [owner, otherAccount] = await ethers.getSigners();
    const SimpleStorageFactory = await ethers.getContractFactory(
      "SimpleStorage"
    );
    const simpleStorage = await SimpleStorageFactory.deploy();

    return { simpleStorage, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { simpleStorage, owner } = await loadFixture(deployBasicFixture);

      expect(await simpleStorage.owner()).to.equal(owner.address);
    });
  });
});
