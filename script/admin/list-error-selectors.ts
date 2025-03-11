import * as fs from "fs";
import * as path from "path";
import { ethers } from "ethers";

function recurseArtifacts(filePath: string) {
  const res = [];

  const stat = fs.statSync(filePath);
  if (stat.isDirectory()) {
    // If the file is a directory, recurse into it
    const subFiles = fs.readdirSync(filePath);
    for (const subFile of subFiles) {
      res.push(...recurseArtifacts(path.join(filePath, subFile)));
    }
  } else if (filePath.endsWith(".dbg.json")) {
    return [];
  } else if (filePath.endsWith(".json")) {
    res.push(filePath);
  } else {
    console.log("Unknown file type: ", filePath);
  }

  return res;
}

function main() {
  // load in all contracts from ./artifacts
  const allFiles = recurseArtifacts(path.join(__dirname, "../../artifacts"));
  allFiles.push(
    ...recurseArtifacts(path.join(__dirname, "../../../../drv/v2-matching/out"))
  );
  allFiles.push(
    ...recurseArtifacts(
      path.join(__dirname, "../../../../drv/v2-matching/lib/v2-core/out")
    )
  );
  // for each contract, get the abi
  // for each abi, get all errors and work out the selectors
  // for each selector, check if it's in the list of known selectors
  // if not, log it

  const uniqueErrors = new Set();

  for (const file of allFiles) {
    const contractDetails = require(file);
    if (!contractDetails.abi) {
      // console.log("No abi found for contract: ", file);
      continue;
    }
    const abi = contractDetails.abi.filter((x) => x.type === "error");

    const contract = new ethers.Contract(`0x${"0".repeat(40)}`, abi);
    Object.keys(contract.interface.errors).forEach((x) => uniqueErrors.add(x));
  }

  // console.log(uniqueErrors);
  // keccak the error names
  uniqueErrors.forEach((x: string) => {
    console.log(x, ethers.utils.id(x).slice(0, 10));
  });
}

main();
