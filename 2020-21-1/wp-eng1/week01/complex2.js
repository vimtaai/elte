const starship = {
  name: "U.S.S. Enterprise",
  registration: "NCC-1707-D",
  class: "Galaxy",
  crew: [
    { name: "Jean-Luc Picard", rank: "captain", division: "command", spieces: "human" },
    { name: "William T. Riker", rank: "commander", division: "command", spieces: "human" },
    { name: "Data", rank: "lt. commander", division: "operations", spieces: "android" },
    { name: "Geordi LaForge", rank: "lieutenant", division: "operations", spieces: "human" },
    { name: "Beverly Crusher", rank: "commander", division: "sciences", spieces: "human" },
    { name: "Worf", rank: "lieutenant", division: "operations", spieces: "klingon" },
    { name: "Deanna Troi", rank: "lt. commander", division: "sciences", spieces: "human/betazoid" }
  ]
};

// Who are the non-human members of the crew?
const nonHumanMembers = starship.crew.filter((crewMember) => crewMember.spieces !== "human");
console.log(nonHumanMembers);
// ... with the rank of "lt. commander"
const ltCommanders = nonHumanMembers.filter((crewMember) => crewMember.rank === "lt. commander");
console.log(ltCommanders);
// ... what are their names and divisons
const ltCommanderData = ltCommanders.map((crewMember) => crewMember.name + ", " + crewMember.division);
console.log(ltCommanderData);